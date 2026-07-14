import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '900'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen bg-white text-gray-900`}>
        <Header />
        <main className="flex-grow max-w-5xl w-full mx-auto px-2 pt-8 pb-32">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}