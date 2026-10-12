# AI page — native copy for Wix (SEO text) + embed placement

**Suggested SEO title (60 chars):**
`AI Tools, Certifications & Workflow — Nirshath Madhusanka`

**Suggested meta description (155 chars):**
`AI certifications (Anthropic Claude 101, AI-First Designer School, Dubai Future Foundation) and the AI design workflow behind 2.5x creative output.`

Suggested URL slug: `/artificial-intelligence` (keep existing page; 301 any old alias).

---

## Section 1 — Tools marquee (`embeds/ai/marquee.html`)

### H2: Tools I design with every day

Native intro copy (place above the embed):

> These are the tools in my daily design stack — AI models, generation platforms, and the production software I ship with.

**Marquee row 1 (daily tools):** Claude, Claude Code, ChatGPT, Higgsfield, Figma, Adobe Firefly, Photoshop, LottieFiles, Midjourney, Runway, Hermes Agent
**Marquee row 2 (models I run, mostly inside Higgsfield):** Kling, Seedance, Google Veo, Sora, Gemini (Nano Banana), MiniMax Hailuo, Flux, Seedream, GPT Image, ByteDance, Wan

Alt text (per logo; each item carries `role="img" aria-label` in the embed, use the same for any native images):
- "Claude logo" / "Claude Code logo" / "ChatGPT (OpenAI) logo" / "Higgsfield wordmark" / "Figma logo" / "Adobe Firefly logo" / "Adobe Photoshop logo" / "LottieFiles logo" / "Midjourney emblem" / "Runway wordmark" / "Hermes Agent (Nous Research) wordmark"
- "Kling wordmark" / "Seedance wordmark" / "Google Veo wordmark" / "Sora wordmark" / "Google Gemini logo" / "MiniMax Hailuo logo" / "Flux wordmark" / "Seedream wordmark" / "GPT Image (OpenAI) logo" / "ByteDance logo" / "Wan wordmark"

Caption below embed: *Drag the rows — they loop on their own.*

---

## Section 2 — Certifications (`embeds/ai/certs.html`)

### H2: AI certifications

Intro paragraph:
> Not hobby badges. Each one changed how I work — prompt structure, model selection, and AI-assisted design workflows I use on live campaigns.

Cards (heading / issuer / date / body — cards with a real certificate image: Claude 101, AI-First Designer School):

1. **Claude 101** — Anthropic — March 2026
   Anthropic's hands-on certification covering Claude's capabilities, system prompts, tool use, and agentic workflows. Directly applied: Claude Code builds the internal tools I ship, including the Creative Work Log tracker behind my weekly reporting.
   *Image alt:* "Claude 101 certificate issued to Nirshath Madhusanka by Anthropic"

2. **Mastering Career Resilience & Confidence in the AI Era — AI-First Designer School with ADPList (Felix Lee)** — October 14, 2025, with distinction
   A 5-hour intensive on building an AI-first design practice: adopting generative tools without losing design judgment, and staying valuable as the tooling shifts. Graduated with distinction.
   *Image alt:* "AI-First Designer School certificate — Mastering Career Resilience and Confidence in the AI Era, with distinction"

3. **Prompt Engineering — One Million Prompters** — Dubai Future Foundation — August 2025
   An initiative by HH Sheikh Hamdan Bin Mohammed Bin Rashid Al Maktoum, Crown Prince of Dubai. Four modules: unleashing the power of AI, commanding conversations with AI chatbots, AI-powered productivity, and creative frontiers with generative AI. Certified in English and Arabic.

4. **LottieFiles for Figma Certification** — LottieFiles — August 2025
   Authoring and shipping Lottie motion from Figma: animation specs, export pipelines, and performance-minded micro-interactions for product and web.

5. **How to Powerfully Showcase Your Design** — ADPList — November 2025
   Mentorship session on portfolio narrative: framing the problem, showing the decision, and presenting design work with evidence instead of decoration.

6. **How to Win in Personal Branding and Influence** — ADPList — November 2025
   Mentorship session on positioning for designers: consistent public work, clear point of view, and influence that compounds.

---

## Section 3 — Workflow (`embeds/ai/workflow.html`)

### H2: How I use AI to design faster and make the team better

Intro:
> AI is in my production pipeline, not my moodboard. It handles first drafts, iterations, and reporting so design time goes to decisions that need a designer.

Stats (count-up in embed; use same numbers natively):
- **2.5x** — Creative output at Bybit after putting AI into the production pipeline
- **2,901** — Creatives logged across 432 projects at mb.io — tracked by a tool I built with AI
- **1 click** — What it takes the CMO to get a weekly creative report, thanks to a tracker Claude Code built

Steps:

1. **Production — AI video & image production for campaigns.** I run video and image generation through Higgsfield — Kling, Seedance, and Google Veo among them — for mb.io campaigns, including the Khabib AI campaign work: product videos, key frames, and fast variant testing that used to take a full production cycle.
2. **Tooling — I build my own tools with Claude Code.** The Creative Work Log tracker behind this page is mine: built with Claude Code, refined over three GitHub pushes. It gives the CMO weekly reports in one click and keeps every creative output on record — see the tracker (https://www.nirshath.com/creative-work-log).
3. **Agents — Agentic workflows that run while I design.** I run agent workflows — Hermes Agent from Nous Research and Claude's agentic tooling — for research, drafting, and multi-step jobs: brief to first draft, data to report. Judgment stays with me; volume goes to the agents.
4. **Track record — 2.5x output at Bybit, prompt engineering certified.** At Bybit I put Sora, Runway, Midjourney, and ChatGPT into the creative pipeline and shipped 2.5x the output without dropping the quality bar. Formal training backs it: Prompt Engineering certification from the Dubai Future Foundation, and an AI-First Designer School certificate with distinction.

CTA button: **See the tracker AI helped me build →** → https://www.nirshath.com/creative-work-log

---

## Recommended iframe heights (measured, 12 Oct 2026)

| Embed | Desktop (980–1440px wide) | Mobile (320–390px) |
|---|---|---|
| marquee.html | 460px | 420px |
| certs.html | 1300px | 2760px |
| workflow.html | 1680px | 2560px |

All three post `{type:'embed-height', h}` to the parent on load/resize if Wix custom code wants to auto-fit.
