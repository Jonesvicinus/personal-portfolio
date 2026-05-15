# Personal Portfolio Website — Design Spec

**Date:** 2026-05-15
**Reference:** sawad.framer.website (editorial, minimal, bold uppercase typography)

---

## Overview

A personal portfolio website for a CS student built as a React + Vite single-page application, deployed as a static site to GitHub Pages. All sections live on one page; nav links smooth-scroll to anchors. No router needed.

---

## Stack

| Concern | Choice |
|---|---|
| Framework | React 18 + Vite |
| Styling | Single global stylesheet (`src/App.css`) — no CSS Modules |
| Deployment | GitHub Pages via `gh-pages` npm package + GitHub Actions |
| Contact form | Formspree (free tier) — user must create a Formspree account and paste their form ID |
| Fonts | Google Fonts: DM Serif Display + DM Sans |
| Image assets | Static files in `src/assets/projects/` — user drops in screenshots |

---

## Design Tokens

```css
--color-bg:      #FFFFFF;
--color-text:    #111111;
--color-muted:   #777777;
--color-border:  #E0E0E0;
--color-navy:    #0F2D5E;   /* accent only */
--color-surface: #F5F5F5;

--font-display: 'DM Serif Display', serif;
--font-body:    'DM Sans', sans-serif;
```

Navy (`#0F2D5E`) is used exclusively as an accent: stat numbers, skill tag borders/text, nav active indicator, GitHub link buttons, and hover overlays. It never fills large backgrounds.

---

## Layout & Navigation

- **Sticky top nav** — white background, thin 1px black bottom border appears on scroll
- **Left:** `[YOUR NAME]` in small uppercase DM Sans, font-weight 600
- **Right:** anchor links — About · Projects · Skills · Education · GitHub · Contact — plus an outlined pill `Resume ↓` button (links to `public/resume.pdf`). "About" scrolls to `#hero` (no separate About section — bio, stats, and background live in the hero).
- Active link: navy color + 1px navy underline, updated via `IntersectionObserver` as sections scroll into view
- **Mobile:** hamburger icon appears below 768px viewport width, collapses links into a full-width dropdown

---

## Sections

### 1. Hero

Two-column grid (`220px` sidebar | `1fr` main), separated by a 1px border.

**Sidebar (left):**
- Portrait photo placeholder (`aspect-ratio: 3/4`, light gray background) — user replaces with `src/assets/photo.jpg`
- `[YOUR NAME]` in small uppercase DM Sans
- Role line: "CS Student · AI · Data Analytics" in muted text
- Row of 3 social icon buttons (GitHub, LinkedIn, Email) with 1px border, links to user profiles

**Main (right):**
- Eyebrow label: "Portfolio · 2026" in tiny navy uppercase
- Display heading: "COMPUTER SCIENCE STUDENT" in DM Serif Display, ~44px, uppercase, line-broken for visual rhythm
- Bio paragraph: 2–3 sentences about CS major + Business Administration minor + AI concentration + Data Analytics & Visualization certificate — marked `[PLACEHOLDER]`
- Skill tag row: navy-bordered pill tags for top skills (Python, React, Machine Learning, Data Analytics, SQL)
- Stats row (separated by 1px top border): three counters `3+` / `2` / `1` in DM Serif Display navy, labeled Projects / Internships / Certificate

### 2. Projects

Section heading: "RECENT PROJECTS" in DM Serif Display uppercase.

Three-column card grid. Each card:
- **Top:** 16:9 screenshot image from `src/assets/projects/project-N.png`. On hover: navy semi-transparent overlay (`rgba(15,45,94,0.65)`) + "View on GitHub" text appears. Entire image is an `<a>` tag linking to the GitHub repo (opens in new tab).
- **Body:**
  - Small project number (`01`, `02`, `03`) in muted text
  - Project title in DM Serif Display ~17px
  - 2-sentence description — `[PLACEHOLDER]`
  - Footer row: tech stack tags (gray pill) on left, `GitHub →` navy link on right (also links to repo)
- Hover state on entire card: subtle `box-shadow` lift + 2px `translateY(-2px)` transform

Placeholder GitHub URLs marked as `[GITHUB_URL]`.

### 3. Skills

Section heading: "TOOLS & SKILLS".

Two-column list. Each row: skill name (DM Sans 500) on the left, category label (tiny uppercase muted) on the right, separated by a thin 1px bottom border.

Default skills grouped by category:

| Skill | Category |
|---|---|
| Python | Language |
| JavaScript / TypeScript | Language |
| Java | Language |
| React | Framework |
| Node.js | Framework |
| Pandas / NumPy | Framework |
| TensorFlow / PyTorch | AI / ML |
| scikit-learn | AI / ML |
| SQL | Data |
| Tableau | Data Viz |
| Git / GitHub | Tool |
| Excel / Google Sheets | Business |

All marked `[PLACEHOLDER — edit to match your actual skills]`.

### 4. Education

Section heading: "EDUCATION & CREDENTIALS".

Single-column list of credential rows, each with a thin top border. Each row has:
- Institution name in DM Serif Display
- Credential details (degree, minor, concentration, certificate) in muted DM Sans
- Date range on the right

Placeholders:
- `[UNIVERSITY NAME]` — BS Computer Science, Minor: Business Administration, Concentration: AI — Expected `[GRADUATION YEAR]`
- `[CERTIFICATE NAME]` — Data Analytics & Visualization — `[YEAR]`

### 5. GitHub Overview

Section heading: "GITHUB OVERVIEW".

- Prominent `View GitHub Profile →` button (navy border, navy text, hover fills navy/white)
- Below: 1–3 "featured repo" cards in a row layout matching the project row style: repo name in DM Serif Display, 1-line description, primary language tag, `GitHub →` link
- All content is manually authored — no GitHub API call (keeps it static)

### 6. Contact

Section heading: "LET'S CONNECT".

- Formspree `<form action="https://formspree.io/f/[FORM_ID]" method="POST">`
- Three fields: Name, Email, Message — all use underline-only styling (no box border, just a 1px bottom border)
- Submit button: black filled, white text, uppercase DM Sans
- Below the form: `[your@email.com]` and `github.com/[username]` as plain navy text links

---

## Footer

- Left: `[YOUR NAME]`
- Center: `© 2026`
- Right: GitHub icon + LinkedIn icon (SVG, links to profiles)
- Thin 1px top border, generous padding, small DM Sans text

---

## File Structure

```
PersonalWebsite/
├── public/
│   └── resume.pdf              ← user drops in their resume
├── src/
│   ├── assets/
│   │   ├── photo.jpg           ← profile photo
│   │   └── projects/
│   │       ├── project-1.png
│   │       ├── project-2.png
│   │       └── project-3.png
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── GitHubOverview.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx                 ← assembles all sections, manages scroll spy
│   ├── App.css                 ← all styles (single stylesheet)
│   └── main.jsx
├── index.html
├── vite.config.js              ← base: '/PersonalWebsite/' for GitHub Pages
└── package.json
```

---

## Content Placeholders

Every piece of user-specific content is marked inline so it's easy to find and fill in:

- `[YOUR NAME]`
- `[YOUR EMAIL]`
- `[GITHUB_USERNAME]`
- `[LINKEDIN_USERNAME]`
- `[GITHUB_URL_1]`, `[GITHUB_URL_2]`, `[GITHUB_URL_3]`
- `[PROJECT_TITLE_N]`, `[PROJECT_DESC_N]`
- `[UNIVERSITY NAME]`, `[GRADUATION YEAR]`
- `[FORMSPREE_FORM_ID]`
- `[BIO_PLACEHOLDER]`

---

## Deployment

1. `npm run build` produces `dist/`
2. `npm run deploy` uses `gh-pages` to push `dist/` to the `gh-pages` branch
3. GitHub repo Settings → Pages → source: `gh-pages` branch
4. Vite config sets `base: '/[REPO_NAME]/'` so assets resolve correctly

---

## Out of Scope

- Backend / serverless functions
- CMS integration
- Dark mode
- Animations beyond hover transitions and smooth scroll
- GitHub API integration (featured repos are manually authored)
