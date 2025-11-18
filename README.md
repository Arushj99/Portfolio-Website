# Portfolio Website

React-powered single-page site modeled after [kennethsunjaya.com](https://kennethsunjaya.com/#experience) and filled with information from Arush Jain’s résumé.

## Getting started

Because the page pulls React/ReactDOM/Babel from CDNs, there is no build step—open `index.html` directly or launch a lightweight server for clean URLs:

```bash
python3 -m http.server 4173
```

Visit `http://localhost:4173` (or whichever port you choose).

## Project structure

- `index.html` – HTML shell that loads React from unpkg and mounts the app.
- `app.jsx` – React components + resume data (hero, experience, projects, skills, contact).
- `styles.css` – Global styles mirroring the referenced template.
- `headshot.jpg` – Local portrait referenced in the sidebar.

## Customization checklist

- Replace the placeholder résumé link (`resumeData.resume`) with a hosted PDF if you want a download button.
- Update copy, data arrays, and CTA destinations inside `app.jsx`.
- Swap `headshot.jpg` for a new image (keep the same filename or update the import).
- If you prefer bundling, you can migrate `app.jsx` into a Vite/CRA project without changing the markup.
- Add analytics or other embeds just before the closing `</body>` tag once you have a host picked out.
