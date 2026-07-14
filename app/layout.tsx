import './globals.css';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        {/* Header chuyên nghiệp theo mẫu */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-black text-gray-900 tracking-tight">
              Mini<span className="text-blue-600">.</span>
            </Link>

            {/* Menu giữa */}
            <nav className="hidden sm:flex space-x-8 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">Trang chủ</Link>
              <Link href="/categories" className="hover:text-blue-600 transition-colors">Bài viết</Link>
            </nav>

            {/* Nút góc phải thay bằng Liên hệ (GitHub Profile) */}
            <a
              href="https://github.com" // Thay bằng link github thật của bạn tại đây
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm shadow-blue-200"
            >
              Liên hệ
            </a>
          </div>
        </header>

        <main className="flex-grow pb-32 mx-auto max-w-6xl">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}