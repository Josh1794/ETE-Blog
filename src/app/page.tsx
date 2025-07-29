import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import { blogPosts } from '@/data/blogPosts';

export default function Home() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Elizabeth's Wedding Blog
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-blue-100'>
              Wedding Planning Tips, Inspiration & Vendor Recommendations
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <span className='bg-white/20 px-4 py-2 rounded-full text-sm'>
                Wedding Planning
              </span>
              <span className='bg-white/20 px-4 py-2 rounded-full text-sm'>
                Vendor Reviews
              </span>
              <span className='bg-white/20 px-4 py-2 rounded-full text-sm'>
                Decor Inspiration
              </span>
              <span className='bg-white/20 px-4 py-2 rounded-full text-sm'>
                Bridal Fashion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className='py-16'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-8'>
              Featured Wedding Tip
            </h2>
            <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <div className='md:flex'>
                <div className='md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center'>
                  <div className='text-white text-center p-8'>
                    <div className='text-6xl font-bold mb-4'>🚀</div>
                    <div className='text-sm opacity-90'>Featured</div>
                  </div>
                </div>
                <div className='md:w-2/3 p-8'>
                  <div className='flex items-center mb-4'>
                    <span className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                      {featuredPost.tags[0]}
                    </span>
                    <span className='text-gray-500 text-sm ml-4'>
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    {featuredPost.title}
                  </h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    {featuredPost.excerpt}
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <div className='w-8 h-8 bg-gray-300 rounded-full mr-3'></div>
                      <span className='text-sm text-gray-600'>
                        {featuredPost.author}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-8'>
            Recent Wedding Tips
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center'>
                  <div className='text-4xl'>📝</div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center mb-3'>
                    <span className='bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded'>
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
                    {post.title}
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
            Get the latest wedding planning tips and inspiration delivered to
            your inbox.
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
