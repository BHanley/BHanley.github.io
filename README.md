# personal-site

A minimal, fast personal website and portfolio built with Vite + React + TypeScript.

## Stack

- [Vite](https://vitejs.dev/) — build tool and dev server
- [React 18](https://react.dev/) — UI
- [React Router v6](https://reactrouter.com/) — client-side routing
- [TypeScript](https://www.typescriptlang.org/) — type safety
- CSS Modules + SCSS — scoped component styles

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type check
npm run typecheck

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Customising

All the content you'll want to change is in `src/data/`:

| File | What it controls |
|------|-----------------|
| `src/data/config.ts` | Your name, tagline, bio, social links, nav links |
| `src/data/projects.ts` | Projects list |
| `src/data/posts.ts` | Writing / blog post list |

The accent color and overall design tokens live in `src/styles/variables.scss`. Change `--color-accent` there to make the site your own.

## Structure

```
src/
├── data/           # Content and site config (edit these)
├── types/          # TypeScript interfaces
├── styles/         # Global styles, CSS variables, reset
├── components/
│   ├── Nav/        # Top navigation bar
│   ├── Footer/     # Site footer
│   ├── Layout/     # Page wrapper (nav + footer + content width)
│   └── Tag/        # Pill-style tag label
└── pages/
    ├── Home/       # Landing page with hero + featured content
    ├── About/      # Bio, experience, skills
    ├── Projects/   # Full project list
    └── Writing/    # Post/article list
```

## Deploying

This is a standard static Vite build. After `npm run build`, the `dist/` folder can be deployed to:

- [Vercel](https://vercel.com/) — `vercel deploy`
- [Netlify](https://netlify.com/) — drag-and-drop `dist/` or connect your repo
- [GitHub Pages](https://pages.github.com/) — push `dist/` to a `gh-pages` branch (or use the [gh-pages](https://www.npmjs.com/package/gh-pages) package)
- Any static host or CDN

For GitHub Pages with a custom domain, add a `CNAME` file to `public/` with your domain name.

For GitHub Pages without a custom domain (e.g. `yourname.github.io/repo-name`), set `base` in `vite.config.ts`:

```ts
export default defineConfig({
  base: "/repo-name/",
  // ...
});
```

## Writing posts

For now, posts are listed in `src/data/posts.ts`. You can link them to:
- External URLs (a Medium post, a dev.to article, etc.) — set `externalUrl`
- Internal routes (`/writing/slug`) — leave `externalUrl` unset

Adding a full MDX/markdown blog is straightforward if you need it later — [vite-plugin-mdx](https://github.com/brillout/vite-plugin-mdx) or [@mdx-js/rollup](https://mdxjs.com/packages/rollup/) both integrate cleanly with this setup.
