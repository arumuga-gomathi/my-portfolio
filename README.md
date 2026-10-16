# Arumuga Gomathi R — Portfolio

Professional landing page / portfolio for **Arumuga Gomathi R, AWS Certified Software Engineer** (Tenkasi / Chennai, India).

**Stack:** React 19 + TypeScript + Vite 6 + Tailwind CSS v4 + shadcn-style UI + Framer Motion + lucide-react. Light/dark theme toggle with localStorage persistence.

## Develop

```powershell
npm install
npm run dev      # local dev server
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## Deploy (GitHub Pages, auto)

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and deploys `dist/` via GitHub Pages (Actions source).

First-time repo setup:

1. Create a **public** repo (e.g. `portfolio`) under your GitHub account.
2. In repo **Settings → Pages**, set **Source → GitHub Actions**.
3. Locally:
   ```powershell
   git remote add origin https://github.com/<you>/<repo>.git
   git branch -M main
   git push -u origin main
   ```

Live URL will be `https://<you>.github.io/<repo>/` (or `https://<you>.github.io/` for a `<you>.github.io` repo).

## Structure

- `src/lib/data.ts` — all resume content (profile, skills, experience, projects, certs)
- `src/components/` — Navbar (theme toggle), Hero, About/Skills, Experience, Projects, Certifications, Contact, Footer
- `src/components/ui/` — shadcn-style Button, Badge, Card
- `public/Arumuga_Gomathi_Master_Resume.docx` — downloadable resume
