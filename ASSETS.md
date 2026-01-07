# Asset Management Guide

## Current Status

✅ **Downloaded from Squarespace:**
- Hero background image (`public/assets/hero-bg.jpeg`)
- Leaf texture (`public/assets/leaf-texture.jpeg`)
- Climate VC wordmark (`public/assets/wordmark.png`)

⚠️ **Placeholder Files (Need Replacement):**
- Portfolio company logos (16 companies in `public/logos/`)
- Team photos (3 people in `public/people/`)
- Advisory board photos (5 people in `public/people/`)
- Press outlet logos (8 outlets in `public/logos/press/`)

## How Asset Paths Work

Asset paths are stored in `src/content/siteData.ts` **without leading slashes**:

```typescript
// ✅ Correct
logoPath: "logos/company.png"

// ❌ Wrong
logoPath: "/logos/company.png"
```

The components automatically prepend the base URL (`/site/` in dev, configured in `astro.config.mjs`) so the final path becomes `/site/logos/company.png`.

## Replacing Portfolio Company Logos

### Quick Method (Manual Download)

For each company:

1. Visit their website
2. Look for: Press Kit / Media Kit / Brand Assets / About page
3. Download their logo (preferably SVG or PNG with transparent background)
4. Save to `public/logos/` with the existing filename

### Company List with URLs

| Company | Filename | Website | Notes |
|---------|----------|---------|-------|
| CUR8 | `cur8.svg` | https://cur8.earth | Look for press/media page |
| ClimateAligned | `climatealigned.svg` | https://climatealigned.co | Check footer for brand assets |
| UNDO | `undo.svg` | https://un-do.com | May have press kit |
| Kita | `kita.svg` | https://kita.earth | - |
| Global OTEC | `globalotec.svg` | https://globalotec.co | - |
| Anaphite | `anaphite.svg` | https://anaphite.com | - |
| DeepMeta | `deepmeta.svg` | https://deepmeta.io | - |
| Lenz Labs | `lenzlabs.svg` | https://lenzlabs.com | - |
| Treeconomy | `treeconomy.svg` | https://treeconomy.co | - |
| Tierra Foods | `tierra-foods.svg` | https://tierra-foods.com | - |
| Offgrid Finance | `offgrid.svg` | https://offgrid.finance | - |
| Preoptima | `preoptima.svg` | https://preoptima.com | - |
| PES Technologies | `pes.svg` | https://pestechnologies.com | - |
| Beta Bugs | `betabugs.svg` | https://betabugs.uk | - |
| Sterling BioMachines | `sterling.svg` | https://sterlingbiomachines.com | - |
| Verna Land Management | `verna.svg` | URL TBD | Get logo directly from company |

**Note:** Current placeholders are SVG. When you replace them with real logos (PNG/SVG/etc), update the extension in `src/content/siteData.ts`

### Best Practices

- **Format:** SVG preferred (scalable, small file size), or PNG with transparent background
- **Size:** Width 400-800px for PNGs (will be scaled down)
- **Aspect ratio:** Maintain original (don't stretch)
- **File size:** Optimize images (use ImageOptim, TinyPNG, or similar)
- **Naming:** Keep existing filenames for consistency

## Replacing Team/Advisory Photos

See `public/people/README.md` for detailed instructions.

### Requirements

- **Format:** JPG or PNG
- **Aspect ratio:** Square (1:1) works best
- **Minimum size:** 800x800px
- **Consistency:** Try to use similar backgrounds/styling for professional appearance

### Team Members Needed

- Peet Denny → `peet-denny.svg` (replace with actual photo, update extension in siteData.ts)
- James Knight → `james-knight.svg` (replace with actual photo, update extension in siteData.ts)
- Doug Scott → `doug-scott.svg` (replace with actual photo, update extension in siteData.ts)

### Advisory Board Members Needed

- Marta Krupinska → `marta-krupinska.svg` (replace with actual photo)
- Ed Gillespie → `ed-gillespie.svg` (replace with actual photo)
- Mark Stevenson → `mark-stevenson.svg` (replace with actual photo)
- Jim Mann → `jim-mann.svg` (replace with actual photo)
- Michael Pawlyn → `michael-pawlyn.svg` (replace with actual photo)

## Replacing Press Logos

Press outlets typically provide logos in their media/press kits:

- **EU-Startups** → https://eu-startups.com (check footer)
- **London Daily News** → https://londondaily.news
- **Pitchbook** → https://pitchbook.com/about/media-resources
- **Startups Magazine** → https://startupsmagazine.co.uk
- **Tech EU** → https://tech.eu
- **UKTN** → https://uktn.co.uk
- **Angel News** → https://angelnews.co.uk
- **Impact Alpha** → https://impactalpha.com

Save to `public/logos/press/` directory.

## Testing Your Changes

After replacing any assets:

```bash
# Start dev server
npm run dev

# Visit http://localhost:4321/site

# Check all sections:
# - Portfolio logos
# - Team photos
# - Advisory photos
# - Press logos
```

## Troubleshooting

**Images not showing:**
- Check file exists in correct directory
- Verify filename matches exactly (including extension)
- Check browser console for 404 errors
- Ensure paths in `siteData.ts` don't have leading slashes

**Images look stretched:**
- Maintain original aspect ratio
- Don't force specific dimensions
- Use transparent backgrounds for logos

**Images too large:**
- Optimize before uploading
- SVG files should be < 50KB
- PNG files should be < 200KB each
- Use tools: ImageOptim, TinyPNG, SVGO

