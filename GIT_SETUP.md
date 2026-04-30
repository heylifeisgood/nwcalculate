# Git Setup & Upload to GitHub

## Step 1: Configure Git (First Time Only)

```bash
# Set your name and email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 2: Commit Your Code

```bash
cd "C:\Users\meng\Documents\gpt\saas calculator"

# Commit the files
git commit -m "Initial commit: New World Calculator v1.0.0"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com
2. Click the "+" icon (top right) → "New repository"
3. Repository name: `new-world-calculator`
4. Description: `A lightweight SaaS calculator for New World game`
5. Choose "Public" or "Private"
6. **DO NOT** check "Initialize with README" (we already have one)
7. Click "Create repository"

## Step 4: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/new-world-calculator.git

# Push to GitHub
git push -u origin main
```

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 5: Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select your `new-world-calculator` repository
5. Click "Deploy"
6. Wait 1-2 minutes
7. Your site is live! 🎉

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## Troubleshooting

### "Author identity unknown" error
Run the git config commands in Step 1.

### "Permission denied" when pushing
- Make sure you're logged into GitHub
- Use HTTPS URL (not SSH) if you haven't set up SSH keys
- Or use GitHub Desktop app for easier authentication

### "Repository not found"
- Check the repository URL
- Make sure the repository exists on GitHub
- Verify your GitHub username in the URL

## Alternative: Use GitHub Desktop

If you prefer a GUI:

1. Download GitHub Desktop: https://desktop.github.com
2. Install and sign in
3. Click "Add" → "Add Existing Repository"
4. Select the folder: `C:\Users\meng\Documents\gpt\saas calculator`
5. Click "Publish repository"
6. Choose name and visibility
7. Click "Publish"

Then deploy to Vercel as described in Step 5.

## Files Being Uploaded

Only 27 essential files (no node_modules or .next):
- Source code (app/, components/)
- Configuration files
- Documentation
- Package files

Total size: ~200 KB (very small!)

## After Upload

Your repository will be at:
```
https://github.com/YOUR_USERNAME/new-world-calculator
```

Then you can deploy to Vercel and get a live URL like:
```
https://new-world-calculator.vercel.app
```

## Need Help?

Check DEPLOYMENT_GUIDE.md for more detailed instructions.
