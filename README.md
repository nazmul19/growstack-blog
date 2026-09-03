# GrowStack Technical Blog — `blog.growstack.tech`

This repository contains the source code for the **standalone technical blog of GrowStack**, accessible at:

👉 **[https://blog.growstack.tech](https://blog.growstack.tech)**

The main marketing and services site lives independently at **[https://growstack.tech](https://growstack.tech)**.

---

## 🛠️ Technology Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/) (Extended edition)
- **Styling**: Modern Vanilla CSS (Zero external frameworks, custom CSS tokens, native Light/Dark mode)
- **JavaScript**: Minimal vanilla JS (Theme toggle, mobile menu, code copy button)
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`)
- **Hosting**: GitHub Pages
- **Custom Domain**: `blog.growstack.tech`

---

## 📁 Repository Structure

```text
growstack-blog/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment workflow
├── archetypes/
│   └── default.md                  # Front-matter archetype for new articles
├── assets/
│   ├── css/
│   │   └── main.css                # Master CSS design system & dark mode
│   └── js/
│       └── main.js                 # Theme toggle, menu, code copy scripts
├── content/
│   ├── _index.md                   # Homepage front-matter
│   ├── about/
│   │   └── index.md                # About GrowStack Blog page
│   └── blog/                       # 10 initial technical engineering articles
│       ├── how-to-design-production-ready-rest-api/index.md
│       ├── how-to-diagnose-slow-api-before-rewriting/index.md
│       ├── why-saas-backends-become-difficult-to-maintain/index.md
│       ├── when-should-startup-use-microservices/index.md
│       ├── database-design-for-saas-products/index.md
│       ├── what-makes-a-backend-production-ready/index.md
│       ├── build-vs-buy-startup-technical-decisions/index.md
│       ├── improving-existing-software-system-without-rewriting/index.md
│       ├── practical-architecture-for-early-stage-saas/index.md
│       └── how-to-work-effectively-with-freelance-software-engineer/index.md
├── layouts/                        # Custom Hugo template layouts
│   ├── _default/
│   ├── blog/
│   └── partials/
├── static/
│   ├── favicon.ico
│   └── robots.txt
├── hugo.toml                       # Hugo site configuration & parameters
└── README.md                       # Documentation & setup guide
```

---

## 🚀 Local Development Setup

### 1. Install Hugo (Extended Edition)

- **Windows (winget)**:
  ```powershell
  winget install --id Hugo.Hugo.Extended --exact
  ```
- **macOS (Homebrew)**:
  ```bash
  brew install hugo
  ```
- **Linux (Snap / apt)**:
  ```bash
  snap install hugo --channel=extended
  ```

### 2. Run Local Development Server

```bash
hugo server -D
```

Open your browser and navigate to: `http://localhost:1313/`

---

## ✍️ Creating New Articles

To create a new technical article bundle:

```bash
hugo new content/blog/your-article-slug/index.md
```

This creates a new folder under `content/blog/` pre-populated with default front-matter:

```yaml
---
title: "Your Article Title"
date: 2026-09-03T14:30:00Z
draft: false
featured: false
description: "Brief summary of the article."
categories: ["Backend"]
tags: ["Architecture", "Engineering"]
author: "GrowStack Engineering"
ctaTitle: "Need help with your software system?"
ctaText: "GrowStack helps businesses design, build, and optimize production software."
ctaButton: "Work with GrowStack"
---
```

---

## 🏗️ Production Build

To test the production build locally:

```bash
hugo --minify
```

The compiled static site output will be generated in the `public/` directory.

---

## ⚙️ Configuration & Customization (`hugo.toml`)

Global site parameters can be configured directly in `hugo.toml`:

```toml
[params]
  businessURL = 'https://growstack.tech'    # Main business website
  contactURL  = 'https://growstack.tech'    # CTA destination URL
  
  [params.author]
    name = 'GrowStack Engineering'
    bio  = 'Building fast, reliable, scalable backend systems.'

  [params.social]
    github   = 'https://github.com/growstack'
    linkedin = 'https://linkedin.com/company/growstack'
```

---

## 🌐 Custom Subdomain & DNS Setup (`blog.growstack.tech`)

To connect GitHub Pages to `blog.growstack.tech`:

### 1. Configure DNS Records with Domain Registrar / DNS Provider
Add a **CNAME record** for the `blog` subdomain:

| Record Type | Host / Name | Target / Value | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `blog` | `<your-github-username>.github.io` | Automatic / 300s |

*Note: Replace `<your-github-username>` with your actual GitHub account or organization name.*

### 2. Configure GitHub Repository Settings
1. Go to your GitHub repository: **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to `GitHub Actions`.
3. Under **Custom domain**, enter `blog.growstack.tech` and save.
4. Check **Enforce HTTPS** (TLS certificate will issue automatically once DNS propagates).

---

## 🔄 Automated Deployment Workflow

The workflow (`.github/workflows/deploy.yml`) handles deployment automatically:

```text
Write Markdown Article
        ↓
Git Commit & Push to `main`
        ↓
GitHub Actions Pipeline Triggered
        ↓
Hugo Extended Build & Minification
        ↓
Deploy to GitHub Pages
        ↓
Live at https://blog.growstack.tech
```

---

## 📄 License & Copyright

© GrowStack. All rights reserved. Main business website: [https://growstack.tech](https://growstack.tech).
