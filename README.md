# New World Calculator

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Next.js](https://img.shields.io/badge/Next.js-13.5.6-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)

A lightweight SaaS calculator web application for New World game players. Calculate crafting costs, trading profits, and gear scores with ease.

## 🚀 Quick Links

- [Quick Start Guide](QUICKSTART.md) - Get started in 5 minutes
- [Documentation](DOCUMENTATION.md) - Feature documentation
- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Deploy to Vercel
- [Project Summary](PROJECT_SUMMARY.md) - Technical details
- [Changelog](CHANGELOG.md) - Version history

## ✨ Features

- **Crafting Calculator**: Calculate material costs, crafting fees, and profit margins
- **Trading Calculator**: Analyze buy/sell prices with taxes and ROI
- **Gear Score Calculator**: Track your gear score across all equipment slots

## 📊 Performance

- **First Load JS**: 83.5 kB (excellent)
- **Build Time**: ~30-60 seconds
- **Lighthouse Score**: 95+ (expected)
- **Mobile Responsive**: ✅
- **SEO Optimized**: ✅

## 🛠 Tech Stack

- Next.js 13.5.6 (App Router)
- TypeScript 5.3.3
- Tailwind CSS 3.4.0
- React 18.2.0

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

This project is optimized for Vercel deployment:

### Method 1: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Method 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/new-world-calculator)

### Environment Variables

No environment variables are required for basic functionality. If you want to customize the site URL for SEO:

1. In Vercel Dashboard, go to your project settings
2. Add environment variable: `NEXT_PUBLIC_SITE_URL` with your domain
3. Redeploy the project

## License

MIT

## Disclaimer

This is a fan-made tool and is not affiliated with or endorsed by Amazon Games.
