export default function AboutPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            About ETE Blog
          </h1>
          <p className='text-xl md:text-2xl text-blue-100'>
            Exploring Technology, Engineering, and Everything in Between
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-lg shadow-sm p-8 md:p-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-8'>
              Our Mission
            </h2>
            <div className='prose prose-lg max-w-none'>
              <p className='text-gray-700 leading-relaxed mb-6'>
                ETE Blog is dedicated to sharing knowledge, insights, and
                experiences in the ever-evolving world of technology. We believe
                in the power of education and community-driven learning to push
                the boundaries of what's possible in web development.
              </p>
              <p className='text-gray-700 leading-relaxed mb-6'>
                Our team of passionate developers, designers, and technology
                enthusiasts come together to create content that not only
                teaches but inspires. We focus on modern technologies like
                React, Next.js, TypeScript, and the latest web development
                trends.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                Whether you're a seasoned developer looking to stay current with
                the latest trends, or a newcomer eager to learn the
                fundamentals, our blog provides practical insights, tutorials,
                and thought-provoking discussions to help you grow in your tech
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
            Meet Our Team
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Team Member 1 */}
            <div className='text-center'>
              <div className='w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <span className='text-white text-3xl font-bold'>JD</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>John Doe</h3>
              <p className='text-gray-600 mb-4'>Lead Developer & Founder</p>
              <p className='text-sm text-gray-500'>
                Full-stack developer with 8+ years of experience in React,
                Node.js, and cloud technologies. Passionate about creating
                scalable, user-friendly applications.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className='text-center'>
              <div className='w-32 h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <span className='text-white text-3xl font-bold'>JS</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Jane Smith
              </h3>
              <p className='text-gray-600 mb-4'>TypeScript Expert</p>
              <p className='text-sm text-gray-500'>
                TypeScript enthusiast and software architect. Specializes in
                building robust, type-safe applications and mentoring teams on
                best practices.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className='text-center'>
              <div className='w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <span className='text-white text-3xl font-bold'>MJ</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Mike Johnson
              </h3>
              <p className='text-gray-600 mb-4'>UI/UX Designer</p>
              <p className='text-sm text-gray-500'>
                Creative designer focused on creating beautiful, accessible user
                experiences. Expert in Tailwind CSS and modern design systems.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className='text-center'>
              <div className='w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <span className='text-white text-3xl font-bold'>SW</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Sarah Wilson
              </h3>
              <p className='text-gray-600 mb-4'>Performance Engineer</p>
              <p className='text-sm text-gray-500'>
                Performance optimization specialist with deep knowledge of React
                internals and web performance. Helps teams build faster, more
                efficient applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
            Our Values
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {/* Value 1 */}
            <div className='bg-white rounded-lg shadow-sm p-8 text-center'>
              <div className='w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <svg
                  className='w-8 h-8 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Education First
              </h3>
              <p className='text-gray-600'>
                We believe in the power of knowledge sharing and continuous
                learning. Every article we publish aims to educate and empower
                our readers.
              </p>
            </div>

            {/* Value 2 */}
            <div className='bg-white rounded-lg shadow-sm p-8 text-center'>
              <div className='w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <svg
                  className='w-8 h-8 text-green-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Community Driven
              </h3>
              <p className='text-gray-600'>
                We foster a supportive community where developers can learn,
                share, and grow together. Your feedback and contributions make
                us better.
              </p>
            </div>

            {/* Value 3 */}
            <div className='bg-white rounded-lg shadow-sm p-8 text-center'>
              <div className='w-16 h-16 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <svg
                  className='w-8 h-8 text-purple-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Innovation
              </h3>
              <p className='text-gray-600'>
                We stay at the forefront of technology, exploring new tools,
                frameworks, and methodologies to bring you the latest insights
                and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>
            Get in Touch
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Have questions, suggestions, or want to collaborate? We'd love to
            hear from you!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='mailto:hello@eteblog.com'
              className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors'
            >
              Send us an email
            </a>
            <a
              href='https://twitter.com/eteblog'
              className='bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors'
            >
              Follow us on Twitter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
