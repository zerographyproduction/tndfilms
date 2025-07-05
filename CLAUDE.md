# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TND Films is a Next.js-based video production company website built with React 19, using Tailwind CSS for styling and Framer Motion for animations. The site showcases the company's services including documentaries, short films, music videos, brand videos, corporate videos, and commercials.

## Development Commands

- `npm run dev` - Start development server with Turbopack (opens at http://localhost:3000)
- `npm run build` - Build production version
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint code quality checks

## Architecture Overview

### App Router Structure
- Uses Next.js 15 App Router with `src/app/` directory structure
- Main layout in `src/app/layout.js` with Inter font and global metadata
- Home page (`src/app/page.js`) is a single-page application with component sections
- Additional pages use separate route directories (`about/`, `portfolio/`)

### Component Organization
All reusable components are in `src/app/components/`:
- `Hero.js` - Main hero section with auto-advancing slides and animations
- `Navbar.js` - Responsive navigation with scroll effects and route-aware active states
- `About.js`, `Services.js`, `Team.js`, `Portfolio.js`, `Contact.js` - Section components
- `Footer.js` - Site footer
- Component variants like `PortfolioDetailed.js` and `TeamDetailed.js` for enhanced pages

### Navigation Logic
The Navbar component (`src/app/components/Navbar.js`) handles two navigation modes:
- **Home page**: Uses hash-based anchor navigation (`#home`, `#about`, etc.) with smooth scrolling
- **Other pages**: Uses regular Next.js routing (`/about`, `/portfolio`, etc.)

Navigation items and active states are determined by the current pathname using `usePathname()`.

### Styling System
- **Tailwind CSS 4.0** with custom color palette in `tailwind.config.js`:
  - `midnight-blue`: #1C2526
  - `slate-gray`: #708090  
  - `silver`: #C0C0C0
  - `soft-white`: #F5F5F5
- **Brand colors**: Red (#EF4444) for accent, grayscale for primary content
- **Responsive design**: Mobile-first approach with `md:` and `lg:` breakpoints

### Animation Framework
- **Framer Motion** for page transitions, scroll animations, and interactive elements
- Hero section features auto-advancing slides with AnimatePresence
- Navbar has scroll-based backdrop blur and shadow effects
- Hover animations and micro-interactions throughout

### Key Dependencies
- **Next.js 15.3.3** - React framework with App Router
- **React 19** - Latest React version
- **Framer Motion 12.18.1** - Animation library
- **Lucide React 0.515.0** - Icon library
- **Tailwind CSS 4** - Utility-first CSS framework

## Development Notes

### Client Components
Most interactive components use `'use client'` directive for:
- State management with hooks (useState, useEffect)
- Framer Motion animations
- Event handlers and browser APIs

### SEO Implementation
Pages include comprehensive metadata objects with:
- Title and description optimization
- Keywords for search engines  
- Open Graph tags for social sharing
- Structured data for video production industry

### Performance Optimizations
- Next.js font optimization with `next/font/google`
- Turbopack for faster development builds
- Backdrop blur effects for modern browser performance
- Optimized animations with proper cleanup