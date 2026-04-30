# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-04-30

### Added
- Initial release of New World Calculator
- Crafting Calculator with dynamic material list
- Trading Calculator with ROI analysis
- Gear Score Calculator with tier classification
- Responsive design for mobile and desktop
- Dark theme with New World-inspired colors
- SEO optimization (sitemap, robots.txt, meta tags)
- Complete documentation suite
- Vercel deployment configuration
- MIT License

### Features
- **Crafting Calculator**
  - Add/remove multiple materials
  - Calculate crafting fees and taxes
  - Show profit margin and net profit
  - Real-time calculation updates

- **Trading Calculator**
  - Buy/sell price analysis
  - Tax calculations (buy tax, sell tax, listing fee)
  - ROI percentage calculation
  - Profit per item breakdown

- **Gear Score Calculator**
  - 10 equipment slots tracking
  - Average gear score calculation
  - Tier classification (Uncommon, Rare, Epic, Legendary)
  - Visual tier indicators with color coding

### Technical
- Next.js 13.5.6 with App Router
- TypeScript 5.3.3 for type safety
- Tailwind CSS 3.4.0 for styling
- React 18.2.0
- Optimized build size: 83.5 kB First Load JS
- Static generation for all pages
- No external dependencies for calculators

### Documentation
- README.md - Project overview
- QUICKSTART.md - 5-minute setup guide
- DOCUMENTATION.md - Feature documentation
- DEPLOYMENT_GUIDE.md - Detailed deployment instructions
- PROJECT_SUMMARY.md - Technical specifications
- CHANGELOG.md - Version history

### Performance
- First Load JS: 83.5 kB
- Static generation (SSG)
- Optimized with tree shaking and code splitting
- Mobile-first responsive design

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## [Unreleased]

### Planned Features
- LocalStorage for saving calculations
- Export/import functionality
- Calculation history
- Additional calculators (refining, expeditions)
- Multi-language support
- Dark/light theme toggle
- Share calculations via URL

### Under Consideration
- Backend integration for price tracking
- User accounts and saved calculations
- Community price database
- Real-time game data integration
- Mobile app version

---

## Version History

- **1.0.0** (2024-04-30) - Initial release

## How to Update

When deploying updates:

1. Update version in `package.json`
2. Document changes in this CHANGELOG
3. Commit changes
4. Tag release: `git tag v1.0.0`
5. Push to repository: `git push --tags`
6. Vercel will auto-deploy

## Support

For issues, feature requests, or questions:
- GitHub Issues (when repository is created)
- Check documentation files
- Review deployment guide

---

**Current Version**: 1.0.0  
**Status**: Production Ready  
**Last Updated**: 2024-04-30
