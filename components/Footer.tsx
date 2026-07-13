import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Phần nội dung chính của Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          
          {/* Cột 1: Giới thiệu ngắn & Thương hiệu */}
          <div className="space-y-3">
            <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
              Mini<span className="text-blue-600">Blog</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Nền tảng chia sẻ kiến thức lập trình, thiết kế UI/UX và các giải pháp công nghệ hiện đại cho lập trình viên.
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh hệ thống */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Khám phá
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Tất cả bài viết
                </Link>
              </li>
              <li>
                <Link href="/categories?cat=L%E1%BA%ADp%20tr%C3%ACnh" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Góc Lập Trình
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Kết nối & Bản quyền pháp lý */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Mạng xã hội
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Thanh Bản quyền & Chân trang dưới cùng */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 MiniBlog. Tất cả các quyền được bảo lưu.</p>
          <p>
            Developed with <span className="text-blue-500">Next.js App Router</span> & <span className="text-blue-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}