# NovaKids React V1

Serverless React + TypeScript learning platform.

## Features
- Kannada, Hindi and English
- Alphabet, numbers, animals and fruits
- Mobile-friendly navigation and automatic lesson scrolling
- Working stories with Read Aloud
- Working Memory Match and Picture Quiz
- GitHub Actions deployment to GitHub Pages

## Local run
```bash
npm install
npm run dev
```

## Push directly to GitHub
```bash
git add .
git commit -m "Add NovaKids React V1"
git pull --rebase origin main
git push origin main
```

## Enable GitHub Pages
Repository → Settings → Pages → Build and deployment → GitHub Actions.

For a custom domain such as novakids.in, keep `base: '/'` in vite.config.ts.
