# Custom Domain Setup Guide

## Current Status
✅ Site is live at: https://peetdenny.github.io/ClimateVC-Site/
⏳ Custom domain (www.climate.vc) not yet configured

## When You're Ready to Switch to Custom Domain

### Step 1: Configure DNS
Add these DNS records at your domain registrar:

**Option A: CNAME Record (Recommended)**
```
Type: CNAME
Name: www
Value: peetdenny.github.io
TTL: 3600 (or Auto)
```

**Option B: For apex domain (climate.vc without www)**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### Step 2: Add CNAME File
Create `public/CNAME` with this content:
```
www.climate.vc
```

### Step 3: Update astro.config.mjs
Change these lines in `astro.config.mjs`:

```javascript
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://www.climate.vc',  // Changed from peetdenny.github.io
  base: '/',                        // Changed from /ClimateVC-Site/
  output: 'static',
  build: {
    assets: '_assets'
  }
});
```

### Step 4: Configure GitHub Pages
1. Go to: https://github.com/peetdenny/ClimateVC-Site/settings/pages
2. Under "Custom domain", enter: `www.climate.vc`
3. Wait for DNS check to pass (may take a few minutes to hours)
4. Enable "Enforce HTTPS"

### Step 5: Push Changes
```bash
git add .
git commit -m "Configure custom domain"
git push origin main
```

### Step 6: Wait for Deployment
- GitHub Actions will rebuild the site
- Site will be available at https://www.climate.vc (after DNS propagates)

## Testing
After DNS propagates (can take 24-48 hours):
- https://www.climate.vc → Should work
- https://peetdenny.github.io/ClimateVC-Site/ → May redirect to custom domain

## Troubleshooting

**DNS not propagating?**
- Check DNS with: `dig www.climate.vc`
- Or use: https://www.whatsmydns.net/

**Images still broken?**
- Make sure you updated `base: '/'` in astro.config.mjs
- Rebuild: `npm run build`
- Commit and push changes

**HTTPS not working?**
- Wait for GitHub to provision SSL certificate (can take up to 24 hours)
- Make sure "Enforce HTTPS" is enabled in GitHub Pages settings

