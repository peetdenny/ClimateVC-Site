# Downloaded Assets from climate.vc

✅ Successfully downloaded real assets from your existing Squarespace site!

## Portfolio Company Logos ✅

All 16 portfolio company logos downloaded from https://www.climate.vc/:

| Company | File | Status |
|---------|------|--------|
| CUR8 | `public/logos/cur8.png` | ✅ Downloaded |
| ClimateAligned | `public/logos/climatealigned.png` | ✅ Downloaded |
| UNDO | `public/logos/undo.png` | ✅ Downloaded |
| Kita | `public/logos/kita.png` | ✅ Downloaded |
| Global OTEC | `public/logos/globalotec.png` | ✅ Downloaded |
| Anaphite | `public/logos/anaphite.png` | ✅ Downloaded |
| DeepMeta | `public/logos/deepmeta.png` | ✅ Downloaded |
| Lenz Labs | `public/logos/lenzlabs.png` | ✅ Downloaded |
| Treeconomy | `public/logos/treeconomy.png` | ✅ Downloaded |
| Tierra Foods | `public/logos/tierra-foods.png` | ✅ Downloaded |
| Offgrid Finance | `public/logos/offgrid.png` | ✅ Downloaded |
| Preoptima | `public/logos/preoptima.png` | ✅ Downloaded |
| PES Technologies | `public/logos/pes.png` | ✅ Downloaded |
| Beta Bugs | `public/logos/betabugs.png` | ✅ Downloaded |
| Sterling BioMachines | `public/logos/sterling.png` | ✅ Downloaded |
| Verna Land Management | `public/logos/verna.png` | ✅ Downloaded |

## Team Photos

| Member | File | Status |
|--------|------|--------|
| Peet Denny | `public/people/peet-denny.png` | ✅ Downloaded (256 bytes - may need replacement with higher quality) |
| James Knight | `public/people/james-knight.png` | ✅ Downloaded (3.1MB) |
| Doug Scott | `public/people/doug-scott.png` | ✅ Downloaded (166KB) |

## Advisory Board Photos

| Advisor | File | Status |
|---------|------|--------|
| Ed Gillespie | `public/people/ed-gillespie.png` | ✅ Downloaded (121KB) |
| Mark Stevenson | `public/people/mark-stevenson.jpg` | ✅ Downloaded (13KB) |
| Michael Pawlyn | `public/people/michael-pawlyn.png` | ✅ Downloaded (155KB) |
| Marta Krupinska | `public/people/marta-krupinska.svg` | ⚠️ Placeholder - not found on site |
| Jim Mann | `public/people/jim-mann.svg` | ⚠️ Placeholder - not found on site |

## Press Logos

Downloaded 7 press outlet logos (numbered):

| File | Size | Notes |
|------|------|-------|
| `public/logos/press/logo2.png` | 186KB | Need to identify which outlet |
| `public/logos/press/logo3.png` | 75KB | Need to identify which outlet |
| `public/logos/press/logo4.png` | 76KB | Need to identify which outlet |
| `public/logos/press/logo5.png` | 124KB | Need to identify which outlet |
| `public/logos/press/logo6.png` | 87KB | Need to identify which outlet |
| `public/logos/press/logo7.png` | 78KB | Need to identify which outlet |
| `public/logos/press/logo8.png` | 120KB | Need to identify which outlet |

**TODO:** Map these numbered logos to the press outlets in `siteData.ts`:
- EU-Startups
- London Daily News
- Pitchbook
- Startups Magazine
- Tech EU
- UKTN
- Angel News
- Impact Alpha

## Action Items

### High Priority

1. **Replace Peet Denny photo** - Current file is only 256 bytes (likely a placeholder/icon), need actual headshot
2. **Add Marta Krupinska photo** - Currently using placeholder SVG
3. **Add Jim Mann photo** - Currently using placeholder SVG
4. **Map press logos** - Rename logo2.png through logo8.png to match outlet names in siteData.ts

### Notes

- All downloaded files are real assets from your existing climate.vc site
- File extensions in `src/content/siteData.ts` have been updated to match downloaded files
- Placeholder SVGs remain for missing photos (Marta, Jim) and will display as simple icons
- Old SVG placeholders are still in directories but aren't being used (safe to delete)

## Cleaning Up

To remove the old placeholder SVGs:

```bash
cd /home/denny/dev/climate-vc/site
rm public/logos/*.svg
rm public/people/*.svg
rm public/logos/press/*.svg
```

(This will keep only the real downloaded PNGs/JPGs)

