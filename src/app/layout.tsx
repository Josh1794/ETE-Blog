import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkInProgressBanner from '@/components/WorkInProgressBanner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Elizabeth's Wedding Blog",
  description:
    'A beautiful wedding blog sharing planning tips, vendor recommendations, and inspiration for your special day. From venues to vendors, decor to dresses.',
  keywords: [
    'wedding',
    'wedding planning',
    'wedding inspiration',
    'wedding vendors',
    'wedding decor',
    'bridal',
  ],
  authors: [{ name: 'Elizabeth' }],
  openGraph: {
    title: "Elizabeth's Wedding Blog",
    description:
      'Wedding planning tips, inspiration, and vendor recommendations',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='flex flex-col min-h-screen'>
          <WorkInProgressBanner />
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
