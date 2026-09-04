# Md. Sarman Rana — Professional Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

A modern, production-ready, highly responsive personal portfolio website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. 

Crafted for **Md. Sarman Rana** — B.Sc. in Computer Science and Engineering student, Class Representative, Event Coordinator for CEC Club, and full-stack software developer & UI/UX designer.

---

## ✨ Features

* **Modern Design:** Built with a clean aesthetic, subtle gradients, dark/light mode toggle, and responsive glassmorphism navigation.
* **Interactive UI:** Smooth page transitions and scroll animations powered by Framer Motion.
* **Dynamic Content Structure:** All personal bio, technical skills, featured projects, experience timeline, and achievements are centrally maintained in `lib/portfolio-data.ts` for easy updates.
* **Performance Optimized:** Built with Next.js App Router for high Lighthouse scores and fast asset loading.
* **Fully Responsive:** Tested across mobile, tablet, laptop, and widescreen displays.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (React Framework)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
sarman-rana-portfolio/
├── app/
│   ├── globals.css          # Global Tailwind directives & custom scrollbars
│   ├── layout.tsx           # Root layout with metadata & font configuration
│   └── page.tsx             # Single-page portfolio assembly
├── components/
│   ├── About.tsx            # Background and academic bio section
│   ├── Achievements.tsx     # Fellowships, programs, and milestones
│   ├── Contact.tsx          # Direct contact info and interactive form
│   ├── Experience.tsx       # Leadership roles and academic timeline
│   ├── Footer.tsx           # Minimal polished footer
│   ├── Hero.tsx             # Main landing section with quick stats & CTAs
│   ├── Navbar.tsx           # Responsive navigation bar with theme toggle
│   ├── Projects.tsx         # Featured commercial and real-world projects
│   └── Skills.tsx           # Categorized programming & tech stack badges
├── lib/
│   └── portfolio-data.ts    # Centralized data source for content management
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
