# Climate VC Website

A modern, single-page static site built with Astro 5 and Tailwind CSS, deployed on GitHub Pages.

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:4321`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
/
├── public/
│   ├── assets/           # Main site images (hero, textures, wordmark)
│   ├── logos/            # Company logos for portfolio
│   │   └── press/        # Press outlet logos
│   └── people/           # Team and advisory board photos
├── src/
│   ├── components/       # Astro components
│   │   ├── Nav.astro
│   │   ├── Section.astro
│   │   ├── PortfolioGrid.astro
│   │   ├── PeopleGrid.astro
│   │   ├── PressStrip.astro
│   │   └── Footer.astro
│   ├── content/
│   │   └── siteData.ts   # All site content (editable)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro   # Main page
├── astro.config.mjs      # Astro configuration
└── tailwind.config.mjs   # Tailwind CSS configuration
```

## 🎨 Updating Content

### Site Content

All site content is centralized in `src/content/siteData.ts`. Edit this file to update:

- Hero headline and body text
- Portfolio companies (name, description, URL, category)
- Team members (name, role, bio, LinkedIn)
- Advisory board members
- Press outlets
- Footer text and disclaimers

### Adding/Replacing Logos

#### Portfolio Company Logos

1. Add logo files to `public/logos/`
2. Recommended format: PNG with transparent background
3. Update the `logoPath` in `src/content/siteData.ts`:
   ```typescript
   {
     name: "Company Name",
     logoPath: "/logos/your-logo.png",
     // ... other fields
   }
   ```

#### Press Outlet Logos

1. Add logo files to `public/logos/press/`
2. Update the `logoPath` in the `press` array in `src/content/siteData.ts`

### Adding/Replacing Team Photos

1. Add photo files to `public/people/`
2. Recommended: Square aspect ratio (e.g., 400x400px)
3. Update the `imagePath` in `src/content/siteData.ts`:
   ```typescript
   {
     name: "Person Name",
     imagePath: "/people/person-name.jpg",
     // ... other fields
   }
   ```

## 🌐 Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Configure for your repository:**
   
   Edit `astro.config.mjs`:

   **For a project repository (yourusername.github.io/repo-name):**
   ```javascript
   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/repo-name',
     // ...
   });
   ```

   **For a user/organization site (yourusername.github.io):**
   ```javascript
   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/',
     // ...
   });
   ```

   **For a custom domain (www.climate.vc):**
   ```javascript
   export default defineConfig({
     site: 'https://www.climate.vc',
     base: '/',
     // ...
   });
   ```

3. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

4. **Monitor deployment:**
   - Go to the "Actions" tab in your repository
   - Watch the deployment workflow complete
   - Your site will be live at the configured URL

### Custom Domain

To use a custom domain (e.g., www.climate.vc):

1. **Update `astro.config.mjs`** as shown above
2. **Add CNAME file** to `public/` directory:
   ```
   www.climate.vc
   ```
3. **Configure DNS:**
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
4. **Enable HTTPS:**
   - In repository settings → Pages
   - Check "Enforce HTTPS"

## 🎨 Design System

### Colors

- **Charcoal** (background): `#1a1a1a` to `#454545`
- **Mint/Teal** (accent): `#14b8a6`
- Uses Tailwind CSS color utilities

### Typography

- Font family: Inter (loaded from Google Fonts)
- Generous spacing and hierarchy
- Responsive text sizes

### Components

- **Nav**: Sticky navigation with smooth scrolling
- **Section**: Reusable section wrapper with title/subtitle
- **PortfolioGrid**: Responsive grid of portfolio cards
- **PeopleGrid**: Team and advisory board member cards
- **PressStrip**: Logo grid with grayscale hover effect
- **Footer**: Disclaimers and company information

## 🔧 Technical Details

### Asset Handling

- Images in `public/` are served as-is
- **All asset paths automatically include the base path** using `import.meta.env.BASE_URL`
- This ensures images work correctly whether deployed to a subpath (`/site`) or root (`/`)
- The base URL is set in `astro.config.mjs`
- If you add new image references in components, use: `${base}assets/your-image.png`

### Responsive Design

- Mobile-first approach
- Breakpoints:
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

### Accessibility

- Semantic HTML
- ARIA labels on interactive elements
- Focus states for keyboard navigation
- Alt text on all images

## 📝 Content Placeholders

The following items have placeholder content that should be replaced:

### High Priority
- [ ] **Portfolio company logos** → See `public/logos/README.md` for instructions
- [ ] **Team member photos** → See `public/people/README.md` for instructions
- [ ] **Advisory board photos** → See `public/people/README.md` for instructions
- [ ] **Press outlet logos** → Get from each outlet's media/press kit

### Content Updates
- [ ] LinkedIn URLs for team members (update in `src/content/siteData.ts`)
- [ ] Team bios (update in `src/content/siteData.ts`)
- [ ] Portfolio company descriptions (update in `src/content/siteData.ts`)
- [ ] Verna Land Management URL (currently empty in `src/content/siteData.ts`)
- [ ] Company registration details in footer (`src/content/siteData.ts`)

### Notes
- All placeholder images are currently SVG/simple graphics
- Check each `README.md` in asset directories for detailed replacement instructions
- The diversity policy page exists at `/diversity-policy` but should be customized

## 🤝 Contributing

To make changes:

1. Create a new branch
2. Make your changes
3. Test locally with `npm run dev`
4. Build to verify with `npm run build`
5. Commit and push
6. Create a pull request

## 📄 License

Copyright © 2026 Climate VC Limited. All rights reserved.

## 🆘 Support

For questions or issues:
- Check the [Astro documentation](https://docs.astro.build)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Contact: info@climate.vc

