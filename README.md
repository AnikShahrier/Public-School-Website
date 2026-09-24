# Sabuj Kanan School And College — React Remake

React + Vite version of the static site remake (converted from the plain HTML/CSS/JS version).

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173

> No `npx create-react-app` needed — all config files are already in this folder.
> (Requires Node.js 18+. On Windows PowerShell, if scripts are blocked, run:
> `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, then retry.)

## Build for production

```bash
npm run build      # outputs static files to dist/
npm run preview    # preview the production build locally
```

Deploy `dist/` to GitHub Pages / Netlify / Cloudflare Pages. Routing uses the URL
hash (e.g. `#/about`), so no server-side rewrite rules are needed.

## Project structure

```
src/
  main.jsx            entry point
  App.jsx             router + layout
  index.css           all styles (converted from assets/css/style.css)
  data/notices.json   edit this to add/update notices — the site updates automatically
  components/
    Topbar.jsx  Header.jsx  Navbar.jsx  Footer.jsx  PageHero.jsx
    Hero.jsx (slider)  NoticeBoard.jsx  Counter.jsx (animated stats)  Zoomable.jsx
  pages/
    Home.jsx  About.jsx  Academic.jsx  Notices.jsx  Facilities.jsx
    Results.jsx  Admission.jsx  Gallery.jsx  Contact.jsx
public/
  assets/img/         placeholder SVG images (swap with real photos, same filenames)
  documents/          drop real PDFs here (routines, syllabus, prospectus, forms)
```

## Notes (same caveats as the static version)

- "Apply Online" links to a Google Form (keeps the site serverless).
- Login button, some names and fees are placeholders — fill in real data before publishing.
- All images are generated placeholders; replace with photos you have permission to use.
