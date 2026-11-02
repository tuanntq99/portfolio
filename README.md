# 🚀 Senior Full-Stack Developer Portfolio

An ultra-modern, high-performance developer portfolio built with **Astro** and **Tailwind CSS**, designed specifically to impress technical headhunters, engineering directors, and talent recruiters with measurable impact metrics and senior craftsmanship.

![Portfolio Preview](./public/images/og-preview.png)

---

## 🌟 Key Features

- **⚡ Fast & static**: Astro + Tailwind, near-zero JS, deployed to GitHub Pages.
- **☕ Java-themed hero**: Typewriter role rotation, animated `BackendDeveloper.java` code card and a scrolling tech-stack marquee.
- **📊 Impact metrics**: Real numbers from the CV (10x query speed-up, 5x WebSocket scalability, 20% team efficiency).
- **🗂️ Projects grid**: Filter by company (IGNIFY / DS GLOBAL).
- **🧭 Experience timeline + Education**.
- **🏅 Certifications & 💬 References**: Sections are built in but **hidden automatically while their lists are empty** — add entries in `portfolio.ts` and they (and the References nav link) appear.
- **📄 One-click CV download**: A single `Download CV` button in the sticky navbar downloads `public/Ngo_Tran_Quoc_Tuan_CV.pdf`.
- **🌗 Dark / Light mode** with zero flicker, scroll-reveal animations (respects `prefers-reduced-motion`).
- **🚀 Single data file**: All content lives in `src/data/portfolio.ts`.

> **Updating the CV:** replace `public/Ngo_Tran_Quoc_Tuan_CV.pdf` with the new PDF (keep the same name) and update `src/data/portfolio.ts` so the website matches it.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 4](https://astro.build/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Typography**: Plus Jakarta Sans & JetBrains Mono (via Google Fonts)
- **Deployment**: GitHub Pages via GitHub Actions

---

## ⚡ How to Dynamically Change Your Data

You do **not** need to touch any UI layout or HTML code to update your portfolio. Everything is centralized in:

📂 [`src/data/portfolio.ts`](file:///d:/Working/Liam/portfolio/src/data/portfolio.ts)

Simply open this file and update any of the following strongly-typed fields:

| Section | What to Edit |
| :--- | :--- |
| **Personal Info** | Name, roles, bio, location, email, phone, avatar, CV path / download file name, socials |
| **Metrics** | The 4 impact cards below the hero |
| **Skills** | Skill groups (same as the CV) |
| **Projects** | Title, company, description, optional highlights, technologies, optional link |
| **Experience** | Company, role, period, achievements (`**text**` renders bold) |
| **Education** | Degree, institution, period, major |
| **Certifications** | Empty = hidden. Name, issuer, date, credential URL |
| **Testimonials (References)** | Empty = hidden. Name, role, company, relationship, quote, contact |

---

## 💻 Local Development

Clone the repository and install dependencies:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [`http://localhost:4321`](http://localhost:4321) in your browser.

---

## 🏗️ Building for Production

To create an optimized, static build in the `dist/` directory:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🚀 Deploying to GitHub Pages

This repository is already configured with a GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Step 1: Enable GitHub Pages in your repository settings
1. On GitHub, navigate to your repository: `https://github.com/tuanntq99/portfolio`
2. Click **Settings** ⚙️ → **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions** (⚠️ do not choose *Deploy from a branch*).
4. Under **Custom domain**, ensure `tuanntq.is-a.dev` is configured.

### Step 2: Push your code to the `main` branch
```bash
git add .
git commit -m "feat: configure custom domain tuanntq.is-a.dev"
git push origin main
```

Your portfolio will automatically build and publish to:
👉 **`https://tuanntq.is-a.dev/`**

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
├── public/
│   ├── images/
│   │   ├── avatar.jpg          # Profile portrait
│   │   └── og-preview.png      # Social share card
│   └── Ngo_Tran_Quoc_Tuan_CV.pdf  # Downloadable CV (single source)
├── src/
│   ├── components/
│   │   ├── Contact.astro       # 1-click email copy & recruiter CTAs
│   │   ├── Experience.astro    # Timeline, education & certifications (hidden if empty)
│   │   ├── Footer.astro        # Social links & live timezone clock
│   │   ├── Hero.astro          # Avatar, typewriter title, Java code card, marquee
│   │   ├── Metrics.astro       # Quantified achievements strip
│   │   ├── Navbar.astro        # Sticky header, theme toggle, Download CV button
│   │   ├── Projects.astro      # Project grid filtered by company
│   │   ├── Skills.astro        # Domain skill matrix with proficiency badges
│   │   ├── Testimonials.astro  # References (hidden if empty)
│   │   └── ThemeScript.astro   # Zero-flicker dark/light mode initializer
│   ├── data/
│   │   └── portfolio.ts        # 🎯 CENTRAL DYNAMIC DATA FILE (edit here!)
│   ├── layouts/
│   │   └── Layout.astro        # HTML root layout & SEO metadata
│   ├── pages/
│   │   └── index.astro         # Main homepage
│   ├── styles/
│   │   └── global.css          # Tailwind directives & custom utilities
│   └── utils/
│       ├── format.ts           # **bold** text helper for experience bullets
│       └── path.ts             # Safe base-path URL resolver
├── astro.config.mjs            # Astro & Tailwind configuration
├── package.json
└── tailwind.config.mjs         # Custom colors, animations & fonts
```

---

## 📄 License

MIT License. Feel free to use this template for your own developer portfolio!
