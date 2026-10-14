(function(){"use strict";
if(window.__nirshPopup||window.top!==window)return;window.__nirshPopup=true;
if(/editor\.wix|manage\.wix/.test(location.host))return;
try{if(sessionStorage.getItem('nirshPopupSeen'))return}catch(e){}
var B='https://neonsesky.github.io/nirshath-embeds/nirsh-me/';
function build(){
var st=document.createElement('style');st.textContent=
"@font-face{font-family:'Inter Tight';font-weight:400 500;src:url("+B+"fonts/InterTight-500-normal.woff2) format('woff2');font-display:swap}"+
"@font-face{font-family:'Instrument Serif';font-style:italic;src:url("+B+"fonts/InstrumentSerif-400-italic.woff2) format('woff2');font-display:swap}"+
"@font-face{font-family:'JetBrains Mono';src:url("+B+"fonts/JetBrainsMono-400-normal.woff2) format('woff2');font-display:swap}"+
"#nm-pop{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(12,14,13,.6);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);opacity:0;transition:opacity .5s cubic-bezier(.22,1,.36,1);font-family:'Inter Tight',system-ui,sans-serif}"+
"#nm-pop.in{opacity:1}"+
"#nm-pop .c{position:relative;overflow:hidden;width:min(760px,100%);background:#0C0E0D;color:#F2F0EB;border:1px solid rgba(242,240,235,.12);border-radius:26px;display:grid;grid-template-columns:1.1fr .9fr;transform:translateY(24px) scale(.97);transition:transform .7s cubic-bezier(.22,1,.36,1);box-shadow:0 40px 100px rgba(0,0,0,.55)}"+
"#nm-pop.in .c{transform:none}"+
"#nm-pop .c::before{content:'';position:absolute;width:420px;height:420px;right:-100px;top:-180px;background:radial-gradient(closest-side,rgba(255,90,31,.3),transparent);pointer-events:none}"+
"#nm-pop .t{position:relative;padding:40px 34px}"+
"#nm-pop .e{display:inline-flex;align-items:center;gap:9px;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#9A9F98}"+
"#nm-pop .e::before{content:'';width:6px;height:6px;border-radius:50%;background:#FF5A1F}"+
"#nm-pop h3{margin:16px 0 12px;font-weight:500;font-size:clamp(34px,5vw,50px);letter-spacing:-.045em;line-height:.98;color:#F2F0EB}"+
"#nm-pop h3 i{font-family:'Instrument Serif',serif;font-weight:400;letter-spacing:-.01em;color:#FF5A1F}"+
"#nm-pop p{margin:0 0 24px;color:#9A9F98;font-size:16px;line-height:1.45}"+
"#nm-pop .b{display:inline-flex;align-items:center;gap:10px;height:50px;padding:0 24px;border-radius:999px;background:#FF5A1F;color:#fff;font-weight:500;font-size:16px;text-decoration:none;transition:transform .4s cubic-bezier(.22,1,.36,1),background .3s}"+
"#nm-pop .b:hover{background:#FF7A45;transform:translateY(-2px)}"+
"#nm-pop .s{display:block;margin-top:14px;background:none;border:0;color:#9A9F98;font:inherit;font-size:14px;cursor:pointer;padding:0}#nm-pop .s:hover{color:#F2F0EB}"+
"#nm-pop .i{position:relative;min-height:100%}#nm-pop .i img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}"+
"#nm-pop .i::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#0C0E0D,transparent 40%)}"+
"#nm-pop .x{position:absolute;top:14px;right:14px;z-index:3;width:38px;height:38px;border-radius:50%;background:rgba(12,14,13,.6);border:1px solid rgba(242,240,235,.2);color:#F2F0EB;font-size:20px;line-height:1;cursor:pointer;transition:background .3s}#nm-pop .x:hover{background:#FF5A1F}"+
"@media(max-width:640px){#nm-pop .c{grid-template-columns:1fr}#nm-pop .i{order:-1;height:170px;min-height:0}#nm-pop .i::after{background:linear-gradient(0deg,#0C0E0D,transparent 50%)}#nm-pop .t{padding:26px 24px 30px}}"+
"@media(prefers-reduced-motion:reduce){#nm-pop,#nm-pop .c{transition:none}}";
document.head.appendChild(st);
var d=document.createElement('div');d.id='nm-pop';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-label','New portfolio site');
d.innerHTML="<div class='c'><button class='x' aria-label='Close'>×</button><div class='t'><div class='e'>New portfolio site</div><h3>My new portfolio<br>is <i>live.</i></h3><p>Brand, campaign and AI-accelerated design for crypto and fintech, rebuilt from scratch.</p><a class='b' href='https://nirsh.me' target='_blank' rel='noopener'>Visit nirsh.me <span>→</span></a><button class='s'>Maybe later</button></div><div class='i'><img src='"+B+"img/847f3b_4e7479c3c6e18fc87a580db307992138.webp' alt=''></div></div>";
document.body.appendChild(d);requestAnimationFrame(function(){requestAnimationFrame(function(){d.classList.add('in')})});
function close(){try{sessionStorage.setItem('nirshPopupSeen','1')}catch(e){}d.classList.remove('in');setTimeout(function(){d.remove()},500);document.removeEventListener('keydown',k)}
function k(e){if(e.key==='Escape')close()}
document.addEventListener('keydown',k);
d.querySelector('.x').onclick=close;d.querySelector('.s').onclick=close;d.querySelector('.b').addEventListener('click',function(){try{sessionStorage.setItem('nirshPopupSeen','1')}catch(e){}});
d.addEventListener('click',function(e){if(e.target===d)close()});
}
setTimeout(function(){if(document.body)build()},5000);
})();
