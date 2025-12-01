# India CompuTech Website - Deployment Guide

## 📦 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Added logo files (`logo.png` and `logo-white.png`) to `/public` directory
- [ ] Updated contact information in `components/Layout.js`
- [ ] Configured environment variables in `.env.local`
- [ ] Tested the site locally (`npm run dev`)
- [ ] Built the site successfully (`npm run build`)
- [ ] Verified all pages load correctly
- [ ] Tested contact form functionality
- [ ] Checked mobile responsiveness
- [ ] Verified SEO meta tags

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Created by Next.js team
- Zero configuration
- Automatic HTTPS
- Global CDN
- Automatic deployments from Git

**Steps:**

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin 
git push -u origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Build Command: `next build` (default)
     - Output Directory: `.next` (default)
   - Add environment variables (if needed)
   - Click "Deploy"

3. **Configure Custom Domain**
   - Go to Project Settings → Domains
   - Add your domain: `indiacomputech.com`
   - Update DNS records:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

4. **Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`

**Automatic Deployments:**
- Every push to `main` branch auto-deploys to production
- Pull requests create preview deployments

---

### Option 2: Netlify

**Why Netlify?**
- Easy setup
- Form handling built-in
- Automatic HTTPS
- Global CDN

**Steps:**

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Configure build:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Configure Custom Domain**
   - Go to Site Settings → Domain Management
   - Add custom domain
   - Update DNS records:
     ```
     Type: A
     Name: @
     Value: 75.2.60.5
     
     Type: CNAME
     Name: www
     Value: your-site.netlify.app
     ```

4. **Enable Form Handling**
   - Forms automatically work with `netlify` attribute
   - View submissions in Netlify dashboard

---

### Option 3: Static Export (GitHub Pages, AWS S3, etc.)

**For static hosting without serverless functions:**

1. **Update `next.config.js`**
```javascript
module.exports = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
```

2. **Build Static Site**
```bash
npm run build
```

This creates an `out` directory with static files.

3. **Deploy to GitHub Pages**

Add to `package.json`:
```json
"scripts": {
  "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"
}
```

Install gh-pages:
```bash
npm install --save-dev gh-pages
```

Deploy:
```bash
npm run deploy
```

4. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Custom domain: `indiacomputech.com`
   - Add CNAME file in `public/CNAME` with your domain

---

### Option 4: AWS S3 + CloudFront

**For AWS hosting:**

1. **Build Static Site** (as above)

2. **Create S3 Bucket**
   - Bucket name: `indiacomputech.com`
   - Enable static website hosting
   - Set bucket policy for public access

3. **Upload Files**
```bash
aws s3 sync out/ s3://indiacomputech.com --delete
```

4. **Create CloudFront Distribution**
   - Origin: S3 bucket endpoint
   - Enable HTTPS
   - Configure custom domain

5. **Update DNS**
   - Point `indiacomputech.com` to CloudFront distribution

---

## 🔧 Post-Deployment Configuration

### 1. Form Submission Setup

**Option A: Formspree**
1. Sign up at [formspree.io](https://formspree.io)
2. Create new form
3. Update `pages/contact.js`:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: { 'Content-Type': 'application/json' }
})
```

**Option B: Netlify Forms**
- Already works if deployed on Netlify
- View submissions in Netlify dashboard

**Option C: Custom API (Vercel)**
- Use the included `/api/contact.js`
- Configure SMTP or email service
- Add environment variables

### 2. Google Analytics

Add to `pages/_app.js`:

```javascript
// Add after imports
import Script from 'next/script'

// Add in component
<Script
  strategy="afterInteractive"
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
/>

```

### 3. Sitemap Generation

Install next-sitemap:
```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:
```javascript
module.exports = {
  siteUrl: 'https://indiacomputech.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
}
```

Add to `package.json`:
```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

### 4. SSL/HTTPS

- **Vercel/Netlify**: Automatic
- **Custom domain**: Add through hosting provider
- **Cloudflare**: Free SSL with DNS proxy

---

## 🔍 SEO Optimization

### 1. Submit to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `indiacomputech.com`
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://indiacomputech.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site
3. Import from Google Search Console or verify manually
4. Submit sitemap

### 2. Schema Markup

Add to `pages/_document.js`:
```javascript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'India CompuTech',
      url: 'https://indiacomputech.com',
      logo: 'https://indiacomputech.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-87794-97922',
        contactType: 'Customer Service',
        email: 'indiacomputech1@gmail.com',
      },
    }),
  }}
/>
```

---

## 📊 Performance Monitoring

### 1. Google PageSpeed Insights
- Test at [pagespeed.web.dev](https://pagespeed.web.dev)
- Target: 90+ score

### 2. Lighthouse
```bash
npm install -g lighthouse
lighthouse https://indiacomputech.com --view
```

### 3. Web Vitals
Add to `pages/_app.js`:
```javascript
export function reportWebVitals(metric) {
  console.log(metric)
  // Send to analytics
}
```

---

## 🔄 Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test
      # Add deployment steps
```

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Ensure images are in `/public` directory
- Reference without `/public` prefix: `/logo.png`
- For Next.js Image, add domain to `next.config.js`

### Form Not Working
- Check environment variables
- Verify API endpoint
- Check browser console for errors
- Test with CORS if using external API

### Domain Not Resolving
- Wait 24-48 hours for DNS propagation
- Clear DNS cache: `ipconfig /flushdns` (Windows) or `sudo killall -HUP mDNSResponder` (Mac)
- Verify DNS records: `nslookup indiacomputech.com`

---

## 📞 Support

For deployment issues:
- **Email:** indiacomputech1@gmail.com
- **Phone:** +91 87794 97922

---

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads at production URL
- [ ] All pages accessible
- [ ] Images load correctly
- [ ] Contact form works
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] No console errors
- [ ] Social links work
- [ ] Google Analytics tracking
- [ ] Sitemap accessible
- [ ] robots.txt accessible
- [ ] All links work
- [ ] Forms submit successfully

---

**🎉 Congratulations! Your website is live!**