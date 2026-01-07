# Quick Start Guide

## First Time Setup

Since npm install had network issues, here's what to do:

1. **Install dependencies** (when network is available):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Visit: http://localhost:4321

3. **Build for production**:
   ```bash
   npm run build
   ```

## What's Included

✅ **Complete Astro 5 + Tailwind setup** (security patched)
✅ **All assets downloaded** from Squarespace CDN:
   - Hero background image
   - Leaf texture
   - Climate VC wordmark

✅ **Placeholder assets created**:
   - Portfolio company logos (16 companies)
   - Team member photos (3 people)
   - Advisory board photos (5 people)  
   - Press outlet logos (8 outlets)

✅ **Full site structure**:
   - Hero/Intro section with image background
   - Portfolio grid (16 companies with categories)
   - Team section (3 members with LinkedIn links)
   - Advisory board section (5 members)
   - Press/As Seen On section (8 outlets)
   - Footer with disclaimers and company details

✅ **Additional pages**:
   - Diversity Policy page

✅ **GitHub Actions workflow** for automatic deployment

✅ **Responsive design** with mobile navigation

✅ **Accessibility features** (focus states, ARIA labels, semantic HTML)

## Next Steps

### 1. Replace Placeholder Assets

**Priority items to replace:**
- Portfolio company logos in `public/logos/`
- Team photos in `public/people/`
- Advisory board photos in `public/people/`
- Press outlet logos in `public/logos/press/`

### 2. Update Configuration

Edit `astro.config.mjs` to set your GitHub username and repository name:

```javascript
site: 'https://YOUR_USERNAME.github.io',
base: '/YOUR_REPO_NAME',
```

For custom domain (www.climate.vc):
```javascript
site: 'https://www.climate.vc',
base: '/',
```

### 3. Customize Content

Edit `src/content/siteData.ts` to update:
- Company descriptions
- Team bios and LinkedIn URLs
- Advisory board bios
- Footer disclaimers and company details

### 4. Test Locally

```bash
npm run dev
```

### 5. Deploy to GitHub

```bash
git init
git add .
git commit -m "Initial Climate VC site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then enable GitHub Pages in repository settings → Pages → Source: GitHub Actions

## Troubleshooting

**If npm install fails:**
- Try `npm install --legacy-peer-deps`
- Or use `yarn install` or `pnpm install` instead

**If builds fail:**
- Check Node.js version (needs 18+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

**Asset paths not working:**
- Ensure `base` in `astro.config.mjs` matches your deployment path
- Asset paths in `siteData.ts` should NOT start with `/` (e.g., use `logos/company.png` not `/logos/company.png`)
- The `base` URL is automatically prepended by components using `import.meta.env.BASE_URL`
- If you see paths like `/sitelogos/` instead of `/site/logos/`, check for leading slashes in asset paths

## File Structure Reference

```
├── public/              # Static assets (served as-is)
│   ├── assets/         # Main images
│   ├── logos/          # Company + press logos
│   └── people/         # Team photos
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # Site data (EDIT THIS!)
│   ├── layouts/        # Page layouts
│   └── pages/          # Routes (index = homepage)
└── .github/workflows/  # GitHub Actions for deployment
```

## Support

Questions? Check the main README.md or contact info@climate.vc

