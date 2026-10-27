# 🚀 Senior Full-Stack Developer Portfolio

An ultra-modern, high-performance developer portfolio built with **Astro** and **Tailwind CSS**, designed specifically to impress technical headhunters, engineering directors, and talent recruiters with measurable impact metrics and senior craftsmanship.

![Portfolio Preview](./public/images/og-preview.png)

---

## 🌟 Key Features

- **⚡ Blazing Fast & Zero-JS Baseline**: Built on Astro's island architecture for near-perfect Google Lighthouse scores and rapid loading.
- **🎨 Headhunter-Centric Design**:
  - **Quantified Impact Metrics**: Highlights business ROI (e.g., *99.98% System Uptime*, *-45% Latency Reduction*, *1M+ Transactions Processed*).
  - **Interactive Developer Terminal**: Simulated production terminal featuring live tab switching (`developer.json`, `ci_pipeline.sh`, `sla_monitor.log`).
  - **Dynamic Title Rotation**: Typewriter animation cycling through your core engineering roles.
  - **STAR-Formatted Experience**: Reverse chronological career timeline with quantifiable achievement bullets.
  - **Production Projects Grid**: Dynamic category filtering (`Full-Stack`, `Backend & Cloud`, `Frontend`, `Architecture & Testing`) with impact tags and repository links.
  - **Verified Endorsements & Certifications**: High-trust social proof and AWS / K8s certification badges.
  - **1-Click Copy Email & Direct CTA**: Frictionless recruiter contact with animated clipboard confirmation toast.
- **🌗 Dark / Light Mode with Zero-Flicker**: Instant theme toggle with localStorage persistence.
- **📄 Printable CV / Resume View**: Built-in resume at `/resume.html` with one-click print-to-PDF formatting.
- **🚀 1-File Dynamic Data Configuration**: All portfolio content (bio, skills, metrics, projects, experience, socials, SEO) is managed in a single TypeScript file (`src/data/portfolio.ts`).
- **📦 GitHub Pages Ready**: Pre-configured static build with automated GitHub Actions CI/CD deployment.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 4](https://astro.build/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Typography**: Plus Jakarta Sans, Inter & JetBrains Mono (via Google Fonts)
- **Deployment**: GitHub Pages via GitHub Actions

---

## ⚡ How to Dynamically Change Your Data

You do **not** need to touch any UI layout or HTML code to update your portfolio. Everything is centralized in:

📂 [`src/data/portfolio.ts`](file:///d:/Working/Liam/portfolio/src/data/portfolio.ts)

Simply open this file and update any of the following strongly-typed fields:

| Section | What to Edit |
| :--- | :--- |
| **Personal Info** | Name, roles, bio, elevator pitch, location, email, avatar image, resume link, socials |
| **Executive Metrics** | The 4 high-impact metric cards shown right below the hero |
| **Technical Skills** | Categorized list of skills (Frontend, Backend, Cloud & DevOps, Testing) and levels (`Expert`, `Advanced`) |
| **Featured Projects** | Project title, category, impact metric hook, description, STAR bullets, tags, GitHub / demo URLs |
| **Experience Timeline** | Companies, roles, date periods, domain tags, quantified achievements, tech stack |
| **Certifications & Education**| Degrees, honors, verified certifications and verification URLs |
| **Testimonials** | Quotes from engineering leadership, roles, companies, and avatar images |

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
│   └── resume.html             # Printable resume document
├── src/
│   ├── components/
│   │   ├── Contact.astro       # 1-click email copy & recruiter CTAs
│   │   ├── Experience.astro    # Career timeline & certifications
│   │   ├── Footer.astro        # Social links & live timezone clock
│   │   ├── Hero.astro          # Avatar, typewriter title, interactive terminal
│   │   ├── Metrics.astro       # Quantified achievements strip
│   │   ├── Navbar.astro        # Sticky glass header & theme toggle
│   │   ├── Projects.astro      # Filterable project grid with impact metrics
│   │   ├── Skills.astro        # Domain skill matrix with proficiency badges
│   │   ├── Testimonials.astro  # Endorsement quotes from leadership
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
│       └── path.ts             # Safe base-path URL resolver
├── astro.config.mjs            # Astro & Tailwind configuration
├── package.json
└── tailwind.config.mjs         # Custom colors, animations & fonts
```

---

## 📄 License

MIT License. Feel free to use this template for your own developer portfolio!
