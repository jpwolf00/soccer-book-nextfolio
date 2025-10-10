# Soccer Book Website - Nextfolio Edition

A modern, fast, and professional website for your interactive soccer instruction book. Built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 What's Included

- ✅ **Modern, clean design** based on Nextfolio template
- ✅ **Homepage** with hero section and book overview
- ✅ **Interactive Tactics page** with URL parameter support for QR codes
- ✅ **Blog system** using MDX (Markdown + React components)
- ✅ **Responsive navigation** and footer
- ✅ **SEO optimized** with metadata
- ✅ **Dark mode ready** (can be enabled)
- ✅ **Fast & lightweight** - optimized for performance

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or pnpm

### Installation

1. Extract this folder to your computer

2. Install dependencies:
```bash
cd soccer-book-nextfolio
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

## 📁 Project Structure

```
soccer-book-nextfolio/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout with nav/footer
│   ├── globals.css           # Global styles
│   ├── config.ts             # Site configuration
│   ├── blog/                 # Blog pages (add later)
│   ├── tactics/              # Interactive tactics page
│   │   └── page.tsx
│   ├── book/                 # Book information page
│   ├── moments/              # Historic moments page
│   └── about/                # Author bio page
├── components/
│   ├── navigation.tsx        # Header navigation
│   └── footer.tsx            # Site footer
├── content/                  # Blog posts go here (MDX files)
├── public/                   # Static assets (images, etc.)
└── package.json
```

## ⚙️ Configuration

### 1. Update Site Config

Edit `app/config.ts` to customize your site:

```typescript
export const siteConfig = {
  name: "Your Book Title",
  author: "Your Name",
  description: "Your book description...",
  url: "https://yourdomain.com",
  links: {
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourname",
    amazon: "https://amazon.com/your-book-link",
  },
}
```

### 2. Add Your Content

The homepage and tactics page are already built. You need to create:

#### Book Page (`app/book/page.tsx`)
Copy the structure from the old rough draft or create a similar layout showing:
- Book cover
- Chapter descriptions
- Purchase links
- What makes it different

#### Moments Page (`app/moments/page.tsx`)
Create a page with embedded YouTube videos organized by chapter

#### About Page (`app/about/page.tsx`)
Your author bio and contact information

#### Blog Posts (`content/` folder)
Create MDX files for blog posts:

```markdown
---
title: "Understanding the Offside Rule"
date: "2025-01-15"
description: "A deep dive into soccer's most misunderstood rule"
---

Your content here with full Markdown support...

You can even embed React components!
```

## 🎨 Customization

### Colors

The site uses a "soccer green" color scheme. To change colors, edit `tailwind.config.ts`:

```typescript
colors: {
  'soccer-green': {
    500: '#22c55e', // Main green
    600: '#16a34a', // Darker green
    // ... etc
  },
}
```

### Fonts

Currently using Inter font. To change, edit `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'
```

### Navigation

Add or remove menu items in `components/navigation.tsx`:

```typescript
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  // Add more...
]
```

## 🔗 QR Code Integration

The tactics page supports URL parameters for QR codes:

```
yoursite.com/tactics?scenario=accordion
yoursite.com/tactics?scenario=offside-basics
yoursite.com/tactics?scenario=inverted-winger
```

To add more scenarios, edit `app/tactics/page.tsx` and add to the `scenarios` object.

## 📝 Adding Blog Posts

1. Create a new `.mdx` file in `content/` folder:

```markdown
---
title: "Your Post Title"
date: "2025-01-15"
description: "Brief description"
---

# Your Content Here

Regular Markdown works great.

You can also embed your interactive components!
```

2. The blog will automatically list your posts

## 🧩 Embedding Your Interactive Tool

### Option 1: React Component

1. Create your tool as a React component in `components/`:

```typescript
// components/tactics-animator.tsx
export function TacticsAnimator({ scenario }: { scenario: string }) {
  return (
    <div>
      {/* Your interactive animation code */}
    </div>
  )
}
```

2. Import and use it in `app/tactics/page.tsx`:

```typescript
import { TacticsAnimator } from '@/components/tactics-animator'

// Replace the placeholder div with:
<TacticsAnimator scenario={selectedScenario} />
```

### Option 2: iframe Embed

If your tool is hosted elsewhere:

```typescript
<iframe
  src={`https://your-tool-url.com?scenario=${selectedScenario}`}
  className="w-full h-[500px]"
/>
```

## 🎥 Adding YouTube Videos

In your moments page:

```typescript
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video title"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="w-full aspect-video"
/>
```

## 📦 Production Build

When ready to deploy:

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended - FREE)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Vercel will auto-detect Next.js and handle everything. Your site will be live at `your-project.vercel.app`

### Custom Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## 🎯 Next Steps

1. **Customize `app/config.ts`** with your information
2. **Add your content** to remaining pages (book, moments, about)
3. **Test the tactics page** with different URL parameters
4. **Integrate your interactive tool** component
5. **Add blog posts** in the `content/` folder
6. **Add images** to `public/` folder
7. **Test on mobile devices**
8. **Deploy to Vercel**

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Vercel Deployment Docs](https://vercel.com/docs)

## 🐛 Troubleshooting

### "npm is not recognized"
- Install Node.js from nodejs.org
- Restart your terminal

### Tailwind styles not working
- Make sure you ran `npm install`
- Check that `globals.css` is imported in `layout.tsx`

### Page not found
- Make sure the folder has a `page.tsx` file
- Check that the file is in the `app/` directory

## 💡 Tips

- **Start small**: Get the homepage working, then add pages one by one
- **Test locally**: Always run `npm run dev` to preview changes
- **Use git**: Initialize a git repository to track changes
- **Mobile first**: Always check mobile view (Chrome DevTools)
- **Optimize images**: Use Next.js Image component for better performance

## 📞 Need Help?

This template is based on the Nextfolio project. For Next.js questions, check the official docs or the Next.js Discord community.

---

**Ready to build?** Start by editing `app/config.ts` and `app/page.tsx` to make it yours!
