# RootCraft Static V3

A fully static, serverless multilingual learning website.

## Included

- Kannada learning
- English learning
- Hindi learning
- Reusable lesson engine
- Picture quizzes
- Memory game
- Stories in all three languages
- Browser voice support
- Per-language progress tracking
- Stars and rewards
- Dark mode
- Search
- PWA/offline support
- Mobile responsive UI

## No server required

Open `index.html` directly, or deploy to GitHub Pages.

## Push to GitHub

```bash
git add .
git commit -m "Add RootCraft multilingual V3"
git push origin main
```

Then enable GitHub Pages:

`Settings → Pages → Deploy from a branch → main → /(root)`


## V4 Fix
- Fixed Kannada/Hindi language mixing.
- Added Kannada and Devanagari font support.
- Removed stale service-worker caching.


## V6 Stable Fix

- Rebuilt the speech functions cleanly.
- Removed the JavaScript syntax error that stopped the whole website.
- Kannada, English and Hindi learning continue to work.
- Story Read Aloud works when the matching browser voice is installed.
- Removed service-worker caching temporarily to avoid stale broken files.
- JavaScript syntax was validated before packaging.
