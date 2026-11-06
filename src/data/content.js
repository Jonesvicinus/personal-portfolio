// ─── EDIT THIS FILE to change site content ──────────────────────────────────
// Facts here come from the resume source (School/Resumes/build/content.py,
// build_motorola), Application-Profile.json, and the LinkedIn copy. Keep it
// in sync with the resume: no em dashes, no contractions, numbers only when
// measured.
const base = import.meta.env.BASE_URL

export const personal = {
  name: 'Jones Vicinus',
  role: 'Software Engineer · Computer Science + AI at USC',
  bio: 'I build full-stack software that people use: the live storefront for Snapshot Photo Albums, ClearCash, a personal finance app with active users, and HQ, native SwiftUI apps that manage my AI coding agents. I study Computer Science at the University of South Carolina with a concentration in Artificial Intelligence and a minor in Business Administration, graduating May 2028. I am looking for a Summer 2027 software engineering internship.',
  email: 'jones@vicinus.com',
  location: 'Hampton, NH',
  github: 'https://github.com/Jonesvicinus',
  linkedin: 'https://www.linkedin.com/in/jonesvicinus',
  linkedinHandle: 'jonesvicinus',
  githubUsername: 'Jonesvicinus',
}

// Short facts under the bio. Kept distinct from the Skills list.
export const heroTags = ['USC Computer Science', 'AI Concentration', 'GPA 3.88', 'Open to Summer 2027 Internships']

export const experience = [
  {
    org: 'Snapshot Photo Albums',
    role: 'Software Engineer (Freelance)',
    date: 'June 2026 to Present',
    link: 'https://snapshotalbums.com',
    linkLabel: 'snapshotalbums.com',
    bullets: [
      'Took over a mobile-only app in development since 2022 and never launched, extended its Elixir/Phoenix and PostgreSQL API, and rebuilt the customer site as a 29,000-line Next.js and TypeScript storefront.',
      'Built the full stack of the live site: a print-accurate album editor, Stripe PaymentIntents confirmed by webhook, background photo uploads to AWS S3, a shared photo library, and authorization hardening across the API.',
      'Wrote roughly 400 automated unit and end-to-end tests (Vitest, Playwright, ExUnit) and ship tagged releases to AWS through a GitHub Actions pipeline.',
      'Work with the non-technical founder to turn business goals into a prioritized build plan, including a fulfillment export that produces print-ready files.',
    ],
    tags: ['Next.js', 'TypeScript', 'Elixir / Phoenix', 'PostgreSQL', 'AWS', 'Stripe'],
  },
  {
    org: 'Bowst',
    role: 'Software Developer Intern · Portsmouth, NH',
    date: 'May 2026 to August 2026',
    bullets: [
      'Built a Python matching engine for Help Hope Live, a nonprofit client, linking 12,000+ providers and 3,500+ centers to the 7M-row NPI registry with weighted fuzzy matching.',
      'Designed the SQLite and PostgreSQL schema and fuzzy-match indexes for the registry import, wrote the SQL behind match scoring, and delivered confidence-tiered matches to a staff review site.',
      'Built AI tools that keep staff in the loop: a GPT-4o registry lookup, a GPT-4o vision tool that drafts SEO metadata, and a Document AI reader that turns handwritten forms into review-ready orders (98.5% recall).',
      'Wrote and executed 200+ test cases, documented the root cause and fix options for a Twilio SMS scheduling defect, and supported WordPress migrations and Netlify and Railway deploys.',
    ],
    tags: ['Python', 'SQL', 'PostgreSQL', 'GPT-4o', 'Document AI'],
  },
  {
    org: 'Beta Theta Pi',
    role: 'Professionalism Committee · Columbia, SC',
    date: 'August 2025 to Present',
    bullets: [
      'Plan and deliver career workshops every 2 weeks for 50+ new members on resumes, interviews, and recruiting.',
      'Coach 15 new members one on one on goals, timelines, and applications; 8 joined selective campus groups.',
    ],
    tags: [],
  },
]

// link is optional: leave it out for private work (HQ is a private repo).
// image is optional: cards without one render text only.
export const projects = [
  {
    num: '01',
    title: 'ClearCash',
    meta: 'Founder and Developer · April 2026 to Present',
    desc: 'A live personal finance web app with active users: budgets, savings goals, income and expense tracking, OCR statement import, money-flow visualizations, stock positions, and merchant categorization that learns from each edit. Runs on Supabase and PostgreSQL with Google sign-in and row-level security, and CI lints, type-checks, tests, and builds on every push.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'GitHub Actions'],
    link: 'https://myclearcash.com',
    linkLabel: 'myclearcash.com',
    image: `${base}assets/projects/clearcash.jpg`,
  },
  {
    num: '02',
    title: 'Snapshot Photo Albums',
    meta: 'Software Engineer (Freelance) · June 2026 to Present',
    desc: 'I took over an app that had been in development since 2022 and never launched, extended its Elixir/Phoenix and PostgreSQL API, and rebuilt the customer site as a 29,000-line Next.js and TypeScript storefront. The live site has a print-accurate album editor, Stripe payments confirmed by webhook, background photo uploads to AWS S3, and roughly 400 automated tests, with releases shipped to AWS through GitHub Actions.',
    tags: ['Next.js', 'TypeScript', 'Elixir/Phoenix', 'PostgreSQL', 'Stripe', 'AWS'],
    link: 'https://snapshotalbums.com',
    linkLabel: 'snapshotalbums.com',
    image: `${base}assets/projects/snapshot.jpg`,
  },
  {
    num: '03',
    title: 'HQ',
    meta: 'Personal Project · October 2026 to Present',
    desc: 'Native SwiftUI apps for macOS and iOS that manage my AI coding agents, track their usage, and hold agent actions for my approval. Behind them is a zero-dependency Node.js server, reachable only over a private Tailscale network, with 85 test files. The apps share a Swift package of about 10,900 lines across 65 files, stream live updates over Server-Sent Events, and keep credentials in the Keychain.',
    tags: ['Swift', 'SwiftUI', 'Node.js', 'Tailscale', 'Server-Sent Events'],
  },
  {
    num: '04',
    title: 'Virtual Escape Room',
    meta: 'Project Manager and Developer · CSCE 247 · August to December 2025',
    desc: 'A Java/JavaFX escape room game shipped by a 4-person Agile team in weekly sprints, with five puzzle types, non-linear room unlocking, a timer with pause and checkpoints, inventory, and a persistent leaderboard. I wrote the 12-page software requirements specification and UML sequence diagram, and wrote JUnit suites in a 292-test codebase across 170+ pull requests.',
    tags: ['Java', 'JavaFX', 'JUnit', 'UML', 'Agile'],
  },
]

export const skills = [
  { name: 'Python', category: 'Language' },
  { name: 'Java', category: 'Language' },
  { name: 'C / C++', category: 'Language' },
  { name: 'TypeScript / JavaScript', category: 'Language' },
  { name: 'Swift', category: 'Language' },
  { name: 'Elixir', category: 'Language' },
  { name: 'SQL (PostgreSQL, SQLite)', category: 'Data' },
  { name: 'React / Next.js', category: 'Framework' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'SwiftUI', category: 'Framework' },
  { name: 'Phoenix', category: 'Framework' },
  { name: 'Supabase', category: 'Platform' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'GitHub Actions', category: 'CI / CD' },
  { name: 'Linux / Git', category: 'Tool' },
  { name: 'PyTorch', category: 'AI / ML' },
  { name: 'GPT-4o / Document AI', category: 'AI / ML' },
  { name: 'Vitest / Playwright', category: 'Testing' },
  { name: 'JUnit / ExUnit', category: 'Testing' },
]

export const education = [
  {
    institution: 'University of South Carolina',
    details: 'BS Computer Science · Concentration: Artificial Intelligence · Minor: Business Administration · GPA 3.88',
    date: 'May 2028',
  },
  {
    institution: 'Data Analytics and Visualization',
    details: 'Certificate · University of South Carolina',
    date: 'In progress',
  },
  {
    institution: 'Honors',
    details: 'Capstone Scholar · President’s Honors List · Dean’s Honor List (3x)',
    date: '',
  },
]

// Not rendered right now: the GitHub Overview section is off the page because
// the main work (ClearCash, HQ, Snapshot) lives in private repos. Fill these
// and re-add <GitHubOverview /> in App.jsx and Nav.jsx if public repos are
// worth showing.
export const repos = []
