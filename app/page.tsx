import Link from 'next/link';
import FeaturedPosts from './_components/FeaturedPosts';
import TopCategories from './_components/TopCategories';
import Newsletter from './_components/Newsletter';

export default function HomePage() {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <div className="text-center py-16 md:py-24 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gray-900 leading-tight">
          Chào mừng đến với <span className="text-blue-600">MiniBlog</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
          Nơi chia sẻ những góc nhìn, kiến thức thực tế về phát triển phần mềm, UI/UX tinh tế và những giải pháp công nghệ hiện đại.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/categories"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            Đọc bài viết
          </Link>
          <a
            href="#topics"
            className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Xem chủ đề
          </a>
        </div>
      </div>

      {/* 2. FEATURED POSTS */}
      <FeaturedPosts />

      {/* 3. TOP CATEGORIES */}
      <div id="topics">
        <TopCategories />
      </div>

      {/* 4. NEWSLETTER */}
      <Newsletter />
    </div>
  );
}