import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-black text-gray-900 tracking-tight">
                    Mini<span className="text-blue-600">.</span><span className="text-blue-600 text-3xl">Blog</span>
                </Link>
                <nav className="hidden sm:flex space-x-8 text-sm font-medium text-gray-600">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Trang chủ</Link>
                    <Link href="/categories" className="hover:text-blue-600 transition-colors">Bài viết</Link>
                </nav>
                <a
                    href="https://github.com/HongNhienTran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm shadow-blue-200"
                >
                    Liên hệ
                </a>
            </div>
        </header>
    );
}