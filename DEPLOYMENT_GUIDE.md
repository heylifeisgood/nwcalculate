# Deployment Guide - New World Calculator

## Prerequisites

- Git installed on your computer
- GitHub/GitLab/Bitbucket account
- Vercel account (free tier is sufficient)

## Step-by-Step Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

#### Step 1: Initialize Git Repository

```bash
cd "C:\Users\meng\Documents\gpt\saas calculator"
git init
git add .
git commit -m "Initial commit: New World Calculator"
```

#### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name it: `new-world-calculator`
4. Don't initialize with README (we already have one)
5. Click "Create repository"

#### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/new-world-calculator.git
git branch -M main
git push -u origin main
```

#### Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your `new-world-calculator` repository
5. Vercel will auto-detect Next.js settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. Click "Deploy"
7. Wait 1-2 minutes for deployment to complete
8. Your site is live! 🎉

### Option 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

#### Step 3: Deploy

```bash
cd "C:\Users\meng\Documents\gpt\saas calculator"
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? `new-world-calculator`
- In which directory is your code located? `./`
- Want to override the settings? **N**

#### Step 4: Deploy to Production

```bash
vercel --prod
```

### Option 3: Deploy via Vercel Git Integration

1. Push your code to any Git provider (GitHub, GitLab, Bitbucket)
2. In Vercel dashboard, click "Import Project"
3. Select your Git provider
4. Choose the repository
5. Click "Deploy"

## Post-Deployment Configuration

### Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-60 minutes)

### Environment Variables (Optional)

If you want to customize the site URL for SEO:

1. In Vercel dashboard, go to "Settings" → "Environment Variables"
2. Add variable:
   - Name: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://your-domain.vercel.app`
3. Click "Save"
4. Redeploy the project

### Analytics (Optional)

Vercel provides free analytics:

1. Go to "Analytics" tab in your project
2. Enable Vercel Analytics
3. Add the analytics script (Vercel will guide you)

## Updating Your Deployment

### Via Git Push

```bash
# Make your changes
git add .
git commit -m "Update: description of changes"
git push
```

Vercel will automatically deploy the new version.

### Via Vercel CLI

```bash
vercel --prod
```

## Troubleshooting

### Build Fails

**Error: Node.js version mismatch**
- Solution: Vercel uses Node.js 18.x by default. This project is compatible.

**Error: Module not found**
- Solution: Delete `node_modules` and `package-lock.json`, then run `npm install`

### Deployment Succeeds but Site Doesn't Load

**Check the deployment logs:**
1. Go to Vercel dashboard
2. Click on your project
3. Click on the failed deployment
4. Check "Build Logs" and "Function Logs"

**Common issues:**
- Missing environment variables
- Incorrect build settings
- TypeScript errors

### Site is Slow

**Optimization tips:**
1. Enable Vercel Edge Network (automatic)
2. Use Vercel Image Optimization for images
3. Enable compression (automatic in Vercel)
4. Check Vercel Analytics for performance insights

## Monitoring

### Vercel Dashboard

Monitor your deployment:
- Real-time logs
- Deployment history
- Performance metrics
- Error tracking

### Uptime Monitoring

Consider using:
- UptimeRobot (free)
- Pingdom
- StatusCake

## Rollback

If something goes wrong:

1. Go to Vercel dashboard
2. Click "Deployments"
3. Find a working deployment
4. Click "..." → "Promote to Production"

## Cost

**Vercel Free Tier includes:**
- Unlimited deployments
- 100 GB bandwidth per month
- Automatic HTTPS
- Global CDN
- Serverless functions

This project stays well within free tier limits.

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub Issues: Report bugs in your repository

## Security

**Best Practices:**
- Never commit `.env.local` files
- Use environment variables for sensitive data
- Keep dependencies updated: `npm audit fix`
- Enable Vercel's security headers (automatic)

## Performance

**Current Performance:**
- First Load JS: ~83.5 kB (excellent)
- Static generation: All pages pre-rendered
- Lighthouse Score: 95+ (expected)

**Optimization applied:**
- Tree shaking
- Code splitting
- Minification
- Compression

Your New World Calculator is production-ready! 🚀
