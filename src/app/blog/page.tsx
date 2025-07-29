import Link from 'next/link';
import { BlogPost } from '@/types/blog';

// This would typically come from a database or CMS
const blogPosts: BlogPost[] = [
  {
    id: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 15',
    excerpt:
      'Learn how to build modern web applications with Next.js 15, featuring the new App Router and improved performance.',
    content:
      'Next.js 15 brings exciting new features including improved performance, better developer experience, and enhanced routing capabilities...',
    date: '2024-01-15',
    author: 'John Doe',
    tags: ['Next.js', 'React', 'Web Development'],
    featured: true,
  },
  {
    id: 'mastering-typescript',
    title: 'Mastering TypeScript for Modern Development',
    excerpt:
      'Discover advanced TypeScript patterns and best practices for building robust applications.',
    content:
      'TypeScript has become the standard for modern JavaScript development, offering type safety and better developer experience...',
    date: '2024-01-10',
    author: 'Jane Smith',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    featured: false,
  },
  {
    id: 'tailwind-css-tips',
    title: 'Essential Tailwind CSS Tips and Tricks',
    excerpt:
      'Unlock the full potential of Tailwind CSS with these essential tips and advanced techniques.',
    content:
      'Tailwind CSS has revolutionized how we approach styling in modern web development...',
    date: '2024-01-05',
    author: 'Mike Johnson',
    tags: ['CSS', 'Tailwind', 'Design'],
    featured: false,
  },
  {
    id: 'react-performance',
    title: 'Optimizing React Performance',
    excerpt:
      'Learn the best practices for optimizing React applications and improving user experience.',
    content:
      "Performance is crucial for modern web applications. In this guide, we'll explore various techniques...",
    date: '2024-01-01',
    author: 'Sarah Wilson',
    tags: ['React', 'Performance', 'Optimization'],
    featured: false,
  },
];

const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

export default function BlogPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>Blog</h1>
            <p className='text-xl md:text-2xl mb-8 text-blue-100'>
              Insights, tutorials, and thoughts on modern web development
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              {allTags.slice(0, 6).map((tag) => (
                <span
                  key={tag}
                  className='bg-white/20 px-4 py-2 rounded-full text-sm'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className='py-8 bg-white border-b border-gray-200'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
            <div className='flex flex-wrap gap-2'>
              <span className='text-sm font-medium text-gray-700'>
                Filter by:
              </span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className='px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors'
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className='relative'>
              <input
                type='text'
                placeholder='Search posts...'
                className='w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center'>
                  <div className='text-4xl'>📝</div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center mb-3'>
                    <span className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                      {post.tags[0]}
                    </span>
                    <span className='text-gray-500 text-sm ml-3'>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  <h3 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2'>
                    <Link
                      href={`/blog/${post.id}`}
                      className='hover:text-blue-600'
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {post.excerpt}
                  </p>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <div className='w-6 h-6 bg-gray-300 rounded-full mr-2'></div>
                      <span className='text-sm text-gray-600'>
                        {post.author}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className='text-blue-600 hover:text-blue-800 text-sm font-medium'
                    >
                      Read More →
                    </Link>
                  </div>

                  {post.featured && (
                    <div className='mt-4'>
                      <span className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className='bg-gray-900 text-white py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Stay Updated</h2>
          <p className='text-gray-300 mb-8'>
            Get the latest posts and insights delivered to your inbox.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
