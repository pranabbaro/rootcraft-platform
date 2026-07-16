# RootCraft Academy Platform

Serverless React + TypeScript learning platform for Indian languages.

## Run locally

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Copy **all files from this package directly into the repository root**.
2. Do not upload the ZIP file or place the project inside another folder.
3. In GitHub, open `Settings → Pages`.
4. Set **Source** to `GitHub Actions`.
5. Push to the `main` branch.

```bash
git add .
git commit -m "Deploy RootCraft Academy"
git pull --rebase origin main
git push origin main
```

The included workflow installs dependencies, builds the Vite application, uploads `dist`, and deploys it automatically.

## Required repository-root structure

```text
.github/
public/
src/
index.html
package.json
package-lock.json
tsconfig.json
vite.config.ts
README.md
```

Do not keep previous static-site folders, downloaded ZIP files, or nested project folders in the repository root.

## Custom domain

The package includes:

```text
public/CNAME
```

with:

```text
rootcraftacademy.in
```

The Vite base path is `/`, which is correct for a custom root domain.


## V3 Homepage redesign

- New premium Indian-language homepage.
- Colourful India-map hero visual with animated multilingual greetings.
- Removed the Trusted by Parents section.
- Expanded Indian culture introduction.
- Added cultural cards for dance, festivals, music, heritage and arts.
- Added Explore India and featured Kannada section.
- Added popular-language cards and visual learning journey.
- Existing lessons, stories, games and audio controls remain functional.
- Mobile responsive and GitHub Pages ready.


## Deployment correction included

This package includes the previously working deployment corrections:

- `tsconfig.app.json` explicitly loads `react` and `react-dom` types.
- GitHub Actions uses Node.js 20.
- The workflow removes the previous lock file before dependency installation.
- React TypeScript definitions are explicitly installed before the build.


## V8 Premium homepage

- Clean premium hero area.
- India map displayed without floating speech bubbles.
- Quick course buttons beneath the map.
- Why Learn Indian Languages section.
- Language catalogue, play modules and Indian culture section.
- Existing lessons, stories, games and speech functions retained.
- Correct TypeScript and GitHub Pages deployment configuration retained.


## V11 culture expansion

- Added detailed culture cards for festivals, art, dance, music, heritage and food.
- Added examples such as Bihu, Madhubani, Yakshagana, Hampi and Assamese cuisine.
- Added Explore India by State cards for Assam, Karnataka, Tamil Nadu and Punjab.
- Preserved the V10 mascot, animations, lesson preview, map cleanup and deployment fixes.


## V12 culture modules

- Culture buttons now open relevant in-page modules instead of jumping to unrelated sections.
- Added dedicated modules for festivals, art, dance, music, heritage and food.
- Added examples, culture vocabulary, audio and a quick activity.
- Preserved all V11 design and deployment fixes.


## V13 state-first discovery

- Replaced the language catalogue with a state-first exploration journey.
- Added correctly matched state and language pairs for Assam, Karnataka, Tamil Nadu, Punjab, West Bengal and Maharashtra.
- Preserved the approved India map image without changing or moving its embedded labels.
- Removed the duplicate state section.
- Kept direct access to Hindi and English.


## V14 unified language cards

- Hindi and English are now shown as full cards in the same grid.
- Removed the separate Hindi/English action bar.
- Hindi is presented as a North and Central India learning journey.
- English is presented as an across-India learning journey.


## V17 Why RootCraft and flag fix

- Replaced the large family section with a six-card Why RootCraft section.
- Added language, games, culture, stories, family-learning and safety benefits.
- Replaced Indian flag emojis with CSS-rendered flags so browsers do not display the letters IN.
- Preserved the About India section and all existing learning features.


## V18 interactive India-map homepage

- Rebuilt the homepage around the India explorer concept.
- Added a selectable state experience with matching state, language, festival, food, place and culture details.
- State selectors are kept outside the map to avoid inaccurate or misaligned map labels.
- Kannada starts the existing live course; other selected languages show Coming Soon.
- Added feature shortcuts for games, stories, culture, achievements, AI tutor and families.
- Preserved all existing learning, stories, games, culture modules, About India and deployment configuration.
