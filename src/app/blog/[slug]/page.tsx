import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlogPost } from '@/types/blog';
import { blogPosts } from '@/data/blogPosts';

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
    .filter(
      (p) => p.id !== post.id && p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-white border-b border-gray-200'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='flex items-center space-x-2 mb-6'>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded'
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            {post.title}
          </h1>

          <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
            {post.excerpt}
          </p>

          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
              <div>
                <p className='font-semibold text-gray-900'>{post.author}</p>
                <p className='text-gray-500'>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <button className='text-gray-400 hover:text-gray-600'>
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z'
                  />
                </svg>
              </button>
              <button className='text-gray-400 hover:text-gray-600'>
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <article className='prose prose-lg max-w-none'>
            <div className='bg-white rounded-lg shadow-sm p-8 md:p-12'>
              <div
                className='markdown-content'
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split('\n')
                    .map((line) => {
                      if (line.startsWith('# ')) {
                        return `<h1 class="text-3xl font-bold text-gray-900 mb-6">${line.substring(
                          2
                        )}</h1>`;
                      }
                      if (line.startsWith('## ')) {
                        return `<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">${line.substring(
                          3
                        )}</h2>`;
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="text-xl font-bold text-gray-900 mb-3 mt-6">${line.substring(
                          4
                        )}</h3>`;
                      }
                      if (line.startsWith('```')) {
                        return `<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code>`;
                      }
                      if (line.startsWith('`') && line.endsWith('`')) {
                        return `<code class="bg-gray-100 px-2 py-1 rounded text-sm">${line.substring(
                          1,
                          line.length - 1
                        )}</code>`;
                      }
                      if (line.trim() === '') {
                        return '<br>';
                      }
                      return `<p class="text-gray-700 leading-relaxed mb-4">${line}</p>`;
                    })
                    .join(''),
                }}
              />
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className='py-16 bg-white'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-gray-900 mb-8'>
              Related Posts
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className='bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow'
                >
                  <div className='flex items-center space-x-2 mb-3'>
                    {relatedPost.tags.slice(0, 1).map((tag) => (
                      <span
                        key={tag}
                        className='bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className='hover:text-blue-600'
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>

                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {relatedPost.excerpt}
                  </p>

                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-500'>
                      {new Date(relatedPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className='text-blue-600 hover:text-blue-800 text-sm font-medium'
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
