# Repository Rules

## Project Type
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with progressive strict mode
- **Styling**: Tailwind CSS
- **Testing Framework**: Playwright (E2E/integration tests)

## TypeScript Configuration
- Currently in **Phase 2+ Progressive Strict Mode**
- Active strict rules: `noImplicitAny`, `noImplicitReturns`, `noImplicitThis`, `alwaysStrict`, `noUnusedLocals`, `noUnusedParameters`, `strictNullChecks`
- Types centralized in `/types/` directory: `events.ts`, `forms.ts`, `layout.ts`, `gallery.ts`, `metadata.ts`, `structured-data.ts`
- Enhanced form components (ContactForm, CallbackForm) with proper typing and validation

## Code Standards
- Use functional components with proper TypeScript interfaces
- Implement proper error boundaries and loading states  
- Follow Next.js 14 App Router conventions
- Use server components by default, client components only when needed ('use client' directive)

## Testing Requirements
- **targetFramework**: Playwright
- E2E tests required for all user-facing functionality changes
- Tests located in `/tests/` directory
- Test critical user flows: contact forms, navigation, image galleries

## Architecture
- Components in `/app/components/` with TypeScript interfaces
- API routes in `/app/api/` following Next.js 14 patterns
- Centralized type definitions in `/types/` directory
- Structured data and SEO handled via dedicated components

## Development Workflow
1. Implement changes with proper TypeScript types
2. Test locally via `npm run dev`
3. Write E2E tests for user-facing changes (with user approval)
4. Run full test suite before deployment