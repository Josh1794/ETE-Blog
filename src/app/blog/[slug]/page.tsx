import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPost } from "@/types/blog";

// This would typically come from a database or CMS
const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    excerpt: "Learn how to build modern web applications with Next.js 15, featuring the new App Router and improved performance.",
    content: `
# Getting Started with Next.js 15

Next.js 15 brings exciting new features including improved performance, better developer experience, and enhanced routing capabilities. In this comprehensive guide, we'll explore everything you need to know to get started with the latest version of Next.js.

## What's New in Next.js 15?

Next.js 15 introduces several groundbreaking features that make it even more powerful for building modern web applications:

### 1. Enhanced App Router
The App Router has been significantly improved with better performance and more intuitive APIs. The new routing system provides:
- Improved file-based routing
- Better support for nested layouts
- Enhanced loading and error states

### 2. Improved Performance
Next.js 15 includes several performance optimizations:
- Faster build times
- Reduced bundle sizes
- Better caching strategies

### 3. Developer Experience
The developer experience has been enhanced with:
- Better error messages
- Improved debugging tools
- Enhanced TypeScript support

## Setting Up Your First Next.js 15 Project

Let's create a new Next.js 15 project and explore its features:

\`\`\`bash
npx create-next-app@latest my-nextjs-app
cd my-nextjs-app
npm run dev
\`\`\`

## Key Features to Explore

### Server Components
Server Components are a game-changer for React applications:

\`\`\`tsx
// app/page.tsx
export default async function HomePage() {
  const data = await fetchData(); // This runs on the server

  return (
    <div>
      <h1>Welcome to Next.js 15</h1>
      <p>Data: {data}</p>
    </div>
  );
}
\`\`\`

### Client Components
For interactive components, use the 'use client' directive:

\`\`\`tsx
'use client'

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## Best Practices

1. **Use Server Components by Default**: Only use Client Components when you need interactivity
2. **Optimize Images**: Use Next.js Image component for automatic optimization
3. **Implement Proper Loading States**: Use Suspense boundaries for better UX
4. **Leverage Caching**: Take advantage of Next.js built-in caching mechanisms

## Conclusion

Next.js 15 represents a significant step forward in the React ecosystem. With its improved performance, better developer experience, and powerful new features, it's the perfect choice for building modern web applications.

Start exploring Next.js 15 today and discover the future of React development!
    `,
    date: "2024-01-15",
    author: "John Doe",
    tags: ["Next.js", "React", "Web Development"],
    featured: true
  },
  {
    id: "mastering-typescript",
    title: "Mastering TypeScript for Modern Development",
    excerpt: "Discover advanced TypeScript patterns and best practices for building robust applications.",
    content: `
# Mastering TypeScript for Modern Development

TypeScript has become the standard for modern JavaScript development, offering type safety and better developer experience. In this comprehensive guide, we'll explore advanced TypeScript patterns and best practices.

## Why TypeScript?

TypeScript provides several benefits over plain JavaScript:
- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Improved Maintainability**: Self-documenting code
- **Enhanced Team Collaboration**: Clear interfaces and contracts

## Advanced Type Patterns

### 1. Generic Types
Generics allow you to create reusable components:

\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  return response.json();
}

// Usage
const userData = await fetchData<User>('/api/users/1');
\`\`\`

### 2. Utility Types
TypeScript provides powerful utility types:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// Make all properties optional
type PartialUser = Partial<User>;

// Pick specific properties
type UserBasicInfo = Pick<User, 'name' | 'email'>;

// Omit specific properties
type UserWithoutId = Omit<User, 'id'>;
\`\`\`

### 3. Conditional Types
Conditional types enable dynamic type creation:

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type Result<T> = T extends string ? 'string' : 'other';

type StringResult = Result<string>; // 'string'
type NumberResult = Result<number>; // 'other'
\`\`\`

## Best Practices

1. **Use Strict Mode**: Enable all strict type checking options
2. **Prefer Interfaces for Objects**: Use interfaces for object shapes
3. **Use Type Aliases for Unions**: Use type aliases for union types
4. **Avoid 'any'**: Use 'unknown' instead when you don't know the type
5. **Leverage Type Inference**: Let TypeScript infer types when possible

## Conclusion

TypeScript is an essential tool for modern development. By mastering these patterns and best practices, you'll be able to build more robust and maintainable applications.
    `,
    date: "2024-01-10",
    author: "Jane Smith",
    tags: ["TypeScript", "JavaScript", "Programming"],
    featured: false
  },
  {
    id: "tailwind-css-tips",
    title: "Essential Tailwind CSS Tips and Tricks",
    excerpt: "Unlock the full potential of Tailwind CSS with these essential tips and advanced techniques.",
    content: `
# Essential Tailwind CSS Tips and Tricks

Tailwind CSS has revolutionized how we approach styling in modern web development. In this guide, we'll explore essential tips and advanced techniques to unlock its full potential.

## Why Tailwind CSS?

Tailwind CSS offers several advantages:
- **Utility-First**: Rapid development with utility classes
- **Consistent Design**: Built-in design system
- **Responsive by Default**: Mobile-first responsive design
- **Highly Customizable**: Easy to extend and customize

## Essential Tips

### 1. Custom Component Extraction
Extract common patterns into reusable components:

\`\`\`tsx
// components/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', children }: ButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
}
\`\`\`

### 2. Responsive Design Patterns
Use responsive prefixes effectively:

\`\`\`tsx
<div className="
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-4
  md:gap-6
  lg:gap-8
">
  {/* Grid items */}
</div>
\`\`\`

### 3. Dark Mode Support
Implement dark mode with ease:

\`\`\`tsx
<div className="
  bg-white
  dark:bg-gray-900
  text-gray-900
  dark:text-white
  border
  border-gray-200
  dark:border-gray-700
">
  <h1 className="text-2xl font-bold mb-4">Dark Mode Ready</h1>
  <p className="text-gray-600 dark:text-gray-300">
    This content adapts to light and dark themes.
  </p>
</div>
\`\`\`

## Advanced Techniques

### 1. Custom Animations
Create custom animations with Tailwind:

\`\`\`css
/* tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out'
      }
    }
  }
}
\`\`\`

### 2. Arbitrary Values
Use arbitrary values for one-off styles:

\`\`\`tsx
<div className="
  w-[calc(100%-2rem)]
  h-[200px]
  bg-[#ff6b6b]
  rounded-[20px]
">
  Custom dimensions and colors
</div>
\`\`\`

## Best Practices

1. **Use Semantic Class Names**: Group related utilities with comments
2. **Leverage Component Extraction**: Don't repeat complex class combinations
3. **Optimize for Production**: Use PurgeCSS to remove unused styles
4. **Maintain Consistency**: Use design tokens and spacing scales
5. **Mobile-First**: Start with mobile styles and enhance for larger screens

## Conclusion

Tailwind CSS is a powerful tool that can significantly improve your development workflow. By mastering these tips and techniques, you'll be able to build beautiful, responsive interfaces faster than ever before.
    `,
    date: "2024-01-05",
    author: "Mike Johnson",
    tags: ["CSS", "Tailwind", "Design"],
    featured: false
  },
  {
    id: "react-performance",
    title: "Optimizing React Performance",
    excerpt: "Learn the best practices for optimizing React applications and improving user experience.",
    content: `
# Optimizing React Performance

Performance is crucial for modern web applications. In this guide, we'll explore various techniques to optimize React applications and improve user experience.

## Why Performance Matters

Performance directly impacts user experience:
- **Faster Load Times**: Users expect instant responses
- **Better SEO**: Search engines favor fast websites
- **Reduced Bounce Rates**: Slow sites drive users away
- **Improved Conversions**: Fast sites convert better

## Key Optimization Techniques

### 1. React.memo for Component Memoization
Prevent unnecessary re-renders with React.memo:

\`\`\`tsx
import React from 'react';

interface UserCardProps {
  user: {
    id: number;
    name: string;
    email: string;
  };
  onSelect: (id: number) => void;
}

const UserCard = React.memo(({ user, onSelect }: UserCardProps) => {
  console.log('UserCard rendered:', user.name);

  return (
    <div className="p-4 border rounded-lg hover:bg-gray-50">
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
      <button
        onClick={() => onSelect(user.id)}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Select
      </button>
    </div>
  );
});

UserCard.displayName = 'UserCard';
\`\`\`

### 2. useMemo for Expensive Calculations
Memoize expensive calculations:

\`\`\`tsx
import React, { useMemo } from 'react';

interface DataAnalysisProps {
  data: number[];
  threshold: number;
}

function DataAnalysis({ data, threshold }: DataAnalysisProps) {
  const analysis = useMemo(() => {
    console.log('Performing expensive analysis...');

    const sum = data.reduce((acc, val) => acc + val, 0);
    const average = sum / data.length;
    const aboveThreshold = data.filter(val => val > threshold).length;

    return {
      sum,
      average,
      aboveThreshold,
      percentage: (aboveThreshold / data.length) * 100
    };
  }, [data, threshold]); // Only recalculate when data or threshold changes

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="font-semibold mb-2">Analysis Results</h3>
      <p>Sum: {analysis.sum}</p>
      <p>Average: {analysis.average.toFixed(2)}</p>
      <p>Above Threshold: {analysis.aboveThreshold}</p>
      <p>Percentage: {analysis.percentage.toFixed(1)}%</p>
    </div>
  );
}
\`\`\`

### 3. useCallback for Function Memoization
Memoize callback functions:

\`\`\`tsx
import React, { useCallback, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John', selected: false },
    { id: 2, name: 'Jane', selected: false },
    { id: 3, name: 'Bob', selected: false }
  ]);

  const handleUserSelect = useCallback((userId: number) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId
          ? { ...user, selected: !user.selected }
          : user
      )
    );
  }, []); // Empty dependency array since it doesn't depend on any props or state

  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onSelect={handleUserSelect}
        />
      ))}
    </div>
  );
}
\`\`\`

### 4. Code Splitting with React.lazy
Implement code splitting for better initial load times:

\`\`\`tsx
import React, { Suspense, lazy } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));
const Analytics = lazy(() => import('./Analytics'));

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'settings':
        return <Settings />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <nav className="flex space-x-4 mb-4">
        <button onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
        <button onClick={() => setCurrentPage('settings')}>Settings</button>
        <button onClick={() => setCurrentPage('analytics')}>Analytics</button>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        {renderPage()}
      </Suspense>
    </div>
  );
}
\`\`\`

## Performance Monitoring

### 1. React DevTools Profiler
Use the React DevTools Profiler to identify performance bottlenecks:

\`\`\`tsx
import { Profiler } from 'react';

function onRenderCallback(
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
) {
  console.log('Component:', id);
  console.log('Phase:', phase);
  console.log('Actual Duration:', actualDuration);
  console.log('Base Duration:', baseDuration);
}

function MyApp() {
  return (
    <Profiler id="MyApp" onRender={onRenderCallback}>
      {/* Your app components */}
    </Profiler>
  );
}
\`\`\`

### 2. Bundle Analysis
Analyze your bundle size:

\`\`\`bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  // your next config
});

# Run analysis
ANALYZE=true npm run build
\`\`\`

## Best Practices

1. **Measure First**: Always measure performance before optimizing
2. **Use React DevTools**: Leverage the Profiler to identify bottlenecks
3. **Implement Code Splitting**: Split your code into smaller chunks
4. **Optimize Images**: Use next/image for automatic optimization
5. **Minimize Bundle Size**: Remove unused dependencies
6. **Use Production Builds**: Always test with production builds

## Conclusion

Performance optimization is an ongoing process. By implementing these techniques and monitoring your application's performance, you'll be able to provide a better user experience and stay competitive in today's fast-paced web environment.
    `,
    date: "2024-01-01",
    author: "Sarah Wilson",
    tags: ["React", "Performance", "Optimization"],
    featured: false
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center space-x-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <div
                className="markdown-content"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('# ')) {
                        return `<h1 class="text-3xl font-bold text-gray-900 mb-6">${line.substring(2)}</h1>`;
                      }
                      if (line.startsWith('## ')) {
                        return `<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">${line.substring(3)}</h2>`;
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="text-xl font-bold text-gray-900 mb-3 mt-6">${line.substring(4)}</h3>`;
                      }
                      if (line.startsWith('```')) {
                        return `<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code>`;
                      }
                      if (line.startsWith('`') && line.endsWith('`')) {
                        return `<code class="bg-gray-100 px-2 py-1 rounded text-sm">${line.substring(1, line.length - 1)}</code>`;
                      }
                      if (line.trim() === '') {
                        return '<br>';
                      }
                      return `<p class="text-gray-700 leading-relaxed mb-4">${line}</p>`;
                    })
                    .join('')
                }}
              />
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-2 mb-3">
                    {relatedPost.tags.slice(0, 1).map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <Link href={`/blog/${relatedPost.id}`} className="hover:text-blue-600">
                      {relatedPost.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(relatedPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}