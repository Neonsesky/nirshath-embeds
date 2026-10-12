#!/usr/bin/env python3
"""Generate embeds/ai/marquee.html — drag-scroll AI tools marquee, black bg, white monochrome logos."""
import json

LOGOS = json.load(open('assets/logos/paths.json'))
P = lambda k: LOGOS[k][0] if k in LOGOS else None

# mark: svg inner (viewBox + paths, all forced white) ; word: text wordmark
def mark(name, viewBox, paths, stroke=False):
    d = ' '.join(paths) if isinstance(paths, list) else paths
    return {"name": name, "vb": viewBox, "d": d, "stroke": stroke}

def word(name):
    return {"name": name, "vb": None, "d": None}

# Row A — the tools he works in daily
row_a = [
    mark("Claude", "0 0 24 24", P('claude')),
    mark("Claude Code", "0 0 24 24", P('claudecode')),
    mark("ChatGPT", "0 0 24 24", P('openai')),
    word("Higgsfield"),
    mark("Figma", "0 0 24 24", P('figma')),
    mark("Adobe Firefly", "0 0 56 54", LOGOS['firefly_glyph']),
    mark("Photoshop", "0 0 24 24", P('adobephotoshop')),
    mark("LottieFiles", "0 0 24 24", P('lottiefiles')),
    mark("Midjourney", "60 180 900 680", ["M174,794 c20,0 50,-42 85,-48 c20,0 35,42 85,48 c35,0 50,-42 85,-42 c35,0 50,42 85,42 c35,0 50,-42 85,-42 c35,0 50,42 85,42 c35,0 50,-42 85,-42 c35,0 50,42 85,42 M242.4,752.2 L219.5,708.4 L809.5,670.4 C763.1,712.6 703.5,746.8 643.2,774.8 M454.4,300.4 C554.8,331.1 695.2,479.4 743,638.8 C716.8,628.5 697.2,618 660.4,627.4 C624.8,497.9 561.1,374.2 454.4,300.4 z M267.7,229.5 C396.3,284.5 572.7,437.6 605.1,641.5 C456.8,581.7 343.9,613.6 265.3,662.1 C385.2,509.7 331.4,336.4 267.7,229.5 z"], stroke=True),
    word("Runway"),
    word("Hermes Agent"),
]
# Row B — video/image models he runs inside Higgsfield (Bybit era + mb.io era)
row_b = [
    word("Kling"),
    word("Seedance"),
    word("Google Veo"),
    word("Sora"),
    mark("Gemini", "0 0 24 24", P('googlegemini')),
    mark("MiniMax Hailuo", "0 0 24 24", P('minimax')),
    word("Flux"),
    word("Seedream"),
    mark("GPT Image", "0 0 24 24", P('openai')),
    mark("ByteDance", "0 0 24 24", P('bytedance')),
    word("Wan"),
    word("Grok"),
]
# drop Grok (no evidence) — final scrub
row_b = [x for x in row_b if x["name"] != "Grok"]

def item_html(it, i):
    if it["vb"]:
        cls = " mq-stroke" if it.get("stroke") else ""
        return (f'<div class="mq-item" role="img" aria-label="{it["name"]}">'
                f'<span class="mq-mark{cls}"><svg viewBox="{it["vb"]}" aria-hidden="true">'
                f'<path d="{it["d"]}"/></span><span class="mq-label">{it["name"]}</span></div>')
    return (f'<div class="mq-item" role="img" aria-label="{it["name"]}">'
            f'<span class="mq-mark mq-word">{it["name"]}</span><span class="mq-label">{it["name"]}</span></div>')

def row_html(items):
    inner = ''.join(item_html(it, n) for n, it in enumerate(items))
    return inner + inner  # duplicated for seamless loop

html = """<!doctype html>
<!-- marquee.html — AI tools the designer uses. Recommended iframe height: desktop 460px, mobile 420px (measured 408/355 + padding). Width: full strip. -->
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{--mark-h:32px;--gap:56px;--dur:46s}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#000}
body{font-family:Inter,system-ui,sans-serif;color:#fff;overflow-x:hidden;-webkit-font-smoothing:antialiased}
.wrap{padding:40px 0 44px;position:relative}
.kicker{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:12px;letter-spacing:.32em;text-transform:uppercase;color:rgba(255,255,255,.45);text-align:center;margin-bottom:10px}
h2{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:clamp(20px,3vw,30px);text-align:center;letter-spacing:-.01em;margin-bottom:34px}
h2 b{color:#fff}
.fade{position:relative;
  -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 9%,#000 91%,transparent 100%);
  mask-image:linear-gradient(90deg,transparent 0,#000 9%,#000 91%,transparent 100%);}
.row{overflow:hidden;padding:18px 0;touch-action:pan-y;cursor:grab;user-select:none;-webkit-user-select:none}
.row.dragging{cursor:grabbing}
.track{display:inline-flex;align-items:center;gap:var(--gap);padding-right:var(--gap);will-change:transform}
.mq-item{display:flex;flex-direction:column;align-items:center;gap:10px;flex:none}
.mq-mark{height:var(--mark-h);display:flex;align-items:center;justify-content:center}
.mq-mark svg{height:var(--mark-h);width:auto;display:block;fill:#fff;fill-rule:evenodd}
.mq-stroke svg{fill:none}
.mq-stroke svg path{fill:none;stroke:#fff;stroke-width:18px;stroke-linecap:round;stroke-linejoin:round}
.mq-word{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:calc(var(--mark-h) - 5px);letter-spacing:.04em;color:#fff;white-space:nowrap;line-height:1;text-transform:uppercase}
.mq-label{font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.38)}
.row{transition:opacity .3s}
.row:hover .track{animation-play-state:paused}
.track{animation:mq var(--dur) linear infinite}
.row--rev .track{animation-direction:reverse}
@keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.hint{text-align:center;font-size:12px;color:rgba(255,255,255,.3);margin-top:26px;letter-spacing:.06em}
@media (max-width:640px){:root{--mark-h:28px;--gap:36px}.wrap{padding:30px 0 34px}h2{margin-bottom:22px}}
@media (prefers-reduced-motion:reduce){
  .track{animation:none!important;transform:none!important}
  .row{overflow-x:auto;cursor:auto}
  .row .mq-dup{display:none}
}
</style>
</head>
<body>
<div class="wrap">
  <p class="kicker">The stack</p>
  <h2><b>Tools I design with every day</b></h2>
  <div class="fade">
    <div class="row" data-speed="46"><div class="track">__ROW_A__</div></div>
    <div class="row row--rev" data-speed="58"><div class="track">__ROW_B__</div></div>
  </div>
  <p class="hint">Drag the rows &mdash; they loop on their own.</p>
</div>
<script>
(function(){
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  var rows = document.querySelectorAll('.row');
  rows.forEach(function(row){
    var track = row.querySelector('.track');
    var base = parseFloat(row.dataset.speed);      // seconds per full loop
    var x = 0, v = base ? (track.scrollWidth/2)/base : 0.6; // px/s (loop distance / duration)
    var dragging = false, lastX = 0, lastT = 0, throwV = 0, hover = false;
    var raf;
    function frame(t){
      if (!frame.t) frame.t = t;
      var dt = Math.min((t - frame.t)/1000, .05); frame.t = t;
      if (!dragging){
        var speed = hover ? 0.15 : 1;
        if (Math.abs(throwV) > 2){ throwV *= Math.pow(0.05, dt); x += throwV*dt; }
        else { throwV = 0; x += v*speed*dt; }
        var half = track.scrollWidth/2;
        if (half > 0){ x = ((x % half) + half) % half; }
        track.style.transform = 'translateX(' + (-x) + 'px)';
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    row.addEventListener('pointerdown', function(e){
      dragging = true; throwV = 0; row.classList.add('dragging');
      lastX = e.clientX; lastT = performance.now();
      row.setPointerCapture(e.pointerId);
    });
    row.addEventListener('pointermove', function(e){
      if (!dragging) return;
      var now = performance.now(), dx = e.clientX - lastX, dt = Math.max(now - lastT, 1);
      x -= dx;
      throwV = -dx/dt*1000; // px/s, natural direction (track moves -x)
      track.style.transform = 'translateX(' + (-x) + 'px)';
      lastX = e.clientX; lastT = now;
      e.preventDefault();
    });
    ['pointerup','pointercancel'].forEach(function(ev){
      row.addEventListener(ev, function(e){
        dragging = false; row.classList.remove('dragging');
        try{ row.releasePointerCapture(e.pointerId); }catch(_){}
      });
    });
    row.addEventListener('mouseenter', function(){ hover = true; });
    row.addEventListener('mouseleave', function(){ hover = false; });
    document.addEventListener('visibilitychange', function(){
      if (document.hidden){ cancelAnimationFrame(raf); frame.t = 0; }
      else raf = requestAnimationFrame(frame);
    });
  });
  function postH(){ parent.postMessage({type:'embed-height', h: document.documentElement.scrollHeight}, '*'); }
  addEventListener('load', postH); addEventListener('resize', postH); postH();
})();
</script>
</body>
</html>
"""
html = html.replace('__ROW_A__', row_html(row_a)).replace('__ROW_B__', row_html(row_b))
open('marquee.html','w').write(html)
print('marquee.html', len(html), 'rowA', len(row_a), 'rowB', len(row_b))
