# Personal Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page React + Vite portfolio website styled after sawad.framer.website, deployed to GitHub Pages.

**Architecture:** One `App.jsx` assembles eight section components in vertical order. A single `App.css` holds all styles using CSS custom properties. Smooth-scroll nav with `IntersectionObserver`-based active link tracking. No router, no backend.

**Tech Stack:** React 18, Vite, plain CSS (single stylesheet), gh-pages for deployment, Formspree for contact form.

---

## File Map

| File | Responsibility |
|---|---|
| `index.html` | Google Fonts import, viewport meta, app mount point |
| `vite.config.js` | `base: '/PersonalWebsite/'` for GitHub Pages asset paths |
| `src/main.jsx` | ReactDOM.createRoot mount |
| `src/App.jsx` | Assembles all sections, manages `activeSection` state via IntersectionObserver |
| `src/App.css` | All styles: CSS variables, resets, layout, components, responsive |
| `src/components/Nav.jsx` | Sticky nav, active link highlight, mobile hamburger toggle |
| `src/components/Hero.jsx` | Two-column hero: photo sidebar + headline/bio/stats |
| `src/components/Projects.jsx` | 3-card grid with image hover overlay and GitHub links |
| `src/components/Skills.jsx` | Two-column skill rows with category labels |
| `src/components/Education.jsx` | Credential rows with thin top borders |
| `src/components/GitHubOverview.jsx` | Profile link button + featured repo cards |
| `src/components/Contact.jsx` | Formspree form + contact info links |
| `src/components/Footer.jsx` | Name, copyright, social icons |
| `src/data/content.js` | All user-editable content in one place (projects, skills, education, repos) |
| `public/resume.pdf` | Placeholder — user drops their real resume here |

---

## Task 1: Scaffold Vite project and install dependencies

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/App.css`

- [ ] **Step 1: Scaffold Vite + React project**

```bash
cd /Users/jonesvicinus/Code/PersonalWebsite
npm create vite@latest . -- --template react
```

When prompted "Current directory is not empty. Remove existing files and continue?" — choose **Yes** (the only existing file is the docs folder, which Vite will not touch if you say yes and then restore it; actually Vite may overwrite — see note below).

> **Note:** Vite scaffolding may clear the directory. The `docs/` folder should be restored after scaffolding. Run `git init && git add docs/ && git stash` BEFORE running `npm create vite` if you want to preserve docs, then `git stash pop` after.

Safe sequence:
```bash
cd /Users/jonesvicinus/Code/PersonalWebsite
git init
git add docs/
git stash
npm create vite@latest . -- --template react
git stash pop
```

- [ ] **Step 2: Install dependencies**

```bash
npm install
npm install gh-pages --save-dev
```

- [ ] **Step 3: Configure Vite for GitHub Pages**

Replace the contents of `vite.config.js` with:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PersonalWebsite/',
})
```

- [ ] **Step 4: Add Google Fonts and viewport meta to `index.html`**

Replace `<head>` content in `index.html` with:

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/PersonalWebsite/favicon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[YOUR NAME] — Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
</head>
```

- [ ] **Step 5: Add deploy scripts to `package.json`**

Add these two entries to the `"scripts"` object in `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

- [ ] **Step 6: Create placeholder resume in `public/`**

```bash
echo "Replace this file with your actual resume PDF" > public/resume.pdf
```

- [ ] **Step 7: Create placeholder project image assets**

```bash
mkdir -p src/assets/projects
# Create 1x1 gray placeholder PNGs using a simple HTML canvas approach isn't
# possible in bash — create a minimal SVG placeholder instead:
for i in 1 2 3; do
  cat > src/assets/projects/project-${i}.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#e8e8e8"/>
  <text x="400" y="225" font-family="sans-serif" font-size="18" fill="#bbb" text-anchor="middle" dominant-baseline="middle">PROJECT SCREENSHOT</text>
</svg>
EOF
done
```

- [ ] **Step 8: Verify dev server starts**

```bash
npm run dev
```

Expected: Vite prints `Local: http://localhost:5173/` and the default React page loads in browser. No errors in terminal.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: scaffold Vite + React project with GitHub Pages config"
```

---

## Task 2: Global styles and design tokens

**Files:**
- Modify: `src/App.css`

- [ ] **Step 1: Replace `src/App.css` entirely**

```css
/* ─── Design tokens ─── */
:root {
  --color-bg:      #FFFFFF;
  --color-text:    #111111;
  --color-muted:   #777777;
  --color-border:  #E0E0E0;
  --color-navy:    #0F2D5E;
  --color-surface: #F5F5F5;
  --font-display:  'DM Serif Display', serif;
  --font-body:     'DM Sans', sans-serif;
  --max-width:     1100px;
  --section-pad:   80px 40px;
}

/* ─── Reset ─── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none; }
img { display: block; width: 100%; height: 100%; object-fit: cover; }

/* ─── Layout helpers ─── */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--section-pad);
}
.section-heading {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 40px);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-text);
  margin-bottom: 40px;
}
.divider { border: none; border-top: 1px solid var(--color-border); }

/* ─── Nav ─── */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
  transition: border-bottom 0.2s;
}
.nav.scrolled { border-bottom: 1px solid var(--color-text); }
.nav-name {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--color-text);
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
}
.nav-links a {
  font-size: 12px;
  letter-spacing: 0.05em;
  color: var(--color-muted);
  transition: color 0.15s;
  padding-bottom: 2px;
}
.nav-links a:hover,
.nav-links a.active {
  color: var(--color-navy);
  border-bottom: 1px solid var(--color-navy);
}
.nav-resume {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid var(--color-text);
  padding: 5px 14px;
  border-radius: 2px;
  color: var(--color-text);
  transition: background 0.15s, color 0.15s;
}
.nav-resume:hover { background: var(--color-text); color: var(--color-bg); }
.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px;
}
.nav-hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-text);
  transition: transform 0.2s, opacity 0.2s;
}
.nav-mobile-menu {
  display: none;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid var(--color-border);
  background: var(--color-bg);
}
.nav-mobile-menu a {
  display: block;
  padding: 14px 40px;
  font-size: 13px;
  letter-spacing: 0.05em;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
}
.nav-mobile-menu a.active { color: var(--color-navy); }

/* ─── Hero ─── */
.hero {
  display: grid;
  grid-template-columns: 220px 1fr;
  min-height: calc(100vh - 57px);
  border-bottom: 1px solid var(--color-border);
}
.hero-sidebar {
  padding: 48px 32px;
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.hero-photo {
  width: 100%;
  aspect-ratio: 3 / 4;
  background: var(--color-surface);
  border-radius: 2px;
  overflow: hidden;
}
.hero-photo img { width: 100%; height: 100%; object-fit: cover; }
.hero-photo-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #bbb;
}
.hero-name {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--color-text);
}
.hero-role {
  font-size: 12px;
  color: var(--color-muted);
  line-height: 1.6;
}
.hero-socials {
  display: flex;
  gap: 8px;
  margin-top: auto;
}
.hero-social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid var(--color-border);
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  color: var(--color-text);
  transition: border-color 0.15s, color 0.15s;
}
.hero-social-btn:hover { border-color: var(--color-navy); color: var(--color-navy); }
.hero-main {
  padding: 48px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
.hero-eyebrow {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-navy);
}
.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(36px, 5vw, 56px);
  line-height: 1.0;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--color-text);
}
.hero-bio {
  font-size: 14px;
  color: var(--color-muted);
  line-height: 1.8;
  max-width: 480px;
}
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.hero-tag {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-navy);
  border: 1px solid var(--color-navy);
  padding: 4px 10px;
  border-radius: 2px;
}
.hero-stats {
  display: flex;
  gap: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);
}
.hero-stat-num {
  font-family: var(--font-display);
  font-size: 28px;
  color: var(--color-navy);
}
.hero-stat-lbl {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin-top: 4px;
}

/* ─── Projects ─── */
.projects { background: var(--color-bg); }
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.project-card {
  border: 1px solid var(--color-border);
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
}
.project-card:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.09);
  transform: translateY(-2px);
}
.project-card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  display: block;
}
.project-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.project-card:hover .project-card-image img { transform: scale(1.03); }
.project-card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 45, 94, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  opacity: 0;
  transition: background 0.2s, opacity 0.2s;
}
.project-card:hover .project-card-overlay {
  background: rgba(15, 45, 94, 0.65);
  opacity: 1;
}
.project-card-body { padding: 16px 18px; }
.project-card-num {
  font-size: 10px;
  color: #bbb;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
}
.project-card-title {
  font-family: var(--font-display);
  font-size: 18px;
  color: var(--color-text);
  margin-bottom: 8px;
}
.project-card-desc {
  font-size: 12px;
  color: var(--color-muted);
  line-height: 1.6;
  margin-bottom: 14px;
}
.project-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}
.project-card-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.project-card-tag {
  font-size: 9px;
  letter-spacing: 0.05em;
  color: var(--color-muted);
  background: var(--color-surface);
  padding: 3px 8px;
  border-radius: 2px;
}
.project-card-gh {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--color-navy);
  transition: text-decoration 0.15s;
}
.project-card-gh:hover { text-decoration: underline; }

/* ─── Skills ─── */
.skills { background: var(--color-surface); }
.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 60px;
}
.skill-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}
.skill-name { font-size: 13px; font-weight: 500; color: var(--color-text); }
.skill-cat {
  font-size: 10px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--color-muted);
}

/* ─── Education ─── */
.education { background: var(--color-bg); }
.edu-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 0;
  border-top: 1px solid var(--color-border);
  gap: 24px;
}
.edu-left { flex: 1; }
.edu-institution {
  font-family: var(--font-display);
  font-size: 20px;
  color: var(--color-text);
  margin-bottom: 6px;
}
.edu-details {
  font-size: 13px;
  color: var(--color-muted);
  line-height: 1.7;
}
.edu-date {
  font-size: 12px;
  color: var(--color-muted);
  letter-spacing: 0.04em;
  white-space: nowrap;
  padding-top: 4px;
}

/* ─── GitHub Overview ─── */
.github-overview { background: var(--color-surface); }
.github-profile-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-navy);
  border: 1px solid var(--color-navy);
  padding: 10px 20px;
  border-radius: 2px;
  margin-bottom: 40px;
  transition: background 0.15s, color 0.15s;
}
.github-profile-btn:hover { background: var(--color-navy); color: #fff; }
.github-repos { display: flex; flex-direction: column; }
.github-repo-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid var(--color-border);
  gap: 16px;
}
.github-repo-left { flex: 1; }
.github-repo-name {
  font-family: var(--font-display);
  font-size: 19px;
  color: var(--color-text);
  margin-bottom: 4px;
}
.github-repo-desc {
  font-size: 12px;
  color: var(--color-muted);
  line-height: 1.6;
}
.github-repo-right {
  display: flex;
  align-items: center;
  gap: 16px;
}
.github-repo-lang {
  font-size: 10px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--color-muted);
  background: var(--color-border);
  padding: 3px 9px;
  border-radius: 2px;
}
.github-repo-link {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--color-navy);
}
.github-repo-link:hover { text-decoration: underline; }

/* ─── Contact ─── */
.contact { background: var(--color-bg); }
.contact-form { max-width: 520px; display: flex; flex-direction: column; gap: 0; }
.contact-field {
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--color-border);
  padding: 12px 0;
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--color-text);
  background: transparent;
  outline: none;
  margin-bottom: 24px;
  transition: border-color 0.15s;
}
.contact-field:focus { border-bottom-color: var(--color-navy); }
.contact-field::placeholder { color: #bbb; }
.contact-textarea { resize: vertical; min-height: 100px; }
.contact-submit {
  align-self: flex-start;
  background: var(--color-text);
  color: var(--color-bg);
  border: none;
  padding: 12px 28px;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.15s;
}
.contact-submit:hover { background: var(--color-navy); }
.contact-info { display: flex; gap: 28px; margin-top: 32px; flex-wrap: wrap; }
.contact-info a {
  font-size: 13px;
  color: var(--color-navy);
  letter-spacing: 0.04em;
  transition: text-decoration 0.15s;
}
.contact-info a:hover { text-decoration: underline; }

/* ─── Footer ─── */
.footer {
  border-top: 1px solid var(--color-border);
  padding: 24px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: var(--color-muted);
}
.footer-name { font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text); }
.footer-icons { display: flex; gap: 16px; }
.footer-icons a { color: var(--color-muted); transition: color 0.15s; }
.footer-icons a:hover { color: var(--color-navy); }

/* ─── Responsive ─── */
@media (max-width: 768px) {
  :root { --section-pad: 48px 20px; }

  .nav { padding: 16px 20px; }
  .nav-links { display: none; }
  .nav-hamburger { display: flex; }
  .nav-mobile-menu.open { display: flex; }

  .hero { grid-template-columns: 1fr; min-height: auto; }
  .hero-sidebar { border-right: none; border-bottom: 1px solid var(--color-border); padding: 32px 20px; flex-direction: row; flex-wrap: wrap; gap: 20px; }
  .hero-photo { width: 120px; aspect-ratio: 3/4; flex-shrink: 0; }
  .hero-main { padding: 32px 20px; }
  .hero-stats { gap: 24px; }

  .projects-grid { grid-template-columns: 1fr; }

  .skills-grid { grid-template-columns: 1fr; }

  .edu-row { flex-direction: column; gap: 4px; }

  .github-repo-row { flex-direction: column; align-items: flex-start; }

  .footer { flex-direction: column; gap: 12px; text-align: center; }
}
```

- [ ] **Step 2: Verify styles compile**

```bash
npm run dev
```

Expected: dev server starts, no CSS errors in console.

- [ ] **Step 3: Commit**

```bash
git add src/App.css
git commit -m "feat: add global styles and design tokens"
```

---

## Task 3: Content data file

**Files:**
- Create: `src/data/content.js`

- [ ] **Step 1: Create `src/data/content.js`**

```js
// ─── EDIT THIS FILE to fill in your real content ───────────────────────────

export const personal = {
  name: '[YOUR NAME]',
  role: 'CS Student · AI · Data Analytics',
  bio: '[BIO_PLACEHOLDER — 2–3 sentences: CS major with a Business Administration minor, AI concentration, and a certificate in Data Analytics & Visualization. Describe what drives you and what you are building toward.]',
  email: '[YOUR EMAIL]',
  github: 'https://github.com/[GITHUB_USERNAME]',
  linkedin: 'https://linkedin.com/in/[LINKEDIN_USERNAME]',
  githubUsername: '[GITHUB_USERNAME]',
}

export const projects = [
  {
    num: '01',
    title: '[PROJECT TITLE ONE]',
    desc: '[PROJECT_DESC_1 — Two sentences describing what this project does and why you built it.]',
    tags: ['Python', 'TensorFlow', 'Pandas'],
    github: '[GITHUB_URL_1]',
    image: '/PersonalWebsite/assets/projects/project-1.svg',
  },
  {
    num: '02',
    title: '[PROJECT TITLE TWO]',
    desc: '[PROJECT_DESC_2 — Two sentences describing what this project does and why you built it.]',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '[GITHUB_URL_2]',
    image: '/PersonalWebsite/assets/projects/project-2.svg',
  },
  {
    num: '03',
    title: '[PROJECT TITLE THREE]',
    desc: '[PROJECT_DESC_3 — Two sentences describing what this project does and why you built it.]',
    tags: ['SQL', 'Tableau', 'Python'],
    github: '[GITHUB_URL_3]',
    image: '/PersonalWebsite/assets/projects/project-3.svg',
  },
]

export const skills = [
  { name: 'Python', category: 'Language' },
  { name: 'JavaScript / TypeScript', category: 'Language' },
  { name: 'Java', category: 'Language' },
  { name: 'React', category: 'Framework' },
  { name: 'Node.js', category: 'Framework' },
  { name: 'Pandas / NumPy', category: 'Framework' },
  { name: 'TensorFlow / PyTorch', category: 'AI / ML' },
  { name: 'scikit-learn', category: 'AI / ML' },
  { name: 'SQL', category: 'Data' },
  { name: 'Tableau', category: 'Data Viz' },
  { name: 'Git / GitHub', category: 'Tool' },
  { name: 'Excel / Google Sheets', category: 'Business' },
  // [PLACEHOLDER — add or remove rows to match your actual skills]
]

export const education = [
  {
    institution: '[UNIVERSITY NAME]',
    details: 'BS Computer Science · Minor: Business Administration · Concentration: Artificial Intelligence',
    date: 'Expected [GRADUATION YEAR]',
  },
  {
    institution: '[CERTIFICATE NAME]',
    details: 'Certificate — Data Analytics & Visualization',
    date: '[YEAR]',
  },
]

export const repos = [
  {
    name: '[REPO NAME 1]',
    desc: '[One-line description of this repository.]',
    language: 'Python',
    url: '[GITHUB_URL_1]',
  },
  {
    name: '[REPO NAME 2]',
    desc: '[One-line description of this repository.]',
    language: 'JavaScript',
    url: '[GITHUB_URL_2]',
  },
  {
    name: '[REPO NAME 3]',
    desc: '[One-line description of this repository.]',
    language: 'Python',
    url: '[GITHUB_URL_3]',
  },
]

export const heroTags = ['Python', 'React', 'Machine Learning', 'Data Analytics', 'SQL']
```

- [ ] **Step 2: Commit**

```bash
git add src/data/content.js
git commit -m "feat: add content data file with all placeholders"
```

---

## Task 4: Nav component

**Files:**
- Create: `src/components/Nav.jsx`

- [ ] **Step 1: Create `src/components/Nav.jsx`**

```jsx
import { useState, useEffect } from 'react'
import { personal } from '../data/content'

const NAV_LINKS = [
  { label: 'About',     href: '#hero' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'GitHub',    href: '#github' },
  { label: 'Contact',   href: '#contact' },
]

export default function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <span className="nav-name">{personal.name}</span>
        <ul className="nav-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={activeSection === href.slice(1) ? 'active' : ''}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="/PersonalWebsite/resume.pdf" target="_blank" rel="noreferrer" className="nav-resume">
              Resume ↓
            </a>
          </li>
        </ul>
        <button
          className="nav-hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={activeSection === href.slice(1) ? 'active' : ''}
            onClick={(e) => handleNavClick(e, href)}
          >
            {label}
          </a>
        ))}
        <a href="/PersonalWebsite/resume.pdf" target="_blank" rel="noreferrer" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>
          Resume ↓
        </a>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Nav.jsx
git commit -m "feat: add Nav component with scroll-spy and mobile hamburger"
```

---

## Task 5: Hero component

**Files:**
- Create: `src/components/Hero.jsx`

- [ ] **Step 1: Create `src/components/Hero.jsx`**

```jsx
import { personal, heroTags } from '../data/content'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-sidebar">
        <div className="hero-photo">
          <div className="hero-photo-placeholder">Photo</div>
        </div>
        <div className="hero-name">{personal.name}</div>
        <div className="hero-role">{personal.role}</div>
        <div className="hero-socials">
          <a
            className="hero-social-btn"
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            GH
          </a>
          <a
            className="hero-social-btn"
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            LI
          </a>
          <a
            className="hero-social-btn"
            href={`mailto:${personal.email}`}
            title="Email"
          >
            @
          </a>
        </div>
      </div>

      <div className="hero-main">
        <div className="hero-eyebrow">Portfolio · 2026</div>
        <h1 className="hero-headline">
          Computer<br />Science<br />Student
        </h1>
        <p className="hero-bio">{personal.bio}</p>
        <div className="hero-tags">
          {heroTags.map(tag => (
            <span key={tag} className="hero-tag">{tag}</span>
          ))}
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">3+</div>
            <div className="hero-stat-lbl">Projects</div>
          </div>
          <div>
            <div className="hero-stat-num">2</div>
            <div className="hero-stat-lbl">Internships</div>
          </div>
          <div>
            <div className="hero-stat-num">1</div>
            <div className="hero-stat-lbl">Certificate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat: add Hero component"
```

---

## Task 6: Projects component

**Files:**
- Create: `src/components/Projects.jsx`

- [ ] **Step 1: Create `src/components/Projects.jsx`**

```jsx
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-heading">Recent Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.num} className="project-card">
              <a
                className="project-card-image"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-card-overlay">View on GitHub</div>
              </a>
              <div className="project-card-body">
                <div className="project-card-num">{project.num}</div>
                <div className="project-card-title">{project.title}</div>
                <div className="project-card-desc">{project.desc}</div>
                <div className="project-card-footer">
                  <div className="project-card-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-card-tag">{tag}</span>
                    ))}
                  </div>
                  <a
                    className="project-card-gh"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Projects.jsx
git commit -m "feat: add Projects component with card grid and GitHub hover overlay"
```

---

## Task 7: Skills component

**Files:**
- Create: `src/components/Skills.jsx`

- [ ] **Step 1: Create `src/components/Skills.jsx`**

```jsx
import { skills } from '../data/content'

export default function Skills() {
  const half = Math.ceil(skills.length / 2)
  const left = skills.slice(0, half)
  const right = skills.slice(half)

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-heading">Tools &amp; Skills</h2>
        <div className="skills-grid">
          <div>
            {left.map(skill => (
              <div key={skill.name} className="skill-row">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-cat">{skill.category}</span>
              </div>
            ))}
          </div>
          <div>
            {right.map(skill => (
              <div key={skill.name} className="skill-row">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-cat">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Skills.jsx
git commit -m "feat: add Skills component"
```

---

## Task 8: Education component

**Files:**
- Create: `src/components/Education.jsx`

- [ ] **Step 1: Create `src/components/Education.jsx`**

```jsx
import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-heading">Education &amp; Credentials</h2>
        {education.map((item) => (
          <div key={item.institution} className="edu-row">
            <div className="edu-left">
              <div className="edu-institution">{item.institution}</div>
              <div className="edu-details">{item.details}</div>
            </div>
            <div className="edu-date">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Education.jsx
git commit -m "feat: add Education component"
```

---

## Task 9: GitHub Overview component

**Files:**
- Create: `src/components/GitHubOverview.jsx`

- [ ] **Step 1: Create `src/components/GitHubOverview.jsx`**

```jsx
import { personal, repos } from '../data/content'

export default function GitHubOverview() {
  return (
    <section id="github" className="github-overview">
      <div className="container">
        <h2 className="section-heading">GitHub Overview</h2>
        <a
          className="github-profile-btn"
          href={personal.github}
          target="_blank"
          rel="noreferrer"
        >
          View GitHub Profile →
        </a>
        <div className="github-repos">
          {repos.map((repo) => (
            <div key={repo.name} className="github-repo-row">
              <div className="github-repo-left">
                <div className="github-repo-name">{repo.name}</div>
                <div className="github-repo-desc">{repo.desc}</div>
              </div>
              <div className="github-repo-right">
                <span className="github-repo-lang">{repo.language}</span>
                <a
                  className="github-repo-link"
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/GitHubOverview.jsx
git commit -m "feat: add GitHubOverview component"
```

---

## Task 10: Contact component

**Files:**
- Create: `src/components/Contact.jsx`

- [ ] **Step 1: Create `src/components/Contact.jsx`**

```jsx
import { personal } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-heading">Let&rsquo;s Connect</h2>
        <form
          className="contact-form"
          action="https://formspree.io/f/[FORMSPREE_FORM_ID]"
          method="POST"
        >
          <input
            className="contact-field"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="contact-field"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className="contact-field contact-textarea"
            name="message"
            placeholder="Message"
            required
          />
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
        <div className="contact-info">
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
          <a href={personal.github} target="_blank" rel="noreferrer">
            github.com/{personal.githubUsername}
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Contact.jsx
git commit -m "feat: add Contact component with Formspree form"
```

---

## Task 11: Footer component

**Files:**
- Create: `src/components/Footer.jsx`

- [ ] **Step 1: Create `src/components/Footer.jsx`**

```jsx
import { personal } from '../data/content'

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-name">{personal.name}</span>
      <span>© 2026</span>
      <div className="footer-icons">
        <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat: add Footer component with SVG social icons"
```

---

## Task 12: Wire everything together in App.jsx

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/main.jsx`

- [ ] **Step 1: Replace `src/App.jsx`**

```jsx
import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import GitHubOverview from './components/GitHubOverview'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTIONS = ['hero', 'projects', 'skills', 'education', 'github', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observers = []
    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  return (
    <>
      <Nav activeSection={activeSection} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <GitHubOverview />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Replace `src/main.jsx`**

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 3: Delete Vite default files that are no longer needed**

```bash
rm -f src/index.css src/assets/react.svg public/vite.svg
```

- [ ] **Step 4: Run dev server and verify the full page renders**

```bash
npm run dev
```

Open http://localhost:5173/PersonalWebsite/ (note the base path).

Verify in browser:
- Sticky nav appears with name + links
- Hero shows two-column layout with placeholder photo, headline, bio, tags, stats
- Projects grid shows 3 cards with SVG placeholder images
- Skills grid shows two-column list
- Education shows credential rows
- GitHub section shows profile button + repo rows
- Contact form renders with underline inputs
- Footer shows at the bottom
- Smooth scroll works when clicking nav links
- No console errors

- [ ] **Step 5: Commit**

```bash
git add src/App.jsx src/main.jsx
git rm -f src/index.css src/assets/react.svg public/vite.svg 2>/dev/null || true
git commit -m "feat: wire all components into App.jsx with scroll-spy"
```

---

## Task 13: Move project images to public/ and fix paths

**Files:**
- Modify: `src/data/content.js`

> **Why:** Vite's `import` for images in `src/assets/` changes their paths at build time, but SVGs referenced by string URL need to be in `public/` to work reliably after the GitHub Pages build with a base path.

- [ ] **Step 1: Move placeholder images to `public/assets/projects/`**

```bash
mkdir -p public/assets/projects
mv src/assets/projects/project-1.svg public/assets/projects/
mv src/assets/projects/project-2.svg public/assets/projects/
mv src/assets/projects/project-3.svg public/assets/projects/
```

- [ ] **Step 2: Verify image paths in `src/data/content.js` are already correct**

The `image` field in each project already uses `/PersonalWebsite/assets/projects/project-N.svg` — this is the correct public path for GitHub Pages. No changes needed to `content.js`.

- [ ] **Step 3: Verify images appear in dev server**

```bash
npm run dev
```

Open http://localhost:5173/PersonalWebsite/ and confirm project card images show the gray "PROJECT SCREENSHOT" SVG placeholder.

- [ ] **Step 4: Commit**

```bash
git add public/assets/
git rm -rf src/assets/projects 2>/dev/null || true
git commit -m "fix: move project placeholder images to public/ for correct base-path resolution"
```

---

## Task 14: Production build verification

**Files:** none new

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected output ends with something like:
```
dist/index.html  x.xx kB
dist/assets/index-[hash].js  xxx kB
✓ built in x.xxs
```
No errors.

- [ ] **Step 2: Preview the production build locally**

```bash
npm run preview
```

Open the printed URL (typically http://localhost:4173/PersonalWebsite/) and verify:
- All sections render correctly
- Images load
- Nav links scroll correctly
- No 404s in the browser console network tab

- [ ] **Step 3: Commit if any fixes were needed (otherwise skip)**

---

## Task 15: GitHub Pages deployment setup

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create GitHub Actions workflow**

```bash
mkdir -p .github/workflows
```

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

- [ ] **Step 2: Add `.gitignore` entries**

Ensure `dist/` and `node_modules/` are in `.gitignore` (Vite adds them by default — verify):

```bash
grep -E "^dist$|^node_modules$" .gitignore
```

Expected: both lines appear. If missing, add them:
```bash
echo "dist" >> .gitignore
echo "node_modules" >> .gitignore
```

Also add `.superpowers/` to `.gitignore`:
```bash
echo ".superpowers/" >> .gitignore
```

- [ ] **Step 3: Commit**

```bash
git add .github/ .gitignore
git commit -m "feat: add GitHub Actions deploy workflow"
```

- [ ] **Step 4: Push to GitHub and enable Pages**

```bash
git remote add origin https://github.com/[GITHUB_USERNAME]/PersonalWebsite.git
git push -u origin main
```

Then in GitHub: **Settings → Pages → Source → Deploy from a branch → `gh-pages` / `/ (root)`**

After the Actions workflow completes (~1 min), the site will be live at `https://[GITHUB_USERNAME].github.io/PersonalWebsite/`.

---

## Post-deployment: Fill in your real content

After the site is live, edit **only `src/data/content.js`** to fill in all `[PLACEHOLDER]` values:

1. `personal.name` — your full name
2. `personal.bio` — 2–3 sentence bio
3. `personal.email`, `personal.github`, `personal.linkedin` — your profiles
4. Each `projects` entry: real title, description, tags, GitHub URL
5. Replace `public/assets/projects/project-N.svg` with real PNG/JPG screenshots
6. Update `skills` array to match your actual skills
7. Fill in `education` with your real university and graduation year
8. Fill in `repos` with your featured GitHub repositories
9. In `src/components/Contact.jsx`, replace `[FORMSPREE_FORM_ID]` with your real Formspree ID
10. Drop your real `resume.pdf` into `public/`

Then `git add src/data/content.js && git commit -m "content: fill in real portfolio content" && git push` — the Actions workflow deploys automatically.
