# Ngo Tran Quoc Tuan · Java Backend Developer Portfolio

A fast, static, accessible portfolio built with **Astro** and **Tailwind CSS**. It is aimed at two readers: recruiters who scan in 30 seconds and tech leads who read in depth. Every claim on the site comes from the CV, and is backed by numbers.

🔗 **Live:** [tuanntq.is-a.dev](https://tuanntq.is-a.dev/)

---

## 🌟 Key Features

- **⚡ Fast and static.** Astro + Tailwind, about 5 KB of JS. Fonts load without blocking render. Deployed to GitHub Pages.
- **☕ API-console hero.** A Postman-style `GET /api/v1/developers/tuan` card:
  - The **Body** tab shows the JSON profile.
  - The **Headers** tab carries contact details as HTTP headers, plus live Hanoi time.
  - **Send** replays the request.
  - The status bar shows the page's real time-to-first-byte.
- **📌 Evidence first.** A proof line under the role shows `2.5+ yrs · Dev Lead · BIDV · 6/6 projects on time · ~99% failed tx auto-resolved`, visible in the first mobile viewport.
- **📊 Impact metrics.** Real numbers from the CV: 2.5+ years, ~99% of failed transactions auto-resolved, 6/6 BIDV projects on schedule, up to 10x faster SQL.
- **🗂️ Projects grid.** Filter by company (SKYMAP / DS GLOBAL): GOV, RLOS, B.ONE and other BIDV projects, plus Snap# and LPA. Screen readers hear the result count.
- **🧭 Experience timeline, Other experience and Education.**
- **🏅 Certifications and 💬 References.** These sections are built in but **hidden automatically while their lists are empty**. Add entries in `portfolio.ts` and they appear, along with the References nav link.
- **📄 One-click CV download.** A single `Download CV` button in the sticky navbar downloads `public/Ngo_Tran_Quoc_Tuan_CV.pdf`.
- **🌗 Dark and light mode.** No flicker on load. Both themes meet WCAG AA contrast.

> **Updating the CV:** replace `public/Ngo_Tran_Quoc_Tuan_CV.pdf` with the new PDF (keep the same name) and update `src/data/portfolio.ts` so the website matches it. The site must never claim anything that is not in the CV.

---

## ♿ Accessibility

- **Contrast.** WCAG AA in both themes. White text on gradients always ends on a `-600`/`-700` step. Secondary text is `slate-600` (light) or `slate-400` (dark), never `slate-500`.
- **Keyboard.**
  - A *Skip to content* link.
  - Visible `focus-visible` rings everywhere.
  - The API card tabs follow the WAI-ARIA tabs pattern (Arrow keys, Home and End).
- **Screen readers.**
  - The role is read as static text, not the typewriter.
  - The JSON card has a plain-language summary.
  - Live regions announce the filter results and the copy-email result.
- **Motion.**
  - Everything respects `prefers-reduced-motion`.
  - The tech marquee has a pause button.
  - The typewriter makes one pass, then stops.
- **Touch.** Controls are at least 44 px on mobile.
- **No-JS.** Scroll-reveal content only hides when JavaScript can reveal it again.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 4](https://astro.build/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Typography**: Plus Jakarta Sans and JetBrains Mono (via Google Fonts)
- **Deployment**: GitHub Pages via GitHub Actions (Node 20)

---

## ⚡ Updating Content

You do **not** need to touch any layout or HTML to update the portfolio. All content lives in one strongly typed file:

📂 [`src/data/portfolio.ts`](src/data/portfolio.ts)

| Section | What to Edit |
| :--- | :--- |
| **Site metadata** | Page title, description, OG image, site URL |
| **Personal Info** | Name, roles (typewriter), bio, location, email, phone, avatar, CV path / download file name, socials |
| **Metrics** | The 4 impact cards below the hero. `metrics[0]`, `[1]` and `[2]` also feed the hero proof line |
| **Skills** | Skill groups (same as the CV), plus `languageNote` for the English line |
| **Projects** | Title, subtitle, company, description, optional highlights, technologies, optional link |
| **Experience** | Company, role, period, location, optional `note` (e.g. "formerly IGNIFY · promoted Oct 2025"), achievements (`**text**` renders bold) |
| **Other experience** | Non-software roles, shown compactly under the timeline |
| **Education** | Degree, institution, period, major |
| **Certifications** | Empty means hidden. Name, issuer, date, credential URL |
| **Testimonials (References)** | Empty means hidden. Name, role, company, relationship, quote, contact |

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start the local dev server
npm run dev
```

Then open [`http://localhost:4321`](http://localhost:4321).

---

## 🏗️ Building for Production

```bash
# Static build into dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## 🚀 Deploying to GitHub Pages

Deployment runs from the GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

### One-time setup
1. On GitHub, open **Settings → Pages** for `tuanntq99/portfolio`.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
   > ⚠️ Do **not** use *Deploy from a branch*. That mode publishes the raw repository root, which has no `index.html`. It races the Actions deploy and can leave the site serving **404**.
3. Under **Custom domain**, keep `tuanntq.is-a.dev`, with **Enforce HTTPS** on. `public/CNAME` already contains the domain.

### Publishing
```bash
git push origin main
```

The workflow builds the site and publishes `dist/` to 👉 **`https://tuanntq.is-a.dev/`** in about 40 seconds. Check progress in the **Actions** tab, or with `gh run list`.

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Build + deploy to GitHub Pages
├── public/
│   ├── images/
│   │   ├── avatar.jpg          # Profile portrait
│   │   └── og-preview.png      # Social share card
│   ├── CNAME                   # Custom domain (tuanntq.is-a.dev)
│   └── Ngo_Tran_Quoc_Tuan_CV.pdf  # Downloadable CV (single source)
├── src/
│   ├── components/
│   │   ├── Contact.astro       # Copy-email (with mailto fallback) and contact CTAs
│   │   ├── Experience.astro    # Timeline, education and certifications (hidden if empty)
│   │   ├── Footer.astro        # Social links, live Hanoi clock, back to top
│   │   ├── Hero.astro          # Avatar, typewriter, proof line, API console card, pausable marquee
│   │   ├── Metrics.astro       # Quantified achievements strip
│   │   ├── Navbar.astro        # Sticky header, theme toggle, Download CV button
│   │   ├── Projects.astro      # Project grid with company filter
│   │   ├── Skills.astro        # Skill groups from the CV
│   │   ├── Testimonials.astro  # References (hidden if empty)
│   │   └── ThemeScript.astro   # Zero-flicker theme init and JS detection
│   ├── data/
│   │   └── portfolio.ts        # 🎯 Central content file (edit here!)
│   ├── layouts/
│   │   └── Layout.astro        # HTML root, SEO metadata, fonts, skip link
│   ├── pages/
│   │   └── index.astro         # Homepage
│   ├── styles/
│   │   └── global.css          # Tailwind directives, utilities, animations, reduced motion
│   └── utils/
│       ├── format.ts           # **bold** text helper for experience bullets
│       └── path.ts             # Safe base-path URL resolver
├── astro.config.mjs            # Astro and Tailwind configuration
├── package.json
└── tailwind.config.mjs         # Custom colors, animations and fonts
```

---

## 📄 License

MIT License. Feel free to adapt this template for your own developer portfolio.
