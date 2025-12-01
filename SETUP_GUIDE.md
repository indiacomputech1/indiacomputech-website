# India CompuTech Website - Complete Setup Guide

## 🎯 Quick Start (5 Minutes)

```bash
# 1. Install dependencies
npm install

# 2. Add your logo to /public directory
#    - logo.png (for light backgrounds)
#    - logo-white.png (for dark backgrounds)

# 3. Start development server
npm run dev

# 4. Open http://localhost:3000
```

---

## 📋 Complete Setup Steps

### Step 1: Install Node.js

Download and install Node.js 18+ from [nodejs.org](https://nodejs.org)

Verify installation:
```bash
node --version  # Should be v18.x.x or higher
npm --version   # Should be 9.x.x or higher
```

### Step 2: Project Setup

1. **Extract project files** to your desired location

2. **Open terminal** in project directory

3. **Install dependencies:**
```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS 3.4
- Lucide React (icons)
- All required dependencies

### Step 3: Add Your Logo

1. **Prepare logo files:**
   - Main logo (for white/light backgrounds) → Save as `logo.png`
   - White logo (for dark backgrounds) → Save as `logo-white.png`
   - Recommended size: 800x200 pixels (4:1 aspect ratio)
   - Format: PNG with transparent background

2. **Add to project:**
```
public/
├── logo.png          ← Your main logo here
├── logo-white.png    ← Your white logo here
└── favicon.ico       ← Your favicon
```

### Step 4: Configure Environment Variables

1. **Copy example file:**
```bash
cp .env.example .env.local
```

2. **Edit `.env.local`** with your details:
```env
NEXT_PUBLIC_SITE_URL=https://indiacomputech.com
NEXT_PUBLIC_PHONE=+918779497922
NEXT_PUBLIC_EMAIL=indiacomputech1@gmail.com
```

### Step 5: Update Contact Information

Edit `components/Layout.js` around line 150:

```javascript
// Update phone number
+91 87794 97922

// Update email

  indiacomputech1@gmail.com


// Update social media links
Facebook
Instagram
```

### Step 6: Test Locally

```bash
# Start development server
npm run dev
```

Open browser: [http://localhost:3000](http://localhost:3000)

**Check:**
- ✅ Logo displays correctly
- ✅ All pages load
- ✅ Navigation works
- ✅ Contact form validates
- ✅ Mobile responsive
- ✅ No console errors

### Step 7: Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

Open browser: [http://localhost:3000](http://localhost:3000)

---

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#b91c1c',  // Change this to your brand color
    50: '#fef2f2',
    // ... other shades
  }
}
```

Use this tool to generate color shades: [uicolors.app](https://uicolors.app)

### Update Homepage Content

Edit `pages/index.js`:

```javascript
// Change hero text
Your Company Name
Your tagline here

// Update services
const services = [
  {
    icon: Server,
    title: 'Your Service',
    description: 'Your description',
  },
  // ... more services
]

// Update statistics
const stats = [
  { value: '500+', label: 'Your Metric' },
  // ... more stats
]
```

### Add New Page

1. Create file in `pages/` directory:

```javascript
// pages/new-page.js
import Layout from '@/components/Layout'

export default function NewPage() {
  return (
    
      
        
          Page Content
          Your content here...
        
      
    
  )
}
```

2. Add to navigation in `components/Layout.js`:

```javascript
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'New Page', href: '/new-page' },  // Add here
  // ... more links
]
```

### Modify Services

Edit `pages/services.js`:

```javascript
const serviceCategories = [
  {
    id: 'your-service',
    icon: YourIcon,
    title: 'Your Service Title',
    tagline: 'Your tagline',
    description: 'Your description',
    features: [
      'Feature 1',
      'Feature 2',
      // ... more features
    ],
    benefits: [
      'Benefit 1',
      'Benefit 2',
    ],
  },
  // ... more services
]
```

### Update Team Members

Edit `pages/about.js`:

```javascript
const team = [
  { name: 'John Doe', role: 'CEO' },
  { name: 'Jane Smith', role: 'CTO' },
  // ... more team members
]
```

---

## 📧 Contact Form Setup

### Option 1: Formspree (Easiest)

1. **Sign up** at [formspree.io](https://formspree.io) (Free plan available)

2. **Create new form** and get your form ID

3. **Update** `pages/contact.js`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  if (response.ok) {
    setSubmitStatus('success')
    // Reset form
  }
}
```

### Option 2: Netlify Forms

If deploying to Netlify, forms work automatically!

No code changes needed - Netlify detects and handles forms.

### Option 3: Custom API (Advanced)

Use the included `/pages/api/contact.js`:

1. **Configure email service** (SendGrid, Mailgun, etc.)

2. **Add environment variables:**
```env
SENDGRID_API_KEY=your_api_key
```

3. **Update API route** with your credentials

---

## 🔍 SEO Configuration

### Meta Tags

Already configured! Each page has:
- Title tag
- Meta description
- Open Graph tags
- Twitter card tags

### Sitemap

Install and configure:
```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:
```javascript
module.exports = {
  siteUrl: 'https://indiacomputech.com',
  generateRobotsTxt: true,
}
```

Add to `package.json`:
```json
"postbuild": "next-sitemap"
```

### robots.txt

Already included in `/public/robots.txt`

Update the domain:
```
Sitemap: https://your-domain.com/sitemap.xml
```

---

## 📱 Social Media Integration

### Update Links

Edit `components/Layout.js`:

```javascript



```

### Social Share Buttons (Optional)

Add to pages:
```javascript
<a 
  href={`https://facebook.com/sharer/sharer.php?u=${currentUrl}`}
  target="_blank"
>
  Share on Facebook

```

---

## 🎯 Performance Optimization

### Image Optimization

Replace standard `<img>` with Next.js `<Image>`:

```javascript
import Image from 'next/image'

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority  // For above-the-fold images
/>
```

### Font Optimization

Add custom fonts to `pages/_document.js`:

```javascript

```

Update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

---

## 📊 Analytics Setup

### Google Analytics

1. **Create GA4 property** at [analytics.google.com](https://analytics.google.com)

2. **Get Measurement ID** (format: G-XXXXXXXXXX)

3. **Add to `.env.local`:**
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. **Add to `pages/_app.js`:**
```javascript
import Script from 'next/script'

<Script
  strategy="afterInteractive"
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
/>
```

### Facebook Pixel (Optional)

Add to `pages/_document.js`:
```javascript
<script dangerouslySetInnerHTML={{
  __html: `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
  `
}} />
```

---

## 🐛 Common Issues & Solutions

### Issue: "Module not found: Can't resolve '@/components/Layout'"

**Solution:** Create `jsconfig.json` (already included):
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Issue: Images not showing

**Solutions:**
1. Ensure images are in `/public` directory
2. Reference without `/public`: `/logo.png` not `/public/logo.png`
3. Check file names match exactly (case-sensitive)

### Issue: Build fails with errors

**Solutions:**
```bash
# Clear cache
rm -rf .next node_modules package-lock.json

# Reinstall
npm install

# Rebuild
npm run build
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# Use different port
npm run dev -- -p 3001

# Or kill process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID  /F

# Mac/Linux:
lsof -ti:3000 | xargs kill
```

---

## 📚 Additional Resources

### Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

### Tools & Services

- **Hosting:** Vercel, Netlify, AWS, DigitalOcean
- **Forms:** Formspree, Netlify Forms, Google Forms
- **Email:** SendGrid, Mailgun, AWS SES
- **Analytics:** Google Analytics, Plausible, Fathom
- **Monitoring:** Sentry, LogRocket, Datadog

---

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Logo files added and displaying correctly
- [ ] All contact information updated
- [ ] Environment variables configured
- [ ] Forms tested and working
- [ ] All pages reviewed for typos
- [ ] Mobile responsive on all devices
- [ ] Browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Performance test (Lighthouse score 90+)
- [ ] SEO tags verified
- [ ] Social media links updated
- [ ] Analytics configured
- [ ] Sitemap generated
- [ ] 404 page working
- [ ] HTTPS enabled
- [ ] Domain configured
- [ ] Backup plan in place

---

## 📞 Need Help?

**India CompuTech Support:**
- **Email:** indiacomputech1@gmail.com
- **Phone:** +91 87794 97922
- **Hours:** Monday - Saturday, 9:00 AM - 7:00 PM IST

**Technical Issues:**
- Check existing documentation first
- Search GitHub issues
- Contact support with:
  - Error messages
  - Steps to reproduce
  - Browser/OS details
  - Screenshots if relevant

---

## 🎉 You're Ready!

Your website is now fully configured and ready to launch. Follow the [DEPLOYMENT.md](DEPLOYMENT.md) guide for deployment instructions.

**Good luck with your launch! 🚀**