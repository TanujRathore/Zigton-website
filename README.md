# Zigton Website
React + Vite + Tailwind CSS + React Router + Lucide. Static frontend, no backend.

## Run
    npm install
    cp .env.example .env     # then edit values
    npm run dev              # development
    npm run build            # production build to dist/
    npm run preview          # preview the build

## Edit content
All company copy lives in `src/data/site.js` (services, FAQ, process, values, contact details). Legal text is in `src/pages/Legal.jsx` and is template text: get it legally reviewed.

## Contact form
- Set `VITE_FORM_ENDPOINT` to a form service URL (e.g. Formspree) that accepts JSON POSTs. Success is shown only when the service returns OK.
- Without an endpoint the form opens a drafted `mailto:` to `VITE_CONTACT_EMAIL`. It never claims an email was sent.
- Only public values belong in `VITE_*` variables. Never put private API keys in this frontend; use a future backend for those.

## Before launch
Replace `your-domain.com` in `public/robots.txt` and `public/sitemap.xml`, set `VITE_SITE_URL`, add social URLs, add an `og:image`, and update the Terms jurisdiction.

## Deploy
Upload `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, S3 + CDN). Configure an SPA fallback so unknown paths serve `index.html` (Netlify: `/* /index.html 200` in `public/_redirects`; Vercel: rewrite to `/index.html`).

## Future growth
Add API calls in a `src/services/` folder, auth via a context provider, and AI endpoints behind a server.
