# Cling Info Tech - Homepage Redesign

A complete redesign of the Cling Info Tech homepage, built for the 2026 digital landscape. The design focuses on communicating technology expertise, a strong portfolio, and professional credibility through a modern, premium, and responsive user interface.

## 🚀 Features

- **Multi-Page Architecture**: Implemented full client-side routing via React Router DOM (`/services`, `/solutions`, `/portfolio`, `/industries`, `/about`, `/contact`).
- **Component-Based Architecture**: Built with React and Vite for optimal developer experience and performance.
- **Premium Design System**: Utilizes Tailwind CSS for a sophisticated technology color palette, consistent typography, and fully responsive layouts.
- **Micro-Interactions & Animations**: Integrated with Framer Motion for subtle, professional animations including hover states, counter animations, and fade-ins, respecting `prefers-reduced-motion` settings.
- **Verified Data Layer**: All statistics, leadership, offices, and portfolio projects are strictly based on factual data extracted from the existing website.
- **Fully Responsive**: Flawless experience from mobile (320px) up to ultra-wide desktop displays (1920px) with custom mobile navigation drawer.
- **Accessible & SEO Friendly**: Semantic HTML structure and strong contrast to ensure usability and indexability.

## 🛠 Tech Stack

- **React 18**
- **Vite**
- **React Router DOM 6**
- **Tailwind CSS 3**
- **Framer Motion**
- **Lucide React (Icons)**

## 📦 Installation & Setup

1. **Install Dependencies**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173/`.

3. **Production Build**
   To create an optimized production build:
   ```bash
   npm run build
   ```

## 🧠 Design & QA Considerations

- **Visual Hierarchy**: Carefully crafted to guide the user naturally from the hero section down to the final contact CTA.
- **Color Consistency**: The application uses CSS variables defined in `index.css` (`--primary`, `--secondary`, `--accent`, etc.) to maintain a strict, professional technology aesthetic without excessive gradients.
- **Performance**: Dependencies are kept minimal. Only Lucide React and Framer Motion are added to the core React bundle. Images and heavy assets should be optimized before final deployment.
- **Testimonial Section**: Omitted due to the strict requirement of not creating fake testimonials if reliable verified text wasn't found in the initial cache.

*Developed as part of a Senior Frontend Engineer assignment.*
