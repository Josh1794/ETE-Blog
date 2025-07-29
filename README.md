# ETE Blog

A modern, responsive blog built with Next.js 15, TypeScript, and Tailwind CSS. This blog features a beautiful design, dynamic routing, and comprehensive content management.

## Features

- 🎨 **Modern Design**: Clean, responsive design with beautiful gradients and typography
- 📱 **Mobile-First**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Built with Next.js 15 for optimal performance
- 🔍 **SEO Optimized**: Meta tags, structured data, and semantic HTML
- 📝 **Rich Content**: Support for markdown content with syntax highlighting
- 🏷️ **Tag System**: Categorize and filter posts by tags
- 🔗 **Dynamic Routing**: Individual blog post pages with related posts
- 📧 **Contact Form**: Interactive contact form with validation
- 📧 **Newsletter Signup**: Email subscription functionality
- 🎯 **Search Ready**: Search functionality for blog posts
- 🌙 **Dark Mode Ready**: CSS variables for easy dark mode implementation

## Pages

- **Homepage**: Featured posts, recent posts, and newsletter signup
- **Blog Listing**: All posts with filtering and search
- **Individual Post**: Full blog post with related posts
- **About**: Team information and mission statement
- **Contact**: Contact form and contact information

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans and Geist Mono
- **Icons**: Heroicons (SVG)
- **Deployment**: Vercel ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ETE-Blog
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── blog/
│   │   ├── page.tsx          # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx      # Individual blog post page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── Header.tsx            # Navigation header
│   └── Footer.tsx            # Site footer
└── types/
    └── blog.ts               # TypeScript interfaces
```

## Content Management

### Adding New Blog Posts

1. Add a new blog post object to the `blogPosts` array in the relevant files:

   - `src/app/page.tsx` (for homepage)
   - `src/app/blog/page.tsx` (for blog listing)
   - `src/app/blog/[slug]/page.tsx` (for individual posts)

2. Follow the `BlogPost` interface structure:

```typescript
{
  id: "unique-slug",
  title: "Post Title",
  excerpt: "Brief description",
  content: "Full markdown content",
  date: "YYYY-MM-DD",
  author: "Author Name",
  tags: ["tag1", "tag2"],
  featured: boolean
}
```

### Blog Post Content

Blog posts support markdown-style content with the following features:

- Headers (H1, H2, H3)
- Paragraphs
- Code blocks with syntax highlighting
- Inline code
- Lists (ordered and unordered)
- Links

## Customization

### Colors and Theme

The blog uses a blue-purple gradient theme. You can customize colors by modifying:

- Tailwind CSS classes in components
- CSS variables in `globals.css`
- Gradient classes in hero sections

### Typography

The blog uses Geist fonts. You can change fonts by:

1. Importing new fonts in `layout.tsx`
2. Updating font variables in `globals.css`
3. Modifying Tailwind font classes

### Layout

The layout is built with Tailwind CSS utilities. Key layout components:

- `Header.tsx`: Navigation and search
- `Footer.tsx`: Site footer with links
- Individual page components for content

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The blog can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, email hello@eteblog.com or create an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
