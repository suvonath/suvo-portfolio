# Suvo Dev Nath — Personal Portfolio Website

A modern, production-quality personal portfolio website engineered for **Suvo Dev Nath**, a Web Developer from Sylhet, Bangladesh.

Built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

---

## 👨‍💻 Professional Identity & Source of Truth

- **Full Name**: Suvo Dev Nath
- **Designation**: Web Developer
- **Location**: Sylhet, Bangladesh
- **Email**: [shubho.debnath.dev@gmail.com](mailto:shubho.debnath.dev@gmail.com)
- **Phone**: [+880 1736-449874](tel:+8801736449874)
- **LinkedIn**: [https://www.linkedin.com/in/shubho-dev/](https://www.linkedin.com/in/shubho-dev/)
- **GitHub**: [https://github.com/Shubho-Debnath](https://github.com/Shubho-Debnath)
- **Education**: B.Sc. in Computer Science and Engineering (In progress), Leading University, Sylhet

---

## 🚀 Key Features

1. **Modern Editorial Design System**:
   - Palette: Deep midnight navy (`#0B0F19`), secondary surface (`#111827`), elevated card surface (`#161F30`), vivid electric blue (`#60A5FA`), and restrained violet (`#A78BFA`).
   - Dark-first aesthetic with strict WCAG contrast compliance and subtle micro-interactions.
2. **Hero Section**:
   - Dynamic accent typography highlighting *"digital experiences"*.
   - Eyebrow badge with live location and developer status.
   - 3 prominent CTAs: "Explore My Work", "Download Resume", and "Get In Touch".
   - Bespoke professional portrait frame with structured asset replacement instructions.
3. **Dedicated Dynamic Project Detail Routes (`/projects/[slug]`)**:
   - `/projects/hypercampus` (Learning Management System)
   - `/projects/university-project-management-system` (Academic Project)
   - `/projects/service-hiring-web-app` (Service Hiring Platform)
   - `/projects/ecommerce-website` (E-Commerce Storefront)
   - Deep dive analysis for each project covering: Project Overview, Purpose, Key Features, Development Approach, Technical Challenges & Considerations, and Potential Future Improvements.
4. **Resume Functionality**:
   - Working direct PDF download wired to `/resume/Suvo-Dev-Nath-Resume.pdf`.
   - Authentic, pre-compiled PDF generated from verified CV data.
5. **Categorized Skills**:
   - Grouped into Frontend, Backend, Databases, APIs & Testing, Developer Tools, and Additional Knowledge.
   - Filter pills for quick scanning. Strictly avoids arbitrary percentage bars.
6. **Education Timeline**:
   - Leading University (B.Sc. in CSE, ongoing degree clearly specified).
   - Shahjalal City College (HSC Science, GPA 4.00 / 5.00).
   - Rangpani Captain Rashid High School (SSC Science, GPA 4.39 / 5.00).
7. **Contact & Communication**:
   - Direct clickable links for Email (`mailto:`), Phone (`tel:`), WhatsApp, LinkedIn, and GitHub.
   - Interactive message composer with client-side validation that generates authentic drafts into the user's default email client.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router, Server Components & Static Site Generation)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React & custom SVG vector brand components
- **Font**: Geist Sans & Geist Mono (via `next/font`)

---

## 📁 Project Architecture

```
suvo-portfolio/
├── public/
│   ├── images/
│   │   └── portrait-placeholder.svg  # Intentional placeholder (Replace with portrait.jpg)
│   └── resume/
│       └── Suvo-Dev-Nath-Resume.pdf  # Valid, authentic PDF download
├── src/
│   ├── app/
│   │   ├── globals.css               # Design tokens, CSS theme, animations
│   │   ├── layout.tsx                # Root layout with SEO, OpenGraph, Skip-to-content
│   │   ├── page.tsx                  # Home page layout
│   │   ├── not-found.tsx             # Global 404 page
│   │   └── projects/
│   │       └── [slug]/
│   │           ├── page.tsx          # Dynamic route with generateStaticParams & metadata
│   │           └── not-found.tsx     # Project specific 404 handler
│   ├── components/
│   │   ├── icons/
│   │   │   └── BrandIcons.tsx        # Resilient GitHub & LinkedIn SVG icons
│   │   ├── About.tsx                 # Programming journey, philosophies & "What I enjoy"
│   │   ├── Contact.tsx               # Direct channels, phone, WhatsApp & email composer
│   │   ├── Education.tsx             # Academic timeline (Leading University B.Sc., HSC, SSC)
│   │   ├── Footer.tsx                # Professional footer with back-to-top & copyright
│   │   ├── Hero.tsx                  # Opening headline, CTAs & portrait card
│   │   ├── MobileMenu.tsx            # Accessible mobile drawer with focus trap & ESC handler
│   │   ├── Navbar.tsx                # Sticky backdrop navigation with active scroll spy
│   │   ├── ProjectCard.tsx           # Individual project card with hover states
│   │   ├── ProjectDetails.tsx        # Reusable deep-dive project case study template
│   │   ├── ProjectPreview.tsx        # Bespoke interactive preview components for 4 projects
│   │   ├── Projects.tsx              # Grid showcase of all projects
│   │   ├── ResumeButton.tsx          # Reusable download button
│   │   └── SocialLinks.tsx           # Social media link pills
│   ├── data/
│   │   └── portfolio-data.ts         # Centralized, strongly typed source of truth
│   └── types/
│       └── portfolio.ts              # TypeScript interfaces for projects, skills, education
└── README.md
```

---

## 💻 Getting Started Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Run linter**:
   ```bash
   npm run lint
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Start production server**:
   ```bash
   npm run start
   ```

---

## 📷 Customization: Adding Your Portrait & Custom Resume

1. **Photograph**:
   Place your actual portrait photo at `/public/images/portrait.jpg` (or `.png`). In `src/components/Hero.tsx`, change `/images/portrait-placeholder.svg` to `/images/portrait.jpg`.
2. **Resume PDF**:
   Place your official PDF document at `/public/resume/Suvo-Dev-Nath-Resume.pdf`. The download buttons are already wired to this exact path.

---

## 🚢 Deployment to Vercel

The portfolio is fully optimized for zero-configuration deployment on **Vercel**:

1. Push this project repository to your GitHub account: `https://github.com/Shubho-Debnath/portfolio`
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Leave build settings as default (`next build`).
5. Click **"Deploy"**. Your website will be live worldwide on a global edge CDN with automatic HTTPS!
