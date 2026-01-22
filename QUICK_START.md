# Quick Start Guide

## ✅ What's Been Built

Your Web3 Learning Website is now set up with:

### ✅ Core Setup
- Next.js 14+ with App Router
- TypeScript configuration
- Tailwind CSS with custom design system
- Framer Motion for animations
- MDX blog system

### ✅ Pages Created
1. **Home Page** (`/`) - Hero section, what you'll learn, how it works
2. **About Page** (`/about`) - Mission, philosophy, what makes it different
3. **Terms & Privacy** (`/terms`) - Legal pages
4. **Blog Listing** (`/blog`) - Lists all blog posts
5. **Blog Post** (`/blog/[slug]`) - Individual blog post pages

### ✅ Components
- **Layout**: Header (with mobile menu), Footer
- **UI**: Button, Card, Section
- **Blog**: BlogCard, BlogList

### ✅ Content
- First blog post: "Bitcoin Whitepaper Explained" (beginner-friendly)

## 🚀 Getting Started

### 1. Install Dependencies (if not already done)
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. View Your Site
- Home: http://localhost:3000
- About: http://localhost:3000/about
- Blog: http://localhost:3000/blog
- First Post: http://localhost:3000/blog/bitcoin-whitepaper-explained

## 📝 Adding New Blog Posts

1. Create a new folder in `content/blog/` with your slug (e.g., `my-new-post`)
2. Create `index.mdx` inside that folder:

```yaml
---
title: "Your Post Title"
slug: "my-new-post"
description: "A brief description"
date: "2024-01-20"
readingTime: 10
category: "Category"
featured: false
tags: ["tag1", "tag2"]
---

Your markdown content here...
```

3. The post will automatically appear on the blog page!

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme.

### Fonts
Fonts are loaded in `app/layout.tsx`. Currently using:
- Inter (headings)
- Merriweather (body text)

### Content
- Blog posts: `content/blog/`
- Images: `public/images/`

## 🐛 Troubleshooting

### TypeScript Errors
If you see TypeScript errors in your IDE:
1. Restart your TypeScript server
2. Run `npm install` again
3. The errors should resolve when you start the dev server

### Node Version Warning
If you see Node version warnings, consider upgrading to Node 18+ or 20+:
```bash
# Using nvm (recommended)
nvm install 20
nvm use 20
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 Next Steps

1. **Add Images**: Place images in `public/images/` and reference them in your MDX files
2. **Customize Design**: Adjust colors, fonts, and spacing in `tailwind.config.ts`
3. **Add More Posts**: Create more educational content following the same structure
4. **Enhance Components**: Add more interactive educational components
5. **Deploy**: Deploy to Vercel, Netlify, or your preferred platform

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [MDX Documentation](https://mdxjs.com/)

Happy coding! 🚀

