#!/bin/bash

# New World Calculator - Deployment Helper Script
# This script helps you deploy your calculator to Vercel

echo "🎮 New World Calculator - Deployment Helper"
echo "==========================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: New World Calculator v1.0.0"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""
echo "Choose deployment method:"
echo "1. Deploy via Vercel CLI (recommended)"
echo "2. Setup for GitHub deployment"
echo "3. Just build locally"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Deploying via Vercel CLI..."

        # Check if Vercel CLI is installed
        if ! command -v vercel &> /dev/null; then
            echo "📦 Installing Vercel CLI..."
            npm install -g vercel
        fi

        echo "🔐 Please login to Vercel..."
        vercel login

        echo "🚀 Deploying to Vercel..."
        vercel --prod

        echo ""
        echo "✅ Deployment complete!"
        echo "Your calculator is now live! 🎉"
        ;;

    2)
        echo ""
        echo "📝 Setting up for GitHub deployment..."
        echo ""
        echo "Please follow these steps:"
        echo "1. Create a new repository on GitHub"
        echo "2. Copy the repository URL"
        echo ""
        read -p "Enter your GitHub repository URL: " repo_url

        if [ ! -z "$repo_url" ]; then
            git remote add origin "$repo_url"
            git branch -M main
            git push -u origin main

            echo ""
            echo "✅ Code pushed to GitHub!"
            echo ""
            echo "Next steps:"
            echo "1. Go to https://vercel.com"
            echo "2. Click 'New Project'"
            echo "3. Import your GitHub repository"
            echo "4. Click 'Deploy'"
            echo ""
            echo "Your calculator will be live in 1-2 minutes! 🎉"
        else
            echo "❌ No repository URL provided"
        fi
        ;;

    3)
        echo ""
        echo "🔨 Building locally..."
        npm run build

        echo ""
        echo "✅ Build complete!"
        echo ""
        echo "To test the production build locally:"
        echo "npm run start"
        echo ""
        echo "To deploy later, run this script again."
        ;;

    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "📚 Documentation:"
echo "- Quick Start: QUICKSTART.md"
echo "- Deployment Guide: DEPLOYMENT_GUIDE.md"
echo "- Features: DOCUMENTATION.md"
echo ""
echo "Happy calculating! 🎮"
