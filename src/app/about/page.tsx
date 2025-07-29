export default function AboutPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-pink-400 to-rose-500 text-white py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            About The Blog
          </h1>
          <p className='text-xl md:text-2xl text-pink-100'>
            Creating Beautiful, Stress-Free Wedding Experiences
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-lg shadow-sm p-8 md:p-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-8'>Our Story</h2>
            <div className='prose prose-lg max-w-none'>
              <p className='text-gray-700 leading-relaxed mb-6'>
                Elizabeth Treimanis Events is a wedding coordination firm
                founded by Elizabeth Treimanis, a former executive assistant in
                luxury fashion and beauty. Her industry experience enables her
                to add a chic, bespoke touch to every event with flawless
                attention to detail.
              </p>
              <p className='text-gray-700 leading-relaxed mb-6'>
                Our capable team is made up of wedding coordinators and
                assistants from diverse professional backgrounds, from executive
                assistants to startup vets to creative industry pros. We bring a
                unique perspective to your wedding, drawing on expert knowledge
                from the wedding industry and beyond.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                From the time you book, we provide tools, guidance, and open
                communication, ensuring a seamless handoff when we step in.
                Whether you book us for partial planning, month-of or day-of
                coordination, we&apos;re here for you with vendor
                recommendations, expert advice, or for quick contract reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
            Our Services
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Service 1 */}
            <div className='text-center'>
              <div className='w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <span className='text-white text-3xl font-bold'>FS</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Full Service Planning
              </h3>
              <p className='text-gray-600 mb-4'>
                Complete Wedding Coordination
              </p>
              <p className='text-sm text-gray-500'>
                For couples who want a stress-free planning experience.
                We&apos;ll guide you through every step, from venue selection
                and vendor booking to design and logistics.
              </p>
            </div>

            {/* Service 2 */}
            <div className='text-center'>
              <div className='w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <span className='text-white text-3xl font-bold'>PP</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Partial Planning
              </h3>
              <p className='text-gray-600 mb-4'>Guided Planning Support</p>
              <p className='text-sm text-gray-500'>
                Perfect for couples who have started planning but need expert
                guidance and vendor connections to bring their vision to life.
              </p>
            </div>

            {/* Service 3 */}
            <div className='text-center'>
              <div className='w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <span className='text-white text-3xl font-bold'>M</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Month-of Coordination
              </h3>
              <p className='text-gray-600 mb-4'>Final Month Support</p>
              <p className='text-sm text-gray-500'>
                We step in during the final month to handle all the details,
                vendor coordination, and ensure your wedding day runs smoothly.
              </p>
            </div>

            {/* Service 4 */}
            <div className='text-center'>
              <div className='w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <span className='text-white text-3xl font-bold'>D</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Day-of Coordination
              </h3>
              <p className='text-gray-600 mb-4'>Wedding Day Management</p>
              <p className='text-sm text-gray-500'>
                We manage your wedding day from start to finish, handling all
                logistics so you can focus on celebrating your special day.
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
              <div className='w-16 h-16 bg-pink-100 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <svg
                  className='w-8 h-8 text-pink-600'
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
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Personal Touch
              </h3>
              <p className='text-gray-600'>
                Every wedding is unique, and we treat it as such. We take the
                time to understand your vision, style, and preferences to create
                a truly personalized experience.
              </p>
            </div>

            {/* Value 2 */}
            <div className='bg-white rounded-lg shadow-sm p-8 text-center'>
              <div className='w-16 h-16 bg-pink-100 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <svg
                  className='w-8 h-8 text-pink-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                Attention to Detail
              </h3>
              <p className='text-gray-600'>
                We believe that the smallest details make the biggest impact.
                From the perfect vendor match to seamless logistics, we ensure
                every element is thoughtfully considered.
              </p>
            </div>

            {/* Value 3 */}
            <div className='bg-white rounded-lg shadow-sm p-8 text-center'>
              <div className='w-16 h-16 bg-pink-100 rounded-full mx-auto mb-6 flex items-center justify-center'>
                <svg
                  className='w-8 h-8 text-pink-600'
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
                Collaborative Approach
              </h3>
              <p className='text-gray-600'>
                We work closely with you and your vendors to create a cohesive
                team. Our collaborative approach ensures everyone is aligned and
                working toward your perfect wedding day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>
            Ready to Start Planning?
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Let&apos;s create the wedding of your dreams together. We&apos;d
            love to hear about your vision!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='mailto:hello@elizabethtreimanisevents.com'
              className='bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors'
            >
              Send us an email
            </a>
            <a
              href='https://www.elizabethtreimanisevents.com'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors'
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
