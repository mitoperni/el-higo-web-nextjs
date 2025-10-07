# 🍃 El Higo - Restaurant Website

A modern, SEO-optimized website for El Higo restaurant in Granada's Albaicín, built with Next.js 15, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

- 🌍 **Multi-language Support** (Spanish/English) with next-intl
- 🔍 **SEO Optimized** - Complete metadata, Open Graph, Twitter Cards
- 🗺️ **Dynamic Sitemap & Robots.txt**
- 📊 **Structured Data** (Schema.org JSON-LD for Restaurant)
- 🖼️ **Image Optimization** with Next.js Image component
- ⚡ **Fast Performance** - Optimized for Core Web Vitals
- 📱 **Fully Responsive** design
- 🎨 **Modern UI** with Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd el-higo-web-nextjs

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
el-higo-web-nextjs/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Localized routes
│   │   │   ├── layout.tsx     # Root layout with metadata
│   │   │   ├── page.tsx       # Homepage
│   │   │   ├── carta/         # Menu page
│   │   │   ├── contacto/      # Contact page
│   │   │   └── ...
│   │   ├── components/
│   │   │   ├── features/      # Feature components
│   │   │   ├── seo/           # SEO components
│   │   │   └── ui/            # UI components
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   └── robots.ts          # Robots.txt
│   ├── config/
│   │   └── site.ts            # Centralized site config
│   ├── data/
│   │   └── menuData.ts        # Menu data
│   ├── locales/               # i18n translations
│   │   ├── es/
│   │   └── en/
│   └── i18n.ts                # i18n configuration
├── public/                    # Static assets
├── .env.local                 # Local environment variables
└── .env.example               # Environment variables template
```

## ⚙️ Configuration

### Environment Variables

The project uses environment variables for easy configuration across different environments (local, preview, production).

Create a `.env.local` file (already created) or configure in Vercel Dashboard:

```env
# Base URL (change per environment)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Business Information
NEXT_PUBLIC_PHONE=+34858984102
NEXT_PUBLIC_ADDRESS_STREET=Calle Panaderos, 17
NEXT_PUBLIC_ADDRESS_CITY=Granada
NEXT_PUBLIC_ADDRESS_REGION=Andalucía
NEXT_PUBLIC_ADDRESS_POSTAL_CODE=18010
NEXT_PUBLIC_ADDRESS_COUNTRY=ES

# Geolocation
NEXT_PUBLIC_LATITUDE=37.1831339
NEXT_PUBLIC_LONGITUDE=-3.5926795

# Ratings
NEXT_PUBLIC_RATING_VALUE=4.8
NEXT_PUBLIC_RATING_COUNT=150
```

**📖 For detailed configuration guide, see:** [CONFIGURACION_ENV.md](CONFIGURACION_ENV.md)

### Changing the Base URL

**Local Development:**
- Already configured in `.env.local` as `http://localhost:3000`

**Vercel Preview/Production:**
1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Update `NEXT_PUBLIC_BASE_URL` to your domain/URL
4. Redeploy

## 🎯 SEO Features

### Implemented

- ✅ **Dynamic Sitemap** (`/sitemap.xml`)
- ✅ **Robots.txt** (`/robots.txt`)
- ✅ **Complete Metadata** on all pages
- ✅ **Open Graph & Twitter Cards**
- ✅ **Canonical URLs & Hreflang**
- ✅ **Structured Data** (Restaurant Schema)
- ✅ **Image Optimization** with next/image

### SEO Score

- **Current:** ~75-80/100
- **With pending optimizations:** ~90-95/100

**📊 For full SEO analysis, see:** [SEO_ANALYSIS_REPORT.md](SEO_ANALYSIS_REPORT.md)

## 🌐 Internationalization (i18n)

The website supports multiple languages using `next-intl`:

- 🇪🇸 Spanish (default)
- 🇬🇧 English

**Routes:**
- Spanish: `/es/*`
- English: `/en/*`

**Translation files:** `src/locales/[lang]/*.json`

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🚢 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/el-higo-web-nextjs)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables (see [CONFIGURACION_ENV.md](CONFIGURACION_ENV.md))
4. Deploy!

### Environment Variables in Vercel

Don't forget to set these in Vercel Dashboard → Settings → Environment Variables:

- `NEXT_PUBLIC_BASE_URL` - Your production URL
- All other variables from `.env.example`

## 📚 Documentation

- **[SEO_ANALYSIS_REPORT.md](SEO_ANALYSIS_REPORT.md)** - Complete SEO analysis and recommendations
- **[SEO_CHANGES_IMPLEMENTED.md](SEO_CHANGES_IMPLEMENTED.md)** - Detailed list of SEO improvements
- **[CONFIGURACION_ENV.md](CONFIGURACION_ENV.md)** - Environment configuration guide
- **[RESUMEN_FINAL.md](RESUMEN_FINAL.md)** - Final summary (Spanish)

## 🔧 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **i18n:** [next-intl](https://next-intl-docs.vercel.app/)
- **Fonts:** [Geist](https://vercel.com/font) via next/font

## 📊 Performance

- ⚡ **Optimized Images** - Automatic WebP/AVIF conversion
- 🚀 **Fast Build Times** - Turbopack enabled
- 📦 **Code Splitting** - Automatic route-based splitting
- 🎯 **Core Web Vitals** - Optimized for LCP, FID, CLS

## 🐛 Known Issues & TODOs

- [ ] Optimize hero image (`IMG_1941.PNG` - 13.1 MB → < 200 KB)
- [ ] Create Open Graph images (`og-image.jpg`, etc.)
- [ ] Create favicon and icons
- [ ] Convert remaining `<img>` tags in ThePatio and ImageModal
- [ ] Set up Google Search Console
- [ ] Add Google Analytics (optional)

## 🤝 Contributing

This is a private project for El Higo restaurant. If you're part of the team:

1. Create a feature branch
2. Make your changes
3. Test locally
4. Submit a pull request

## 📄 License

Private - All rights reserved by El Higo Restaurant

## 📧 Contact

For questions or issues, contact the development team.

---

**Built with ❤️ for El Higo Restaurant in Granada's Albaicín**
