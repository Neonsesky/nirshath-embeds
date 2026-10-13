/* nirshath.com embeds: forward wheel to the Wix parent so its smooth scroll handles it */
(function () {
  if (window.parent === window || window.__nxRelay) return; window.__nxRelay = true;
  var on = false;
  addEventListener('message', function (e) { if (e.data && e.data.nxSmooth) on = true; });
  function hello() { try { parent.postMessage({ nxHello: 1 }, '*'); } catch (e) {} }
  hello(); addEventListener('load', hello);
  function canScroll(el, dy) {
    for (; el && el.nodeType === 1 && el !== document.body && el !== document.documentElement; el = el.parentElement) {
      var cs = getComputedStyle(el);
      if (/(auto|scroll|overlay)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight + 1) {
        if (dy > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1) return true;
        if (dy < 0 && el.scrollTop > 0) return true;
      }
    }
    return false;
  }
  addEventListener('wheel', function (e) {
    if (!on || e.defaultPrevented || e.ctrlKey || e.metaKey) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    var dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1);
    var se = document.scrollingElement || document.documentElement;
    if (se.scrollHeight > innerHeight + 2 && getComputedStyle(se).overflowY !== 'hidden' && getComputedStyle(document.body).overflowY !== 'hidden') {
      if ((dy > 0 && se.scrollTop + innerHeight < se.scrollHeight - 1) || (dy < 0 && se.scrollTop > 0)) return; // embed scrolls itself
    }
    if (canScroll(e.target, dy)) return;
    e.preventDefault();
    parent.postMessage({ nxWheel: dy }, '*');
  }, { passive: false });
})();
