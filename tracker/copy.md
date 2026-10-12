# SEO copy — Creative Work Log page (nirshath.com/creative-work-log)

Native Wix text for the page. The interactive embed lives at
`https://neonsesky.github.io/nirshath-embeds/tracker/tracker.html`
(recommended iframe height: desktop ~7600px @ 980px width (~7000px @1440px), mobile ~10100px @ 390px, ~10800px @ 320px).

---

## Page title (54 chars)
I built my own creative tracker with Claude Code

## Meta description (152 chars)
A personal creative work log built with Claude Code: 2,901 creatives tracked on a Google Sheet, with calendar, charts, PDF reports and a live demo.

---

## H1
I built my own creative tracker.

## Hero
Every creative I ship goes into a Google Sheet. So I had Claude Code build the app around it: calendar, charts, monthly to yearly metrics, one-click reports. Three prompts to build it. Three GitHub pushes to refine it.

Buttons: **Open the live demo** · **Read the LinkedIn post**
(https://www.linkedin.com/feed/update/urn:li:activity:7460731026827276288/)

---

## Section: stats
- **2,901** creatives tracked — across 432 projects at mb.io, Mar–Oct 2026
- **432** projects logged — each tagged by type, date and volume
- **3** prompts to build — V1 shipped in one HTML file, May 2026
- **3** pushes to refine — V2 redesign shipped on GitHub, Sep 2026
- **V1 → V2** — one spreadsheet, two builds: single file to installable PWA

---

## Section: V1 vs V2 (compare)
### H2: May vs September. Same spreadsheet.
V1 was lime on black: sidebar, log form, calendar, CSV export. V2 is a full redesign: navy and amber, glassy panels, reports, themes, installable PWA. Drag the handle.

**V1 · one file.** Single HTML file. Sidebar navigation, a fast log form, history list, overview with calendar heatmap and bar charts, CSV export. Built in 3 prompts, refined in 3 pushes.

**V2 · a real app.** Navy/amber redesign with glassy panels, weekly and period reports with PDF export, 8 theme presets plus custom colours, installable PWA, mobile tab bar, CSV auto-backup.

---

## Section: live demo
### H2: Try it right here.
The real app runs on my live sheet, so this demo ships with sample data. Log a creative, watch the charts move, generate a report, export it.

Tabs: V2 · live demo · V1 · the original · Mobile view
(Embed iframes: https://neonsesky.github.io/work-log-demo/ and https://neonsesky.github.io/work-log-demo/v1/)
Note: Demo uses sample data. No client work is shown.

---

## Section: how it works
### H2: One sheet. Four layers.
No backend, no database bill. The Google Sheet I already kept became the database, and everything was built on top of it.

1. **Google Sheet** — The source of truth. Every row: date, project, creative type, quantity. It worked before the app existed, and it still works without the app.
2. **Apps Script API** — Google Apps Script exposes the sheet as a JSON API. The app reads and writes through it, with a connection indicator so you always know the state.
3. **GitHub Pages PWA** — The front end is plain HTML, CSS and JS, deployed through GitHub Pages. Free hosting, versioned on GitHub, installable from the browser.
4. **Any device** — Desktop at the desk, PWA on the phone. Log a creative in seconds, pull a report in a click, from wherever the work happened.

---

## Section: V2 features
### H2: Nine upgrades, one weekend each.
V2 shipped over six days in September. Each feature came from a real friction point in the week-to-week workflow.

1. **Weekly & period reports** — A dedicated Reports page with a date-range picker. Pick a week, pull the numbers, export the report as a PDF.
2. **One-click PDF export** — The report leaves the app as a clean PDF. No screenshots, no slide deck, no reformatting.
3. **8 presets + custom colours** — Theme presets and a custom colour picker, including the navy-and-amber look this page borrows.
4. **Installable app (PWA)** — Add to home screen, launch fullscreen. A web page that behaves like an installed app.
5. **Bottom tab bar (mobile)** — Mobile-first navigation with thumb-reachable tabs: log, history, overview, reports.
6. **CSV auto-backup** — The app exports its own CSV backup so the data never depends on a single sheet.
7. **Manage creative types** — Creative types are editable in-app, so the taxonomy grows with the work instead of freezing at the first prompt.
8. **Re-tag suggestions** — Flags inconsistently tagged entries and suggests fixes, keeping the metrics honest.
9. **Connection glow** — A live status indicator shows when the app is connected to the sheet API. No silent failures.

Gallery captions: Log · the 5-second entry form / History · every entry, filterable / Reports · pick a range, export a PDF

---

## Section: the AI angle
### H2: AI didn't design the creatives. It built the tool around them.
I'm a designer, not a developer. Claude Code closed that gap, and it changed the workflow, not the taste.

1. **Built with 3 prompts.** V1 went from idea to working single-file app in three prompts and three GitHub pushes. The barrier between "this spreadsheet is annoying" and "there's an app for that" is gone for anyone who can describe what they want.
2. **Reporting in one click.** Weekly output reporting is a Reports page, a date range and a PDF export. Reporting to leadership stopped being a screenshot scavenger hunt and became a step in the flow of work.
3. **Output you can see.** Monthly, quarterly and yearly metrics give the design function visibility: 2,901 creatives across 432 projects, by type and volume. Design's output is finally as countable as any other team's.

---

## Section: CTA
### H2: From spreadsheet to software, on a normal week.
Quote (from the LinkedIn post): "Been wanting an easy way to track my own creative output... Used Claude Code to create a personal creative work log. It tracks every project by date, type, and volume... The whole thing runs on a Google Sheet, deployed via Apps Script, and lives on GitHub Pages. Opens on any device."

Button: **Read the post on LinkedIn** → https://www.linkedin.com/feed/update/urn:li:activity:7460731026827276288/

---

## mb.io page band (embeds/tracker/section-mbio.html; iframe ~500px desktop / ~520px mobile)
Kicker: The tool behind the work
### H2: The tracker behind the 2,901.
Tracking 2,901 creatives across 432 projects by hand was the problem. So I had Claude Code build the solution: a personal creative work log on a Google Sheet, deployed as an installable PWA, with calendar, charts and one-click weekly reports.
Stats: 2,901 creatives tracked · 432 projects · 3 prompts to build V1
Button: **See the tracker & live demo** → https://www.nirshath.com/creative-work-log (target=_top)

---

## Image alt texts
- v2-overview.webp: "Creative Work Log V2 overview page: monthly totals, calendar view and bar charts in a dark navy theme with amber accents"
- v1-overview.webp: "V1 overview page: lime-on-black dashboard with calendar and bar charts"
- v2-log.webp: "V2 log screen: entry form over a navy glassy panel with amber accent buttons"
- v2-history.webp: "V2 history screen: filterable list of logged creatives with type tags and dates"
- v2-reports.webp: "V2 reports screen: weekly report with date range picker and PDF export"
- v2-m-log.webp: "V2 mobile log screen in a phone frame"
- mb.io band image: "Creative Work Log dashboard with calendar, charts and monthly totals in a dark navy theme"
