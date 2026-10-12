# MDX MSc "Work in progress" — native Wix copy + alt text

SEO-critical text for placement as native Wix text next to (or over) the embed at
`https://neonsesky.github.io/nirshath-embeds/mdx/mdx-wip.html`.
The iframe's own text is not indexed as page content, so use these strings as real text elements.

## Home variant (`?v=home`)

**Eyebrow (H3/label, uppercase):** Postgraduate · Dubai Knowledge Park

**Heading (H2):** MSc in progress.
*(render "progress." in MDX red #E30A0A)*

**Paragraph:**
I'm studying **MSc Marketing Communications & Brand Management** at Middlesex University Dubai. The degree ships **April 2027**. This section is a construction site until then.

**Support line:**
Day 19 of the programme today. Progress bar counts up live from the 23 September 2026 start date.
*(if used as static text, prefer the timeless phrasing:)*
Programme progress is computed live from today's date, between 23 September 2026 and April 2027.

**Focus areas (label + list, as chips/tags):**
Focus areas — Marketing Communications · Brand Management · Consumer Behaviour · Digital Marketing Strategy · Research Methods

## About variant (`?v=about`) — adds:

**Heading (H2):** Why a designer is doing a marketing MSc

**Paragraph 1:**
Brand work doesn't stop at the artwork. This programme goes behind the visuals: the strategy, consumer psychology, and research that decide what a brand is allowed to say, and how.

**Paragraph 2:**
One year, level 7, ending in a 60-credit capstone research project. Classes run evenings after the day job at MultiBank Group. It's tiring. That was the plan.

**Detail list (H3 "Programme details" + rows):**
- Programme — MSc Marketing Communications & Brand Management
- Institution — Middlesex University Dubai
- Status — In progress
- Started — 23 September 2026
- Expected completion — April 2027

## Alt text

- MDX logo image: `Middlesex University Dubai`
- Warning-diamond construction sign (decorative, already `aria-hidden` in the embed; if placed as a native image: `Yellow diamond construction sign reading "Degree in progress"`): leave decorative.
- Progress bar (has `role="progressbar"` + aria-label in embed; native equivalent: `Programme progress: 9% — 19 days in, 200 days to April 2027` computed at render time).

## Facts used (verified, nothing invented)

- MSc Marketing Communications & Brand Management, Middlesex University Dubai.
- Started 23 September 2026; expected completion April 2027. Status: in progress.
- Focus-area chips are real programme-level topics (Marketing Communications; Immersive Branding in the Digital Age → brand management; Consumer Psychology & Decision Making → consumer behaviour; Global Marketing Management & Digital Strategy → digital marketing strategy; Capstone Research Project → research methods), phrased generically per brief.
- Progress % is arithmetic on dates (23 Sep 2026 → 30 Apr 2027), not a claimed credit completion figure; the copy says so.
- MultiBank Group day job: per shared brief (Lead Designer, Mar 2026–present).
