(function () {
  "use strict";
  if (window.__nxMotion) return;
  window.__nxMotion = true;

  /* ============ CONFIG — tweak these, nothing else ============ */
  var CFG = {
    easing:        'cubic-bezier(.16,1,.3,1)', // soft expo-out for everything
    wixDurMul:     1.15,                       // Wix entrance anims get this much longer
    wixDurMax:     1600,                       // ms cap after the multiplier
    wixBlur:       5,                          // px: blur-in on Wix entrance anims
    revealDur:     900,                        // ms: our own reveals
    revealDrop:    16,                         // px: rise distance of our own reveals
    revealBlur:    6,                          // px: blur-in of our own reveals
    revealStagger: 55,                         // ms between sibling reveals
    revealSafety:  2000,                       // ms: force-show everything we hid
    scanMs:        600,                        // ms: re-scan interval (SPA nav)
    scrollMax:     1.2,                        // px: scroll-blur cap (very subtle)
    bybitMax:      0.8,                        // px: lower cap on /bybit
    scrollMin:     9,                          // px/frame: velocity before blur starts
    scrollSat:     65,                         // px/frame: velocity that reaches the cap
    scrollMode:    'svg'                       // 'svg' = vertical-only (recommended) | 'css'
  };
  /* ============================================================ */

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var touch  = !!(window.matchMedia && (matchMedia('(hover: none)').matches || ('ontouchstart' in window)));
  var EASE = CFG.easing;
  var isBybit = function () { return /\/bybit\/?($|\?|#)/i.test(location.pathname); };

  /* ---------- one dynamic rule for the scroll filter ---------- */
  var dyn = document.createElement('style');
  dyn.id = 'nxm-dyn';
  (document.head || document.documentElement).appendChild(dyn);
  var dsheet = dyn.sheet, ruleIdx = -1;
  function setFilter(css) {
    try {
      if (ruleIdx === -1) { dsheet.insertRule('#SITE_PAGES{filter:none}', 0); ruleIdx = 0; }
      dsheet.cssRules[ruleIdx].style.cssText = css ? ('filter:' + css) : 'filter:none';
    } catch (e) { /* fail open: no blur */ }
  }

  /* ---------- 1) upgrade Wix's native entrance animations ---------- */
  var animSeen = new WeakSet();
  function upgradeWixAnims() {
    var list;
    try { list = document.getAnimations(); } catch (e) { return; }
    for (var i = 0; i < list.length; i++) {
      var a = list[i];
      var name = a.animationName || '';
      if (name.indexOf('motion-') !== 0) continue;          // only Wix's own motion anims
      var t = a.effect && a.effect.target;
      if (!t || animSeen.has(a)) continue;
      animSeen.add(a);
      var base;
      try { base = a.effect.getTiming(); } catch (e) { continue; }
      var dur = base.duration;
      if (!(dur > 0)) continue;
      var newDur = Math.min(dur * CFG.wixDurMul, CFG.wixDurMax);
      var tl = a.timeline;
      // DocumentTimeline => wall clock. ScrollTimeline (scroll-scrub) => pacing untouched.
      var wall = !tl || !tl.constructor || tl.constructor.name === 'DocumentTimeline';
      try { a.effect.updateTiming({ easing: EASE, duration: newDur }); } catch (e) {}
      // Blur-in only on anims that haven't played yet (no re-flash), never on touch,
      // never on scroll-scrubbed anims (filter would fight the scrub for the compositor).
      if (touch || !wall || a.playState === 'finished') continue;
      try {
        t.animate([{ filter: 'blur(' + CFG.wixBlur + 'px)' },
                   { filter: 'blur(0px)', offset: 0.72 },
                   { filter: 'blur(0px)' }],
                  { duration: newDur, delay: base.delay || 0, easing: EASE, fill: 'both' });
      } catch (e) { /* element detached mid-scan: fine */ }
    }
  }

  /* ---------- 2) our own scroll reveal for un-animated content ---------- */
  var io = null, revealed = new WeakSet();
  function hasAnimInSubtree(el) {
    if (el.getAnimations && el.getAnimations().length) return true;
    var n = 0, stack = [el];
    while (stack.length && n < 400) {
      var cur = stack.pop(); n++;
      if (cur.getAnimations && cur.getAnimations().length) return true;
      for (var i = 0; i < cur.children.length; i++) stack.push(cur.children[i]);
    }
    return false;
  }
  function pickRevealTargets() {
    var pages = document.getElementById('SITE_PAGES');
    if (!pages) return [];
    var fold = innerHeight * 0.9;
    var cand = pages.querySelectorAll('.wixui-section > *, .wixui-section > * > *');
    var out = [], seen = new Set();
    for (var i = 0; i < cand.length; i++) {
      var el = cand[i];
      if (revealed.has(el) || seen.has(el) || el.nodeType !== 1) continue;
      if (el.classList.contains('nxm-done')) continue;
      var cls = el.className.toString();
      if (/\bnx-/.test(cls)) continue;                                   // bybit's own code owns it
      var sa = (el.getAttribute && el.getAttribute('style')) || '';
      if (/opacity|transform/i.test(sa)) continue;                       // someone owns inline style
      var cs = getComputedStyle(el);
      if (cs.position === 'fixed' || cs.position === 'sticky') continue;
      if (cs.animationName && cs.animationName !== 'none') continue;     // Wix animates it
      if (el.closest('#SITE_HEADER') || el.closest('#SITE_FOOTER')) continue;
      if (el.tagName === 'IFRAME' || el.closest('iframe')) continue;
      var r = el.getBoundingClientRect();
      if (r.top + scrollY < fold) continue;                              // above the fold: never hide
      if (r.height < 56 || r.height > 5000 || r.width < 120) continue;
      if (/^bg(Layers|Media)_/.test(el.id || '')) continue;
      var tagCls = (el.tagName + ' ' + (el.id || '') + ' ' + cls).toLowerCase();
      if (isBybit() && /image|img|gallery|grid|slider|photo/.test(tagCls)) continue;
      if (hasAnimInSubtree(el)) continue;                                // Wix runtime owns it
      seen.add(el);
      out.push(el);
    }
    return out;
  }
  function ensureIO() {
    if (io) return;
    io = new IntersectionObserver(function (entries) {
      var fire = entries.filter(function (en) { return en.isIntersecting; })
                        .map(function (en) { return en.target; });
      fire.sort(function (a, b) { return a.getBoundingClientRect().top - b.getBoundingClientRect().top; });
      fire.forEach(function (el, k) { reveal(el, k); });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  }
  function stage(el) {
    revealed.add(el);
    el.classList.add('nxm-hidden');                                      // opacity:0 (our CSS class)
    setTimeout(function () { unhide(el); }, CFG.revealSafety);           // SAFETY NET: always shown
    ensureIO();
    io.observe(el);
  }
  function unhide(el) {
    if (el.classList.contains('nxm-hidden')) el.classList.remove('nxm-hidden');
    el.classList.add('nxm-done');
    if (io) io.unobserve(el);
  }
  function reveal(el, k) {
    if (!el.classList.contains('nxm-hidden')) return;
    var delay = k * CFG.revealStagger;
    try {
      if (touch) {                                                       // no filters on touch
        el.animate([{ opacity: 0, transform: 'translateY(' + CFG.revealDrop + 'px)' },
                    { opacity: 1, transform: 'translateY(0)' }],
                   { duration: CFG.revealDur, delay: delay, easing: EASE, fill: 'both' });
      } else {
        el.style.opacity = '';                                           // WAAPI owns opacity
        el.animate([{ opacity: 0, transform: 'translateY(' + CFG.revealDrop + 'px)', filter: 'blur(' + CFG.revealBlur + 'px)' },
                    { opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' }],
                   { duration: CFG.revealDur, delay: delay, easing: EASE, fill: 'both' });
      }
    } catch (e) {}
    unhide(el);
  }

  /* ---------- 3) scroll velocity blur (vertical, capped, decays to 0) ---------- */
  var blurEl = document.getElementById('nxm-blur');
  var pagesEl = document.getElementById('SITE_PAGES');
  var lastY = 0, vel = 0, cur = 0, active = false, wcOn = false, blurOff = false;
  var mode = CFG.scrollMode;
  if (mode === 'svg' && !(blurEl && 'stdDeviationX' in blurEl)) mode = 'css';
  function checkBlurSafe() {                                            // a filter captures fixed descendants
    if (!pagesEl) return;
    var f = pagesEl.querySelectorAll('*'), n = 0;
    for (var i = 0; i < f.length && n === 0; i++) {
      try { if (getComputedStyle(f[i]).position === 'fixed') n = 1; } catch (e) {}
    }
    blurOff = n === 1;
    if (blurOff) setFilter('');
  }
  function cap() { return isBybit() ? Math.min(CFG.scrollMax, CFG.bybitMax) : CFG.scrollMax; }
  function applyBlur(v) {
    var r = Math.round(v * 100) / 100;
    if (r <= 0.06) {                                                       // release threshold above
      cur = 0;                                                             // the 10%-decay rounding
      setFilter('');                                                       // floor, else a 0.05px
      if (wcOn) { pagesEl.style.willChange = ''; wcOn = false; }           // limit-cycle never ends
      if (blurEl) blurEl.setAttribute('stdDeviation', '0 0');
      return;
    }
    cur = r;
    if (!wcOn) { pagesEl.style.willChange = 'filter'; wcOn = true; }
    if (mode === 'svg') {
      blurEl.setAttribute('stdDeviation', '0 ' + r);                    // vertical-only blur
      setFilter('url(#nxm-vblur)');
    } else {
      setFilter('blur(' + r + 'px)');
    }
  }
  function scrollLoop() {
    if (reduce) return;
    var y = window.scrollY;
    var dv = y - lastY; lastY = y;
    vel = vel * 0.68 + Math.abs(dv) * 0.32;                             // smoothed px/frame velocity
    var c = cap();
    var target = vel <= CFG.scrollMin ? 0 :
      Math.min(c, c * (vel - CFG.scrollMin) / (CFG.scrollSat - CFG.scrollMin));
    if (target > 0.01 || cur > 0.01) {
      var nv = cur + (target - cur) * (target > cur ? 0.35 : 0.15);      // quick in, smooth ~350ms out
      applyBlur(nv < 0.015 && target === 0 ? 0 : nv);
      active = true;
    } else if (active) {
      active = false;
      pagesEl.style.willChange = '';
      wcOn = false;
    }
    requestAnimationFrame(scrollLoop);
  }

  /* ---------- 4) scanners / SPA navigation ---------- */
  var lastPages = null;
  function scan() {
    var pages = document.getElementById('SITE_PAGES');
    if (!pages) return;
    if (pages !== pagesEl) { pagesEl = pages; checkBlurSafe(); }        // SPA route swap
    pagesEl = pages;
    upgradeWixAnims();
    var targets = pickRevealTargets();
    ensureIO();
    for (var i = 0; i < targets.length; i++) stage(targets[i]);
  }
  function boot() {
    checkBlurSafe();
    scan();
    var pending = false;
    var obs = new MutationObserver(function () {                         // SPA route swaps
      if (pending) return;
      pending = true;
      setTimeout(function () { pending = false; scan(); }, 250);
    });
    obs.observe(document.body, { childList: true, subtree: true });
    setInterval(scan, CFG.scanMs);                                       // belt to braces
    document.addEventListener('animationstart', function (e) {          // Wix plays anims on scroll
      if (e.animationName && e.animationName.indexOf('motion-') === 0) upgradeWixAnims();
    }, true);
  }
  function start() {
    if (reduce) return;                                                  // accessibility wins: do nothing
    if (!document.getElementById('SITE_PAGES')) { setTimeout(start, 200); return; }
    boot();
    if (!touch && !blurOff) { lastY = window.scrollY; requestAnimationFrame(scrollLoop); } // blur: pointer only
  }

  /* ---------- 5) inertial smooth wheel scrolling (desktop mouse/trackpad) ---------- */
  (function smoothScroll() {
    var fine = window.matchMedia && matchMedia('(pointer: fine)').matches;
    if (reduce || touch || !fine || window.__nxSmooth) return;
    window.__nxSmooth = true;
    var SM = { lerp: 0.085, mul: 1.0, maxStep: 260 };
    var se = document.scrollingElement || document.documentElement;
    var target = window.scrollY, pos = target, running = false, lastSet = -1, lastT = 0;
    function maxY() { return Math.max(0, se.scrollHeight - innerHeight); }
    function canScroll(el, dy) {                       // nested scroll areas keep native wheel
      for (; el && el !== document.body && el !== document.documentElement; el = el.parentElement) {
        if (el.nodeType !== 1) continue;
        var cs = getComputedStyle(el);
        if (/(auto|scroll|overlay)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight + 1) {
          if (dy > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1) return true;
          if (dy < 0 && el.scrollTop > 0) return true;
        }
      }
      return false;
    }
    function locked() {
      var b = getComputedStyle(document.body).overflowY, h = getComputedStyle(se).overflowY;
      return b === 'hidden' || h === 'hidden';                  // Wix lightbox / menu open
    }
    function frame(t) {
      var dt = lastT ? Math.min(64, t - lastT) : 16.7; lastT = t;
      if (lastSet >= 0 && Math.abs(window.scrollY - lastSet) > 2) { stop(); return; }  // something else scrolled
      var a = 1 - Math.pow(1 - SM.lerp, dt / 16.7);
      pos += (target - pos) * a;
      if (Math.abs(target - pos) < 0.5) pos = target;
      lastSet = Math.round(pos);
      window.scrollTo({ top: pos, left: window.scrollX, behavior: 'instant' });
      lastSet = window.scrollY;
      if (pos === target) { stop(); return; }
      requestAnimationFrame(frame);
    }
    function stop() { running = false; lastSet = -1; lastT = 0; target = pos = window.scrollY; }
    function push(dy) {
      if (!running) { target = pos = window.scrollY; }
      dy = Math.max(-SM.maxStep, Math.min(SM.maxStep, dy * SM.mul));
      target = Math.max(0, Math.min(maxY(), target + dy));
      if (!running) { running = true; lastSet = window.scrollY; requestAnimationFrame(frame); }
    }
    function norm(e) { return e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1); }
    addEventListener('wheel', function (e) {
      if (e.defaultPrevented || e.ctrlKey || e.metaKey) return;          // pinch-zoom, ctrl-zoom
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;               // horizontal: leave alone
      if (locked()) return;
      var dy = norm(e);
      if (canScroll(e.target, dy)) return;
      e.preventDefault();
      push(dy);
    }, { passive: false });
    addEventListener('scroll', function () { if (!running) target = pos = window.scrollY; }, { passive: true });
    addEventListener('keydown', function () { if (running) stop(); }, true);
    addEventListener('mousedown', function () { if (running) stop(); }, true);
    /* embeds (iframes) forward their wheel deltas so scrolling over them is smooth too */
    var greeted = new WeakSet();
    function greet() {
      var f = document.querySelectorAll('iframe');
      for (var i = 0; i < f.length; i++) {
        var w = f[i].contentWindow; if (!w) continue;
        if (!/neonsesky\.github\.io/.test(f[i].src || '')) continue;
        try { w.postMessage({ nxSmooth: 1 }, '*'); } catch (e) {}
      }
    }
    addEventListener('message', function (e) {
      var d = e.data; if (!d || typeof d !== 'object') return;
      if (!/^https:\/\/neonsesky\.github\.io$/.test(e.origin)) return;
      if (d.nxHello && e.source) { try { e.source.postMessage({ nxSmooth: 1 }, '*'); } catch (x) {} }
      if (typeof d.nxWheel === 'number' && isFinite(d.nxWheel) && !locked()) push(d.nxWheel);
    });
    greet(); setInterval(greet, 1500);
  })();

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
