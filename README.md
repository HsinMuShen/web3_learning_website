# Web3 Learning Website

An educational blog-style website designed to teach beginners (including elementary school-level learners) the fundamentals of Bitcoin and Web3.

## Features

- 🎓 Beginner-friendly educational content
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth scroll-based animations
- ♿ Accessibility-first (WCAG-aware)
- 📝 MDX-based blog system
- 🎨 Elegant, minimal design with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Content**: MDX (Markdown with React components)

## Getting Started

### Prerequisites

- Node.js 18+ (or 20+ recommended)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
web3_learning_website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── terms/             # Terms & Privacy page
│   └── blog/              # Blog pages
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components
│   └── blog/              # Blog-specific components
├── content/               # Blog content (MDX files)
│   └── blog/
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Global styles
```

## Adding Blog Posts

1. Create a new folder in `content/blog/` with your post slug
2. Create an `index.mdx` file with frontmatter:

```yaml
---
title: "Your Post Title"
slug: "your-post-slug"
description: "A brief description"
date: "2024-01-15"
readingTime: 10
category: "Category Name"
featured: false
tags: ["tag1", "tag2"]
---
```

3. Write your content in Markdown below the frontmatter
4. The post will automatically appear on the blog page

## Design System

### Colors

- **Primary**: Orange/amber scale (Bitcoin-inspired)
- **Neutral**: Gray scale for text and backgrounds

### Typography

- **Headings**: Inter (sans-serif)
- **Body**: Merriweather (serif) or Inter
- **Code**: Monospace fonts

### Spacing

- Base unit: 4px
- Consistent spacing scale throughout

## Accessibility

This project follows WCAG 2.1 AA guidelines:

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader compatibility
- Respects `prefers-reduced-motion`

## Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Static generation for blog posts
- Fast page load times

## License

This project is open source and available for educational purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For questions or issues, please open an issue on the repository.

