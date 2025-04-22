# Mini Design Doc – Personal Portfolio

**[Live Website - ericpolanski.com](ericpolanski.com)**

## Overview / Background

This personal portfolio project gave me the opportunity to reflect on how I want to present myself online. 
I asked: *What do I want in a website? How do I want others to experience it?* 
These questions became the foundation of my design and development approach.

### Core goals:
- Showcase my frontend development skills  
- Share my academic and professional story  
- Highlight projects and resume  
- Provide a call-to-action (e.g., contact form)  
- Deploy a live, production-ready site  

### Pages:
- **Home** – Clean intro and value proposition  
- **About Me** – Personal and professional background  
- **Projects** – Visual display of work  
- **Resume** – Downloadable/viewable PDF  
- **Contact** – Easy way to reach me  

---

## Technical Problem Statement

I began with the provided basic Next.js template and minimal experience with React, Next.js, JavaScript, and Tailwind CSS. 
So my objective was to learn and apply these technologies in a practical context.

### Key features:
- Shared layout components (Header, Footer, Background)
- A visually engaging homepage
- Clear, organized content per section
- A hosted, accessible domain: **ericpolanski.com**
- Automated deployment pipeline with Cloudflare

---

## Design Approach

I approached the build iteratively—focusing first on structure, then gradually improving aesthetics and functionality.

### Development Strategy:
1. **Chunked development:**  
   Started with the `Header` for navigation and created placeholder routes for all major pages. Built out individual pages one at a time, revisiting previous work to refine UI/UX.

2. **Component organization:**  
   Initially, all code lived in a single file within the `organisms` directory.
   Over time, I refactored repetitive sections into reusable components—first moving large pieces into `molecules`, then simplifying repeated patterns into `atoms`.
   I still have more work to do in this department though :)

4. **State management:**  
   I opted not to use dependency injection since prop drilling was shallow (usually no more than two levels). Local state within components was sufficient for my needs.

5. **Design patterns:**  
   The component-based architecture naturally followed the module design pattern.
   I also used composition patterns when combining smaller UI elements into larger, reusable structures.

7. **Rendering strategy:**  
   I used a hybrid approach, mostly SSR since it's the default for Next.js, but some CSR was used.

---

## Challenges & Solutions

- **Layout and alignment issues:**  
  One of the most annoying issues for me was debugging with Tailwind.
  Many of my components wouldn't align with one another, and so to debug this I researched, attended office hours, and, when stuck, leaned on Copilot for guidance.

- **Theme Handling:**
  Another big issue was correctly configuring the theme when it was in dark & light mode.
  I didn't realize how many considersations had to be made to make this seemingly simple feature setup correctly.

- **Time constraints & AI Usage:**  
  Early development was fully manual. But as the deadline quickly approached, I introduced **Copilot** and **OpenAI Codex** to help with code suggestions and refactors.
  I further used **ChatGPT** to help polish the wording in this README.

---

## Deployment & Hosting

To further legitamize this project, I purchased the [ericpolanski.com](ericpolanski.com) domain and hosted the site through **Cloudflare Pages**. 
I also set up **automatic deployments** via Git pushes to streamline updates.

---

## Reflection

> “The journey, not the destination, matters…” – T.S. Eliot

This project isn’t finished, but thus far, it’s been a rewarding and creative experience. 
I still a ton of features I want to add such as, more user interaction, better security implementations, etc. 
Addititonally I plan to implement the feedback you guys provide, but I’m proud of the progress and excited about continuing the journey!

