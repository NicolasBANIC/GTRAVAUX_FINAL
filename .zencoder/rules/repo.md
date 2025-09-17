---
description: Repository Information Overview
alwaysApply: true
---

# G.TRAVAUX Information

## Summary
G.TRAVAUX is a fictional renovation company website built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. The site showcases renovation services, project galleries, company information, and contact forms.

## Structure
- `app/` - Contains pages and components for different sections of the site
- `app/components/` - Reusable UI components (Header, Footer, forms, etc.)
- `app/services/` - Subdirectories for each service with dedicated content
- `public/images/` - Placeholder images for the website
- `.next/` - Next.js build output directory

## Language & Runtime
**Language**: TypeScript
**Version**: ES2020 target (as specified in tsconfig.json)
**Build System**: Next.js
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- next (latest) - React framework
- react (latest) - UI library
- react-dom (latest) - React DOM renderer
- framer-motion (latest) - Animation library
- react-icons (latest) - Icon library

**Development Dependencies**:
- typescript (latest) - TypeScript compiler
- tailwindcss (^3.4.14) - Utility-first CSS framework
- postcss (^8.5.6) - CSS transformation tool
- autoprefixer (^10.4.21) - PostCSS plugin
- @types/node (24.5.0) - Node.js type definitions
- @types/react (19.1.13) - React type definitions

## Build & Installation
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Project Features
- **App Router**: Pages defined in the `app/` directory
- **Custom Tailwind Palette**: Company-specific colors defined in `tailwind.config.js`
- **Animations**: Framer Motion for transitions and scroll effects
- **Responsive Design**: Adaptive layouts for all device sizes
- **SEO Optimized**: Meta tags and semantic structure
- **Complete Pages**: Home, Services, Portfolio, About, and Contact pages

## Deployment
The project is configured for deployment on Vercel, with automatic Next.js detection. The `next.config.js` includes configuration for image domains and output file tracing.

## Requirements
- Node.js >= 16
- npm