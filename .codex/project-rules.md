# Project Rules

## Tech Stack

- React 19
- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- Framer Motion

---

## Code Style

- TypeScript strict only
- Never use `any`
- Functional Components only
- Prefer Server Components
- Client Components only when necessary
- Reusable Components
- Mobile First
- Accessibility First

---

## Folder Structure

features/

components/

hooks/

services/

shared/

lib/

config/

types/

---

## Naming

Components

PascalCase

Example:

HeroSection.tsx

Hooks

camelCase

Example:

useTheme.ts

Constants

UPPER_CASE

Types

PascalCase

Interfaces

Prefix with I only if necessary

---

## Styling

Tailwind only

No inline style

Use clsx / cn()

---

## Performance

Dynamic imports

Lazy loading

Image optimization

Memoization only when useful

---

## Accessibility

ARIA labels

Keyboard navigation

Focus visible

Semantic HTML

---

## SEO

Metadata

OpenGraph

Twitter Card

Schema.org

Canonical

Sitemap

---

## Git

Conventional Commits

feat:

fix:

refactor:

perf:

docs:

test:

style:

---

## Before generating code

Always:

1. Analyze the task
2. Suggest reusable solution
3. Keep code clean
4. Avoid duplication
5. Review generated code