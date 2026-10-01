// ─── All editable site content lives here ─────────────────────────────────
const base = import.meta.env.BASE_URL

export const personal = {
  name: 'Jones Vicinus',
  role: 'CS Student · Full-Stack · Data',
  bio: 'I build full-stack web apps and data tools. Recent work includes ClearCash, a personal finance app live at myclearcash.com, and the SnapShot Photo Albums storefront, a live e-commerce site with a Phoenix backend I took over and extended. I am a junior at the University of South Carolina studying Computer Science with a Business Administration minor and an Artificial Intelligence concentration, graduating May 2028 and looking for a Summer 2027 software engineering or systems analyst internship.',
  email: 'jones@bowst.com',
  github: 'https://github.com/Jonesvicinus',
  linkedin: 'https://www.linkedin.com/in/jonesvicinus',
  githubUsername: 'Jonesvicinus',
}

export const projects = [
  {
    num: '01',
    title: 'ClearCash',
    desc: 'Personal money manager for tracking spending, income, budgets, and savings goals, with statement import, learned merchant memory, and undo/redo. Live at myclearcash.com and open for anyone to use.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel'],
    github: 'https://github.com/Jonesvicinus/ClearCash',
    image: `${base}assets/projects/clearcash.jpg`,
  },
  {
    num: '02',
    title: 'SnapShot Photo Albums',
    desc: 'Desktop storefront for a printed photo album startup: build an album, upload photos, check out, and order. Inherited a never-launched mobile app, extended its Phoenix API, and built the web app from scratch.',
    tags: ['Next.js', 'Elixir / Phoenix', 'Stripe', 'AWS', 'Docker'],
    github: 'https://github.com/Jonesvicinus/snapshot-photo-albums-web',
    image: `${base}assets/projects/snapshot.jpg`,
  },
  {
    num: '03',
    title: 'NPI Matching and Review',
    desc: 'Matches a nonprofit client’s provider records against the 7M-row federal NPI registry, then gives staff a review site with an AI assistant to confirm each match. Built at Bowst for Help Hope Live.',
    tags: ['Python', 'Flask', 'SQLite', 'GPT-4o', 'React'],
    github: 'https://github.com/Jonesvicinus/npi-matching-portfolio',
    image: `${base}assets/projects/npi.jpg`,
  },
]

export const experience = [
  {
    role: 'Software Engineer (Freelance)',
    company: 'SnapShot Photo Albums',
    url: 'https://snapshotalbums.com',
    location: 'Summerville, SC · Remote',
    date: 'June 2026 to Present',
    bullets: [
      'Inherited a mobile-only app, in development since 2022 and never launched: assessed the codebase, adapted and extended its Elixir/Phoenix API, and built a desktop Next.js storefront that is live at snapshotalbums.com.',
      'Built the album builder, photo uploads to S3, Stripe checkout, order tracking, and print-ready export at 300 DPI.',
      'Own the infrastructure: Docker Compose on EC2, nightly database backups, SES email, and the launch-readiness audit that gates real orders.',
    ],
    tags: ['Next.js', 'Elixir / Phoenix', 'PostgreSQL', 'Stripe', 'AWS'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Bowst',
    url: 'https://bowst.com',
    location: 'Software development agency',
    date: 'May 2026 to August 2026',
    bullets: [
      'Built a matching pipeline and staff review site that validated 3,500+ medical centers and 11,800+ professionals for Help Hope Live against the 7M-row NPI registry, with human sign-off on every match, and supported the client presentation to HHL leadership.',
      'Built NPI Lookup, a natural-language search over the NPPES database: GPT-4o function calling writes the SQL, Node/Express on Railway, React on Netlify.',
      'Wrote and executed 200+ test cases across client deliverables, documented the root cause and fix options for a live SMS scheduling defect, migrated WordPress content, and presented AI-assisted analysis tools to the team.',
    ],
    tags: ['Python', 'Flask', 'Node.js', 'React', 'PostgreSQL', 'OpenAI API'],
  },
]

export const skills = [
  { name: 'Python', category: 'Language' },
  { name: 'JavaScript / TypeScript', category: 'Language' },
  { name: 'Java', category: 'Language' },
  { name: 'SQL', category: 'Language' },
  { name: 'React / Next.js', category: 'Framework' },
  { name: 'Node.js / Express', category: 'Framework' },
  { name: 'Elixir / Phoenix', category: 'Framework' },
  { name: 'PostgreSQL / Supabase', category: 'Data' },
  { name: 'Stripe', category: 'Platform' },
  { name: 'AWS (EC2, S3, SES)', category: 'Platform' },
  { name: 'OpenAI / Anthropic APIs', category: 'AI' },
  { name: 'Git / GitHub', category: 'Tool' },
  { name: 'UML / Lucidchart', category: 'Design' },
  { name: 'Excel / Google Sheets', category: 'Business' },
]

export const education = [
  {
    institution: 'University of South Carolina',
    details: 'BS Computer Science · Minor: Business Administration · Concentration: Artificial Intelligence · GPA 3.88 · Dean’s List, President’s Honor List, Capstone Scholar',
    date: 'Expected May 2028',
  },
  {
    institution: 'Data Analytics and Visualization Certificate',
    details: 'University of South Carolina · In progress',
    date: '2028',
  },
  {
    institution: 'Theta Tau',
    details: 'Professional engineering fraternity · Pledge class Fall 2026',
    date: '2026',
  },
]

export const repos = [
  {
    name: 'mission-incompilable',
    desc: 'Team escape room game for CSCE 247: five puzzle types, JSON saves, JavaFX UI. Project manager and developer, wrote the SRS and JUnit suites.',
    language: 'Java',
    url: 'https://github.com/zqlectric/mission-incompilable',
  },
  {
    name: 'ClearCash',
    desc: 'Next.js personal finance app with Supabase auth and per-user row-level security, SQL-first migrations, and a Vitest suite. Live at myclearcash.com.',
    language: 'TypeScript',
    url: 'https://github.com/Jonesvicinus/ClearCash',
  },
]

export const heroTags = ['Full-Stack', 'Python', 'TypeScript', 'SQL', 'AI']
