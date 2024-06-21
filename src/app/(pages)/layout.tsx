import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/_components/Header';
import Footer from '@/_components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DiGi Market',
  description: 'find and publich your digital product in DiGi Market',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='sm:scroll-smooth'>
      <head>
        <link rel='icon' href='/icon.png' />
      </head>
      <body className={`min-h-screen bg-slate-900 text-white`}>
        <Header />
        <div className='relative top-[50px] min-h-[calc(100vh-50px-170px)] p-10'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
