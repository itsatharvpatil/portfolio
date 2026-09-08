# Atharv Patil — Portfolio

A static, responsive personal portfolio for **Atharv Patil**, M.Sc. Data Science student at TU Braunschweig.

The portfolio is intentionally built as a lightweight, dependency-free site that can be hosted directly with GitHub Pages.

## Language & appearance

- **German is the default language.** The navigation includes a German/English language switch.
- **Dark mode is the default theme.** A light/dark theme switch is available and the selected theme is persisted locally.
- The selected language is also persisted locally in the browser.

## Content

The portfolio presents:

- Professional experience across industrial AI, biomedical signal processing and IT systems
- Selected projects in computer vision, machine learning, NLP, data engineering and time series
- Skills and technologies
- Education, academic highlights and certifications
- Professional references
- Contact links and CV access

## Features

- Responsive layout
- German / English language switching
- Dark / light theme switching
- Scroll progress indicator
- Active-section navigation
- Mobile navigation
- Project category filtering
- Skill-to-work highlighting
- Accessible focus states
- Reduced-motion support
- No external JavaScript framework or runtime dependency

## Repository structure

```text
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── favicon.svg
│   └── Atharv_Patil_CV.pdf
├── LICENSE
├── COPYRIGHT.md
└── README.md
```

## Run locally

Open `index.html` directly in a browser or serve the folder with a simple static HTTP server.

Example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Select the branch containing the portfolio and the repository root as the publishing source.
4. Save and wait for GitHub Pages to deploy.

The repository contains `.nojekyll` so the static files can be served without Jekyll processing.

## Updating the portfolio

Most content is contained in `index.html`. Styling is in `styles.css`; interaction, language switching and theme persistence are implemented in `script.js`.

The default language and theme are:

```text
Language: German
Theme: Dark
```

Both choices can be changed by the visitor and are stored in browser local storage.

## Technology

HTML5 · CSS3 · JavaScript · SVG

The site uses browser-native APIs for intersection observers, local storage, responsive layout and reduced-motion handling.

## License

The source code is licensed under the MIT License. See `LICENSE`.

The portfolio's personal content, CV, references, identity-related material and third-party assets are not automatically licensed under MIT. See `COPYRIGHT.md`.

## Contact

**Atharv Patil**  
M.Sc. Data Science · TU Braunschweig  
Germany

Email: `patilatharv27@gmail.com`  
LinkedIn: `https://www.linkedin.com/in/patilatharv/`  
GitHub: `https://github.com/itsatharvpatil/`
