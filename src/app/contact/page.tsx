export default function ContactPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>Contact Us</h1>
          <p className='text-xl md:text-2xl text-blue-100'>
            Get in touch with our team
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div className='bg-white rounded-lg shadow-sm p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Send us a message
              </h2>
              <form className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      id='firstName'
                      name='firstName'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='John'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='lastName'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      id='lastName'
                      name='lastName'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Doe'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='john@example.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Subject
                  </label>
                  <select
                    id='subject'
                    name='subject'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  >
                    <option value=''>Select a subject</option>
                    <option value='general'>General Inquiry</option>
                    <option value='technical'>Technical Question</option>
                    <option value='collaboration'>Collaboration</option>
                    <option value='feedback'>Feedback</option>
                    <option value='other'>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Tell us how we can help you...'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium'
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className='space-y-8'>
              <div>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                  Get in touch
                </h2>
                <p className='text-gray-600 mb-8'>
                  We&apos;d love to hear from you! Whether you have a question
                  about our content, want to collaborate, or just want to say
                  hello, we&apos;re here to help.
                </p>
              </div>

              {/* Contact Methods */}
              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-blue-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                      Email
                    </h3>
                    <p className='text-gray-600'>hello@eteblog.com</p>
                    <p className='text-sm text-gray-500'>
                      We&apos;ll get back to you within 24 hours
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-green-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                      Discord
                    </h3>
                    <p className='text-gray-600'>Join our community</p>
                    <p className='text-sm text-gray-500'>
                      Connect with other developers
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-purple-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                      Twitter
                    </h3>
                    <p className='text-gray-600'>@eteblog</p>
                    <p className='text-sm text-gray-500'>
                      Follow us for updates
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className='bg-gray-50 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  Office Hours
                </h3>
                <div className='space-y-2 text-sm text-gray-600'>
                  <div className='flex justify-between'>
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className='text-xs text-gray-500 mt-4'>
                  * All times are in UTC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-6'>
            <div className='bg-gray-50 rounded-lg p-6'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                How can I contribute to the blog?
              </h3>
              <p className='text-gray-600'>
                We welcome guest contributions! Please send us an email with
                your article idea and we&apos;ll get back to you with our
                submission guidelines.
              </p>
            </div>

            <div className='bg-gray-50 rounded-lg p-6'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Can I request a specific topic to be covered?
              </h3>
              <p className='text-gray-600'>
                Absolutely! We love hearing from our readers about topics
                they&apos;d like to see covered. Send us your suggestions and
                we&apos;ll do our best to address them.
              </p>
            </div>

            <div className='bg-gray-50 rounded-lg p-6'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Do you offer consulting services?
              </h3>
              <p className='text-gray-600'>
                Yes, our team members are available for consulting on React,
                Next.js, TypeScript, and web development projects. Contact us
                for more details.
              </p>
            </div>

            <div className='bg-gray-50 rounded-lg p-6'>
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                How often do you publish new content?
              </h3>
              <p className='text-gray-600'>
                We aim to publish 2-3 high-quality articles per week. Subscribe
                to our newsletter to stay updated with our latest content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
