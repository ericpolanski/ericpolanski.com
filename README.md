# ericpolanski.com

> Personal portfolio website for Eric Polanski — AI Engineer specializing in production AI systems, RAG pipelines, and data transformation.

[![Live Site](https://img.shields.io/badge/Live-ericpolanski.com-blue?style=flat-square)](https://ericpolanski.com)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2014-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Deployed on Cloudflare](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-orange?style=flat-square&logo=cloudflare)](https://pages.cloudflare.com/)

## 🎯 Purpose

This portfolio showcases my work as an AI Engineer, highlighting:

- **Professional Experience** — AI engineering roles at AbbVie and Paper Tube Co., with quantifiable impacts (90% data coverage, 40% latency reduction)
- **Technical Projects** — AI/ML applications including conversational AI, NLP pipelines, and automation systems
- **Education** — B.S. Computer Science with AI Concentration from Northwestern University (Dec 2025)
- **Skills** — Python, SQL, PyTorch, TensorFlow, LLMs, RAG pipelines, and full-stack development

## 🗂️ Site Structure

| Page                       | Description                                                                     |
| -------------------------- | ------------------------------------------------------------------------------- |
| **Home** (`/`)             | Hero section with professional summary, key achievements, and featured projects |
| **About** (`/about`)       | Personal journey into AI, education background, and interests                   |
| **Projects** (`/projects`) | Detailed project showcase organized by AI/ML and Web Development                |
| **Resume** (`/resume`)     | Interactive resume viewer with PDF download                                     |
| **Contact** (`/contact`)   | Contact form for inquiries and opportunities                                    |

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Edge Runtime)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- **Contact Form**: [FormSubmit](https://formsubmit.co/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ericpolanski/ericpolanski.com.git
cd ericpolanski.com

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start development server             |
| `npm run build`   | Build for production                 |
| `npm run start`   | Start production server              |
| `npm run lint`    | Run ESLint                           |
| `npm run preview` | Build and preview with Wrangler      |
| `npm run deploy`  | Build and deploy to Cloudflare Pages |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.js            # Home page
│   ├── about/             # About page
│   ├── projects/          # Projects showcase
│   ├── resume/            # Resume viewer
│   ├── contact/           # Contact form
│   ├── layout.js          # Root layout with Header/Footer
│   └── globals.css        # Global styles & CSS variables
├── components/
│   ├── atoms/             # Basic UI elements
│   ├── molecules/         # Composed components
│   └── organisms/         # Complex page sections
├── data/
│   └── resume.js          # Structured resume data
└── ...
```

## ✨ Features

- **🌓 Dark/Light Theme** — User-selectable theme with cookie persistence
- **📱 Fully Responsive** — Optimized for mobile, tablet, and desktop
- **♿ Accessible** — Skip links, semantic HTML, ARIA attributes
- **⚡ Edge Runtime** — Fast global performance via Cloudflare edge network
- **🎨 Modern Design** — Gradient accents, smooth animations, glassmorphism effects

## 📬 Contact

- **Email**: ericchrispolanski@gmail.com
- **Website**: [ericpolanski.com](https://ericpolanski.com)
- **GitHub**: [@ericpolanski](https://github.com/ericpolanski)

---

Built with ☕ and 🤖 by Eric Polanski
