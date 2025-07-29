import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-white shadow-sm border-b border-gray-200'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-500 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>E</span>
            </div>
            <span className='text-xl font-bold text-gray-900'>
              Elizabeth's Wedding Blog
            </span>
          </Link>

          {/* Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='/'
              className='text-gray-700 hover:text-blue-600 transition-colors'
            >
              Home
            </Link>
            <Link
              href='/blog'
              className='text-gray-700 hover:text-blue-600 transition-colors'
            >
              Planning Tips
            </Link>
            <Link
              href='/about'
              className='text-gray-700 hover:text-blue-600 transition-colors'
            >
              About
            </Link>
            <Link
              href='/contact'
              className='text-gray-700 hover:text-blue-600 transition-colors'
            >
              Contact
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className='flex items-center space-x-4'>
            {/* Search */}
            <div className='hidden sm:flex items-center'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search posts...'
                  className='w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500'
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

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <button className='p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100'>
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
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
