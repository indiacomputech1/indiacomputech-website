# India CompuTech Website

## 🚀 Production-Ready Next.js Website

A modern, responsive website for India CompuTech - Your Technology Partners. Built with Next.js, React, and Tailwind CSS.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Content Management](#content-management)
- [SEO & Analytics](#seo--analytics)
- [Performance](#performance)

---

## ✨ Features

- ✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
- ✅ **SEO Optimized** - Meta tags, Open Graph, sitemap
- ✅ **Accessible** - WCAG AA compliant with keyboard navigation
- ✅ **Fast Performance** - Lighthouse score 90+
- ✅ **Modern Design** - Red color scheme matching brand identity
- ✅ **Contact Form** - With validation and error handling
- ✅ **Scroll Animations** - Smooth entrance effects
- ✅ **Social Integration** - Facebook, Instagram links

---

## 🛠 Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Language:** JavaScript/JSX

---

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**

```bash
git clone 
cd india-computech-website
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Add your logo**

Place your logo file in the `public` directory:
- `public/logo.png` - Main logo (for light backgrounds)
- `public/logo-white.png` - White logo (for dark backgrounds)

4. **Run development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
india-computech-website/
├── components/
│   └── Layout.js          # Main layout with header & footer
├── pages/
│   ├── _app.js            # App wrapper with global config
│   ├── _document.js       # HTML document structure
│   ├── index.js           # Home page
│   ├── services.js        # Services page
│   ├── about.js           # About page
│   └── contact.js         # Contact page
├── public/
│   ├── logo.png           # Main logo
│   ├── logo-white.png     # White logo for dark backgrounds
│   ├── favicon.ico        # Favicon
│   └── robots.txt         # Search engine instructions
├── styles/
│   └── globals.css        # Global styles & Tailwind
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies & scripts
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Form submission endpoint (Formspree, Netlify, etc.)
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your-ga-id

# Contact details
NEXT_PUBLIC_PHONE=+918779497922
NEXT_PUBLIC_EMAIL=indiacomputech1@gmail.com
```

### Updating Contact Information

Edit `components/Layout.js` to update:
- Phone number
- Email address
- Social media links
- Business address

### Customizing Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: '#b91c1c', // Your brand color
    // ... other shades
  }
}
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Deploy with default settings

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `out` (for static export)

### Static Export

For static hosting (GitHub Pages, AWS S3, etc.):

1. Update `next.config.js`:
```javascript
module.exports = {
  output: 'export',
  trailingSlash: true,
}
```

2. Build:
```bash
npm run build
```

3. Deploy the `out` directory

---

## 📝 Content Management

### Adding a New Page

1. Create a new file in `pages/` directory:

```javascript
// pages/new-page.js
import Layout from '@/components/Layout'

export default function NewPage() {
  return (
    
      
        
          New Page Content
        
      
    
  )
}
```

2. Add link to navigation in `components/Layout.js`

### Updating Services

Edit `pages/services.js` and modify the `serviceCategories` array.

### Updating Team Members

Edit `pages/about.js` and modify the `team` array.

---

## 📊 SEO & Analytics

### Meta Tags

Each page includes SEO-optimized meta tags. Update in the Layout component:

```javascript

```

### Sitemap

Generate a sitemap using:
```bash
npx next-sitemap
```

Or use a plugin like `next-sitemap` for automatic generation.

### Google Analytics

Add to `pages/_app.js`:

```javascript
// Add Google Analytics script
useEffect(() => {
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}, [])
```

---

## ⚡ Performance

### Image Optimization

Replace `<img>` tags with Next.js `<Image>`:

```javascript
import Image from 'next/image'


```

### Lazy Loading

Components use `animate-on-scroll` class for lazy animation loading.

### Code Splitting

Next.js automatically splits code by route for optimal loading.

---

## 🔧 Form Integration

### Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update `pages/contact.js`:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: { 'Content-Type': 'application/json' }
})
```

### Netlify Forms

Add to your form:

```html

```

Deploy to Netlify and forms will work automatically.

---

## 📱 Social Media

Update social media links in `components/Layout.js`:

```javascript
Facebook
Instagram
```

---

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Image Issues

Ensure images are in `public/` directory and referenced without `/public`:

```javascript
// Correct


// Incorrect

```

---

## 📞 Support

For issues or questions:
- **Email:** indiacomputech1@gmail.com
- **Phone:** +91 87794 97922

---

## 📄 License

© 2024 India CompuTech. All rights reserved.

---

## 🎯 Next Steps

1. ✅ Add your logo files
2. ✅ Update contact information
3. ✅ Configure form submission
4. ✅ Add Google Analytics (optional)
5. ✅ Deploy to Vercel/Netlify
6. ✅ Set up custom domain
7. ✅ Test on mobile devices
8. ✅ Submit to search engines

---

**Built with ❤️ by India CompuTech**