# Build GrowStack Technical Blog — `blog.growstack.tech`

You are a senior web engineer, UI/UX designer, SEO specialist, technical content architect, and DevOps engineer.

Your task is to build a **standalone technical blog for GrowStack**, a freelance software engineering business.

## CRITICAL CONSTRAINT

There is already a production website at:

`https://growstack.tech`

**DO NOT overwrite, modify, rebuild, replace, or migrate the existing `growstack.tech` website.**

The existing website is the primary business/marketing/conversion website.

You are building a **completely separate blog application/repository** that will live at:

`https://blog.growstack.tech`

The two websites should feel like parts of the same brand, but they must remain technically independent.

---

# 1. Business Context

GrowStack is a freelance software engineering brand.

The existing website:

`https://growstack.tech`

is responsible for:

- Personal/business introduction
- Services
- Portfolio/work
- About
- Contact
- Client conversion

The new blog:

`https://blog.growstack.tech`

will be responsible for:

- Technical articles
- Engineering guides
- Software architecture articles
- Backend/API content
- SaaS engineering content
- Cloud/infrastructure content
- Technical case studies
- Engineering opinions
- Problem-solving articles

The primary business objective of the blog is:

**Attract qualified software-development prospects and send them to `growstack.tech` to learn about services and get in touch.**

This is NOT intended to be a generic programming tutorial website.

---

# 2. Recommended Architecture

Create a completely independent repository:

```text
GitHub
│
├── Existing GrowStack website
│       ↓
│   growstack.tech
│
└── New GrowStack blog repository
        ↓
      Hugo
        ↓
   GitHub Actions
        ↓
   GitHub Pages
        ↓
 blog.growstack.tech
```

Do not assume anything about the existing `growstack.tech` repository.

Do not modify it.

Do not import its code unless explicitly instructed.

---

# 3. Technology Stack

Use:

- Hugo
- Markdown
- Git
- GitHub
- GitHub Actions
- GitHub Pages
- Custom domain: `blog.growstack.tech`

Avoid:

- React
- Next.js
- WordPress
- Database
- Backend server
- Headless CMS
- Heavy JavaScript frameworks
- Unnecessary dependencies

The blog should be a fast, maintainable static website.

The architecture should demonstrate the same engineering philosophy that GrowStack sells:

**Simple. Fast. Reliable. Maintainable.**

---

# 4. Repository Structure

Create a clean Hugo project similar to:

```text
growstack-blog/
│
├── archetypes/
│
├── assets/
│
├── content/
│   ├── blog/
│   │   ├── production-ready-rest-api/
│   │   │   └── index.md
│   │   ├── slow-api-diagnosis/
│   │   │   └── index.md
│   │   └── ...
│   │
│   └── _index.md
│
├── layouts/
│   ├── _default/
│   ├── blog/
│   └── partials/
│
├── static/
│
├── themes/
│
├── hugo.toml
│
├── README.md
│
└── .github/
    └── workflows/
        └── deploy.yml
```

Use Hugo's current best practices.

---

# 5. Brand Relationship

The blog should clearly belong to GrowStack.

Use:

**GrowStack**

as the brand name.

The blog should have a clear link back to:

`https://growstack.tech`

Do NOT make the blog look like a completely unrelated publication.

At the same time, don't duplicate the entire main website.

The relationship should be:

```text
GrowStack
Software Engineering

        ↓

growstack.tech
Business / Services / Portfolio

        ↕

blog.growstack.tech
Engineering Knowledge / Articles
```

---

# 6. Blog Header

Create a simple, professional header.

Suggested navigation:

```text
GrowStack

Blog
Topics
About GrowStack

[Work With Me]
```

The `GrowStack` logo/name should link to:

`https://growstack.tech`

The primary CTA should link to the existing website's contact or relevant service page.

Do not invent a contact URL if the existing site structure is unknown.

Make the URL configurable in `hugo.toml`.

---

# 7. Blog Homepage

Create a polished blog homepage.

It should include:

## Hero

Something along the lines of:

> Engineering insights for building better software.

Supporting copy should explain that the blog covers practical software engineering, backend systems, APIs, SaaS architecture, performance, and engineering decisions.

Avoid generic marketing language.

---

## Featured Article

Show one featured article prominently.

---

## Latest Articles

Show recent articles with:

- Title
- Description
- Date
- Reading time
- Category
- Tags

---

## Topics

Create topic/category navigation such as:

- Backend
- APIs
- SaaS
- Architecture
- Databases
- Cloud
- DevOps
- Performance
- Software Engineering

---

## CTA

End the homepage with a subtle business CTA:

> Need help building or improving your software?

Then link to:

`https://growstack.tech`

The CTA should feel natural, not aggressive.

---

# 8. Blog Article Design

Individual articles should be extremely readable.

Include:

- Title
- Description
- Date
- Reading time
- Author
- Categories
- Tags
- Table of contents when useful
- Article body
- Related articles
- Business CTA

Example article structure:

```text
Title

Description

Metadata

Table of Contents

Introduction

Problem

Analysis

Approach

Implementation

Trade-offs

Lessons Learned

Conclusion

-------------------------

Need help with something similar?

Work with GrowStack
```

Use excellent typography and spacing.

Optimize for long-form reading.

---

# 9. Content Strategy

The blog should primarily attract **potential software clients**, not just developers looking for beginner tutorials.

Prioritize content demonstrating:

- Engineering judgment
- Architecture decisions
- Debugging
- Performance optimization
- Backend development
- API design
- SaaS development
- Database design
- Cloud engineering
- Technical debt management
- System modernization
- Build-vs-buy decisions

The content should demonstrate:

**"This person knows how to solve real software problems."**

---

# 10. Initial Articles

Create the following initial articles as high-quality drafts.

Do not fabricate personal experience.

If an article is written from a general engineering perspective, make that clear.

### Article 1

**How to Design a Production-Ready REST API**

Focus on:

- API design
- Authentication
- Validation
- Error handling
- Versioning
- Observability
- Rate limiting
- Testing
- Documentation
- Production considerations

---

### Article 2

**How to Diagnose a Slow API Before Rewriting It**

Focus on:

- Measuring before changing
- Application profiling
- Database queries
- Network latency
- External services
- Caching
- Logging
- Tracing
- Load testing

Position this as practical engineering guidance.

---

### Article 3

**Why SaaS Backends Become Difficult to Maintain**

Cover:

- Growing codebases
- Coupling
- Poor boundaries
- Database problems
- Missing tests
- Configuration management
- Technical debt
- Architectural evolution

---

### Article 4

**When Should a Startup Use Microservices?**

Discuss:

- Monolith advantages
- Microservice trade-offs
- Team size
- Deployment complexity
- Operational overhead
- Organizational boundaries
- When microservices actually make sense

Avoid presenting microservices as automatically superior.

---

### Article 5

**How to Approach Database Design for SaaS Products**

Discuss:

- Data modeling
- Relationships
- Indexes
- Transactions
- Constraints
- Migrations
- Query performance
- Multi-tenancy considerations

---

### Article 6

**What Makes a Backend Production Ready?**

Cover:

- Reliability
- Security
- Monitoring
- Logging
- Testing
- Error handling
- Deployment
- Backups
- Performance
- Operational readiness

---

### Article 7

**Build vs Buy: How Startups Should Make Technical Decisions**

Focus on:

- Cost
- Time
- Maintenance
- Differentiation
- Vendor lock-in
- Security
- Engineering capacity

This article should appeal directly to founders.

---

### Article 8

**How to Improve an Existing Software System Without Rewriting Everything**

Discuss:

- Technical debt
- Incremental refactoring
- Observability
- Strangler patterns
- Risk reduction
- Prioritization
- Migration strategies

---

### Article 9

**A Practical Architecture for an Early-Stage SaaS**

Discuss a pragmatic architecture.

Emphasize:

**Start simple → validate product → evolve architecture as necessary.**

---

### Article 10

**How to Work Effectively With a Freelance Software Engineer**

Target founders/business owners.

Discuss:

- Defining requirements
- Communication
- Scope
- Milestones
- Technical decisions
- Code ownership
- Documentation
- Deployment
- Maintenance

This article should have a strong but natural CTA toward GrowStack.

---

# 11. Lead Generation

Every article should have a contextual CTA.

Do NOT use the same aggressive CTA everywhere.

Examples:

For backend article:

> Having backend performance or reliability problems?  
> GrowStack helps businesses diagnose, improve, and build backend systems.

For SaaS article:

> Building a SaaS product?  
> See how GrowStack can help with architecture and development.

For architecture article:

> Need help making an existing system easier to maintain?  
> Let's discuss the problem.

All CTAs should ultimately link to:

`https://growstack.tech`

Make CTA URLs configurable.

---

# 12. SEO Strategy

Optimize for organic search without producing spammy SEO content.

Implement:

- Unique page titles
- Meta descriptions
- Canonical URLs
- Open Graph metadata
- Twitter/X metadata
- XML sitemap
- robots.txt
- RSS
- Semantic HTML
- Proper heading hierarchy
- Breadcrumbs
- Article structured data
- Person/Organization structured data where appropriate

Use:

```text
https://blog.growstack.tech
```

as the blog canonical base URL.

Do not accidentally canonicalize blog pages to `growstack.tech`.

The business website and blog are separate properties.

---

# 13. Structured Data

Implement JSON-LD for articles.

Include appropriate fields such as:

- headline
- description
- datePublished
- dateModified
- author
- publisher
- mainEntityOfPage

Do not invent author credentials.

Use configurable author information.

---

# 14. URL Structure

Use clean URLs:

```text
https://blog.growstack.tech/blog/how-to-design-production-ready-rest-api/
```

Avoid:

```text
/blog/2026/09/03/article-name/
```

Avoid `.html`.

Use lowercase slugs.

---

# 15. Search

If practical, implement lightweight client-side blog search.

Do not introduce a backend.

If search adds too much JavaScript or complexity, prioritize site performance and omit it initially.

The architecture should allow search to be added later.

---

# 16. Tags and Categories

Support:

```text
/categories/
```

and:

```text
/tags/
```

Each should generate clean index pages.

Avoid creating hundreds of empty taxonomy pages.

---

# 17. RSS

Generate:

```text
/index.xml
```

and expose RSS discovery metadata.

Add an RSS link in the footer or blog navigation.

---

# 18. Sitemap and Robots

Generate:

```text
/sitemap.xml
/robots.txt
```

Ensure search engines can crawl the blog.

Do not block:

```text
/blog/
```

---

# 19. Performance

The blog should be extremely fast.

Prioritize:

- Static HTML
- Minimal JavaScript
- Minimal CSS
- Optimized fonts
- Optimized images
- Lazy loading
- No unnecessary external dependencies
- No autoplay video
- No heavy animations

Aim for excellent Lighthouse/Core Web Vitals performance.

---

# 20. Design

The design should feel like a premium software engineering publication.

Style direction:

- Minimal
- Technical
- Professional
- Modern
- Editorial
- High readability

Avoid:

- Hacker clichés
- Excessive neon
- Excessive gradients
- Generic AI-generated visuals
- Excessive glassmorphism
- Stock photography
- Excessive animations
- Huge decorative elements

Typography and spacing are very important.

The article reading experience should be the highest priority.

---

# 21. Responsive Design

Support:

- Desktop
- Tablet
- Mobile

Ensure:

- Navigation works on mobile
- Articles are comfortable to read
- Code blocks are horizontally scrollable
- Tables don't break layouts
- Images don't overflow
- CTAs work well on small screens

---

# 22. Dark Mode

Implement a polished light/dark theme if it can be done without unnecessary complexity.

Respect:

```text
prefers-color-scheme
```

Allow a user-controlled theme toggle if practical.

Persist the user's choice locally.

Do not make dark mode mandatory.

---

# 23. Code Blocks

Technical articles will contain code.

Implement:

- Syntax highlighting
- Horizontal scrolling for long lines
- Good readability
- Copy-code button if it can be implemented with minimal JavaScript
- Accessible code blocks

Do not load a large JavaScript library solely for copy functionality.

---

# 24. Images

The site should support article images.

Use Hugo's image processing where appropriate.

Do not fabricate screenshots of software or fake project results.

Create an easy structure for future images:

```text
content/
└── blog/
    └── article-name/
        ├── index.md
        └── image.png
```

---

# 25. About Page

Create a lightweight blog-specific `/about/` page.

It should not duplicate the full GrowStack business website.

Instead explain:

- What the blog is about
- What topics are covered
- Who writes it
- Link back to GrowStack

Link to:

`https://growstack.tech`

for the complete business/profile information.

Use placeholders where personal information is required.

Never fabricate:

- Experience
- Clients
- Employers
- Certifications
- Awards
- Revenue
- Results
- Testimonials

---

# 26. Footer

Create a simple footer containing:

```text
GrowStack

Technical insights on software engineering,
backend systems, APIs, SaaS, and architecture.

GrowStack Website
Services
Work
Contact

Blog
Topics
RSS

GitHub
LinkedIn

© GrowStack
```

Use configurable URLs.

---

# 27. Hugo Configuration

Create a clean `hugo.toml`.

Centralize:

- Blog name
- Description
- Base URL
- Author
- Main GrowStack URL
- Contact URL
- Social links
- Navigation
- Analytics
- SEO defaults

Example concept:

```yaml
params:
  businessURL: "https://growstack.tech"
  contactURL: ""
  author:
    name: ""
    bio: ""
```

Do not invent values that are unknown.

---

# 28. Analytics

Create an analytics abstraction.

Default:

```text
disabled
```

Allow configuration later.

Do not force Google Analytics or another provider.

Avoid unnecessary tracking scripts.

---

# 29. GitHub Actions

Create:

```text
.github/workflows/deploy.yml
```

The workflow should:

1. Trigger on pushes to `main`
2. Set up Hugo
3. Build the website
4. Validate the build
5. Upload the generated artifact
6. Deploy to GitHub Pages

Use current official GitHub Pages deployment actions.

Do not hard-code secrets.

---

# 30. GitHub Pages Configuration

Prepare the site for:

```text
blog.growstack.tech
```

Document the GitHub Pages configuration.

Document the DNS configuration required for the custom subdomain.

Do not claim the domain is configured unless it has actually been configured.

The repository should include instructions explaining the setup.

---

# 31. DNS

The README should explain that the DNS provider needs a record for:

```text
blog.growstack.tech
```

pointing to the appropriate GitHub Pages destination.

Explain that the exact GitHub Pages target should be taken from the repository's GitHub Pages settings/current GitHub documentation rather than hard-coded blindly.

Also explain HTTPS/custom-domain verification.

---

# 32. README

Create a comprehensive but concise README.

Include:

## Project

What this repository is.

## Tech Stack

Hugo + Markdown + GitHub + GitHub Actions + GitHub Pages.

## Local Development

Example:

```bash
hugo server
```

## Create Article

Example:

```bash
hugo new content/blog/my-new-article/index.md
```

Use the correct command based on the final project structure.

## Production Build

```bash
hugo
```

## Deployment

Explain GitHub Actions + GitHub Pages.

## Custom Domain

Explain `blog.growstack.tech`.

## Content Workflow

```text
Write Markdown
      ↓
Commit
      ↓
Push to GitHub
      ↓
GitHub Actions
      ↓
Hugo build
      ↓
GitHub Pages
      ↓
blog.growstack.tech
```

## Configuration

Explain where to change:

- Author
- Social profiles
- Business URL
- CTA URL
- Analytics
- Site metadata

---

# 33. Git Hygiene

Create an appropriate `.gitignore`.

Do not commit:

- Hugo build output where unnecessary
- OS files
- IDE files
- Temporary files
- Secrets
- Environment credentials

---

# 34. Content Quality

Articles must be useful even without the business CTA.

Do not write:

- Keyword-stuffed articles
- Generic AI filler
- Repetitive introductions
- Fake personal stories
- Fake case studies
- Fake statistics
- Fake client experiences
- Fake performance numbers

Prefer practical engineering reasoning.

Where claims depend on external facts, include appropriate references/citations in the article when relevant.

---

# 35. Conversion Philosophy

The blog should follow this funnel:

```text
Search / Referral
       ↓
Useful technical article
       ↓
Reader trusts engineering expertise
       ↓
Relevant service CTA
       ↓
growstack.tech
       ↓
Portfolio / Services
       ↓
Contact
       ↓
Potential client
```

The blog is therefore both:

**Content platform + trust-building sales funnel.**

Do not make the website feel like an advertisement.

---

# 36. Existing Website Integration

The blog must link to the existing website.

Use:

```text
https://growstack.tech
```

as the main business destination.

Do NOT assume paths such as:

```text
/services
/contact
/work
```

exist on the current site unless they are verified.

If the existing site's exact paths are unknown, use the homepage URL and make deeper links configurable.

---

# 37. Future Compatibility

The blog should be easy to expand later with:

- More articles
- Case studies
- Newsletter
- Search
- Author pages
- Series
- Reading lists
- Lead magnets
- Technical resources

Do not implement these features now unless necessary.

Build the foundation correctly.

---

# 38. Final Validation

Before declaring the project complete:

### Hugo

- Build succeeds
- No template errors
- No broken content

### Navigation

- All internal links work
- GrowStack external links work
- Mobile navigation works

### SEO

- Titles exist
- Descriptions exist
- Canonicals are correct
- Sitemap works
- robots.txt works
- RSS works
- Article structured data exists

### Accessibility

- Semantic HTML
- Keyboard navigation
- Visible focus
- Proper headings
- Image alt text
- Accessible controls

### Performance

- Minimal JS
- Optimized CSS
- Optimized images
- No unnecessary external requests

### Responsive

Test:

- Desktop
- Tablet
- Mobile

### GitHub Pages

Verify the generated project is compatible with GitHub Pages deployment.

---

# 39. IMPORTANT — Don't Stop at Scaffolding

Do not simply create:

```text
hugo new site
```

and provide a generic theme.

Build the actual GrowStack blog experience.

Implement:

- Complete layouts
- Navigation
- Blog homepage
- Article pages
- Categories
- Tags
- About page
- CTA
- Footer
- SEO
- RSS
- Sitemap
- Robots
- Responsive design
- Dark mode
- GitHub Actions
- Documentation
- Initial articles

The final result should be something that can realistically be deployed as:

`https://blog.growstack.tech`

---

# 40. Final Report

After implementation, report:

1. Repository structure
2. Major files created
3. Hugo configuration
4. Theme/design approach
5. Blog/content structure
6. SEO implementation
7. GitHub Actions implementation
8. GitHub Pages setup
9. DNS setup required
10. Placeholder values that need to be replaced
11. How to create the next article
12. How to run locally
13. Any remaining TODOs

Again:

**Do not modify or overwrite the existing `growstack.tech` website.**

The only deliverable in this task is the independent:

**`blog.growstack.tech` Hugo blog.**