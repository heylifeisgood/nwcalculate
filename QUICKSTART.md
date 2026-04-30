# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies (1 minute)

```bash
cd "C:\Users\meng\Documents\gpt\saas calculator"
npm install
```

### Step 2: Run Development Server (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Test the Calculators (2 minutes)

#### Crafting Calculator
1. Click "Crafting Calculator" tab
2. Add materials (e.g., Iron Ore: 100 @ 0.50)
3. Set crafting fee (e.g., 5.00)
4. Set selling price (e.g., 75.00)
5. See your profit!

#### Trading Calculator
1. Click "Trading Calculator" tab
2. Enter buy price (e.g., 10.00)
3. Enter sell price (e.g., 15.00)
4. Set quantity (e.g., 10)
5. See your ROI!

#### Gear Score Calculator
1. Click "Gear Score Calculator" tab
2. Enter gear scores for each slot
3. See your average gear score and tier

### Step 4: Build for Production (1 minute)

```bash
npm run build
```

### Step 5: Deploy to Vercel (1 minute)

**Option A: Via GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Then go to [vercel.com](https://vercel.com) and import your repository.

**Option B: Via Vercel CLI**
```bash
npm i -g vercel
vercel
```

## 🎯 What You Get

✅ **3 Powerful Calculators**
- Crafting Cost Calculator
- Trading Profit Calculator
- Gear Score Tracker

✅ **Production Ready**
- Optimized build (83.5 kB)
- SEO configured
- Mobile responsive
- Fast loading

✅ **Easy to Deploy**
- One-click Vercel deployment
- Free hosting
- Automatic HTTPS
- Global CDN

## 📚 Need More Help?

- **Features**: See [DOCUMENTATION.md](DOCUMENTATION.md)
- **Deployment**: See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **Technical Details**: See [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

## 🐛 Troubleshooting

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**TypeScript errors?**
```bash
npm run build
```
This will show all errors clearly.

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  'nw-primary': '#1a1a1a',    // Your color
  'nw-secondary': '#2d2d2d',  // Your color
  'nw-accent': '#d4af37',     // Your color
  'nw-text': '#e5e5e5',       // Your color
}
```

### Add New Calculator
1. Create `components/YourCalculator.tsx`
2. Import in `app/page.tsx`
3. Add navigation button
4. Done!

## 📱 Mobile Testing

Test on mobile:
1. Run `npm run dev`
2. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. Open `http://YOUR_IP:3000` on your phone

## 🚀 Performance Tips

Already optimized:
- ✅ Static generation
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification
- ✅ Compression

## 🔒 Security

No security concerns:
- No user data stored
- No authentication needed
- No external API calls
- No cookies or tracking

## 📊 Analytics (Optional)

Add Vercel Analytics:
1. Deploy to Vercel
2. Go to project settings
3. Enable Analytics
4. Free for hobby projects

## 🌐 Custom Domain (Optional)

1. Deploy to Vercel
2. Go to Settings → Domains
3. Add your domain
4. Update DNS records
5. Wait 5-60 minutes

## ✨ You're Ready!

Your New World Calculator is ready to use and deploy. Happy calculating! 🎮

---

**Need help?** Check the other documentation files or open an issue on GitHub.
