import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='md:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>E</span>
              </div>
              <span className='text-xl font-bold'>
                Elizabeth&apos;s Wedding Blog
              </span>
            </div>
            <p className='text-gray-400 mb-6 max-w-md'>
              Sharing wedding planning tips, vendor recommendations, and
              inspiration for your special day.
            </p>
            <div className='flex flex-col space-y-2'>
              <a
                href='https://www.elizabethtreimanisevents.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-white transition-colors'
                title='Elizabeth Treimanis Events Website'
              >
                <p>Elizabeth Treimanis Events</p>
              </a>
              <a
                href='https://bsky.app/profile/elizabethtreimanisevents.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-white transition-colors'
                title='Elizabeth Treimanis Events on BlueSky'
              >
                <p>BlueSky</p>
              </a>
              <a
                href='https://www.zola.com/wedding-vendors/wedding-planners/elizabeth-treimanis-events'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-white transition-colors'
                title='Elizabeth Treimanis Events on Zola'
              >
                <p>Zola</p>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Planning Tips
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center'>
          <p className='text-gray-400'>
            © 2025 Elizabeth&apos;s Wedding Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
