import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">MiniBlog</Link>
            <nav className="space-x-4">
              <Link href="/" className="hover:text-blue-600">Trang chủ</Link>
              <Link href="/categories" className="hover:text-blue-600">Danh mục</Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow max-w-4xl w-full mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-white border-t border-gray-200 py-4 text-center text-sm text-gray-500">
          © 2026 MiniBlog. Built with Next.js.
        </footer>
      </body>
    </html>
  );
}