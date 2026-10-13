# Shrinkr — SEO copy (plain text mirror of shrinkr.html)

Page: https://www.nirshath.com/shrinkr (embedded from https://neonsesky.github.io/nirshath-embeds/shrinkr/shrinkr.html)
Product: https://shrinkr.fun

## Meta
Title: Shrinkr — the designer's bulk image studio · Case study by Nirshath Madhusanka
Description: Shrinkr is a 100% client-side bulk image studio that compresses, converts and resizes design exports to a hard KB budget. Full brand kit: wordmark, aurora colour, Jacquard 24 + Inter type, pixel icons, voice. Designed and built by Nirshath Madhusanka with Claude.

## Hero
Side product · Brand + build · With Claude

# Shrinkr

The designer's bulk image studio — private, instant, in the browser. Drop a folder, hit a hard KB budget, get the same folder back.

[Try Shrinkr] [See the brand kit]

Nothing uploads · 100% client-side · Figma plugin

Illustration · every image squeezed under a 120 KB budget

## 01 · The product
### Bulk export, zero uploads.
Batch-compress, convert and resize design exports to a hard KB budget — every byte on your device.

(Real app screenshots: dropzone, settings panel, mobile view. Target size 2.4 MB → 118 KB. Output format: WebP / JPEG / PNG / Auto.)

It fits your phone, not just your dock.
Same dropzone, same budget, same ZIP — the whole studio in a phone-wide column. Nothing is cut away to make it fit.

## 02 · How it works
### Drop. Set. Download.
Three steps, the same every time — settings changes re-run instantly, no re-upload.

01 Drop it in — Files, whole folder trees, or a ZIP — drag-and-drop, folder picker, and OneDrive files included.
02 Set the budget — A hard KB target (a 9-step quality search finds the best quality that fits), a fixed quality, format and resize — scoped to a folder name if you like.
03 Download the ZIP — Identical folder structure and names come back. Save results straight back into the original folder in Chrome.

## 03 · Brand design kit
### A brand book before a feature.
Ten pages, written before I shipped the product — every rule below is enforced in the app.

**01 Identity · The wordmark**
Shrinkr — Jacquard 24 · Regular · sentence case · minimum 18 px · white on black or over the aurora.
✓ "Shrinkr" in Jacquard 24, white, sentence case — the wordmark is the whole identity.
✓ The lone pixel "S" stands alone only at favicon scale.
✕ SHRINKR — never all-caps, never abbreviated in the wordmark.
✕ Bold, italic, outlined, shadowed, stretched, recoloured — never.

**02 Colour · Void & aurora** (click any swatch to copy)
Void #000000 — Backgrounds, always
White #FFFFFF — Wordmark, primary buttons
Body #C6C6CF — Paragraph text · ~10:1
Muted #9A9AA6 — Labels, captions · ~5.6:1
Cyan #22D3EE — Aurora hue · light only
Blue #2563EB — Aurora hue · light only
Violet #A855F7 — Aurora hue · light only
Magenta #FF1FAE — Aurora heart · light only
Crimson #FF2E4D — Aurora heart · light only
Orange #FF8A00 — Aurora base · light only
Gradient bar: #FF3D00 → #FF0069 → #A855F7.
The accent gradient, and the rule: aurora colours live only in light — the background glow, gauges, active states. Never as text on black, never as flat fills.

**03 Typography · Jacquard speaks, Inter works**
Jacquard 24 — display · Regular only. Wordmark, page titles, stat numbers — nothing else. Scale: wordmark 26 · H1 46 · stats 27 px. Sits large and sparse — a texture, not a paragraph.
Inter — everything else. Body 14 px · 400/600/700 · line-height 1.55. Labels: 11 px · uppercase · +0.14em tracking · muted. Contrast is law: body ≥10:1, muted ≥5.6:1 on black.

**04 Iconography · Pixels, like the type**
upload · download · folder · target · swap · resize · lock · zoom · save · globe
✓ 12×12 grid, whole 1-unit cells — squares only.
✓ Crisp edges: shape-rendering: crispEdges.
✓ One colour per glyph: white or currentColor.
✕ No strokes, no curves, no anti-aliasing.

**05 Surfaces · Calm glass over living light**
Card — radius 16 · fill rgba(12,12,16,.72) · border white 10% · blur 18px.
Primary button — white fill · black text · radius 12 · hover = brightness .92 · no lift.
Pills & chips — radius 999 · white 4–5% fill · active inverts to solid white.

**06 Motion · Slow is premium**
One ease — everything uses cubic-bezier(.4,0,.2,1), 200–350 ms.
Hovers whisper — brightness and border shifts only. Nothing bounces toward the cursor.
The aurora owns life — hue drift ±55°, cursor trailing, breathing — all ambient motion is the background's.
Respect the switch — prefers-reduced-motion freezes the aurora and every transition. Always.

**07 Voice · Designer to designer**
Say: "Nothing ever leaves your device." · "Every banner under 120 KB — automatically." · "Folder structure comes back exactly as it went in." · Plain verbs, honest limits, trade-offs admitted out loud.
Never say: "Revolutionary AI-powered synergy." · "Blazingly fast!!!" · Dark patterns: no guilt, no fake scarcity, no "wait!" modals. · Corporate distance — a designer built this, and writes like one.

**08 The brand book · v1.0, ten pages** (lightbox gallery)
01 Cover — Shrinkr · Brand Book v1.0
02 Identity — The wordmark
03 Colour — Void & aurora
04 The aurora — A living gradient
05 Typography — Jacquard speaks, Inter works
06 Iconography — Pixels, like the type
07 Surfaces — Calm glass over living light
08 Motion — Slow is premium
09 Voice — Designer to designer
10 Back cover — Brand Book v1.0

## 04 · The Figma plugin
### Inside Figma, under budget.
Select frames, set a KB target, export — the plugin runs the same compression engine in a mini-Shrinkr panel. Paid once: $15. The web studio stays free.
· Live selection counter, 0.5× / 1× / 2× export scale.
· Canvas binary-search compression — the identical engine, locally.
· Single file or ZIP out, with a link back to the free web studio.
$15 one-time · via Figma payments

## 05 · How I built it
### Designed solo, built with Claude.
I built the tool I couldn't find: our CMS demanded banners under 120 KB, so my team had exported at 0.25× scale for years. I wrote the brand book first, then the product, then the launch playbook — with Claude as my engineering partner.

16 — languages, RTL included
10 — hand-drawn pixel icons
<120 KB — the budget that started it
0 — bytes uploaded, ever

From idea to launch plan:
1. The pain. Blunt 0.25× exports to satisfy a 120 KB CMS budget.
2. Brand book v1.0. Wordmark, void & aurora, type, icons, motion, voice.
3. The product. One client-side file: JSZip, pako, UPNG.js, canvas binary search.
4. Figma plugin. The same engine inside a plugin panel.
5. Launch playbook. Pricing, ad gate, Product Hunt plan, honest revenue math.

## Ready (closing CTA)
### Shrink something.
The web studio is free, runs in your browser, and keeps every file on your device.
[Try Shrinkr] [More work built with AI]

## Footer
Shrinkr
Brand Book v1.0 · Designed and built by Nirshath Madhusanka · nirshath.com

---
# Banner (banner.html) copy
Shrinkr
Every banner under 120 KB — automatically.
Bulk compress, convert and resize, 100% in your browser. Nothing ever uploads.
[See the case study →] [Try Shrinkr →]
2.4 MB → 118 KB · WebP · JPEG · PNG · Auto
