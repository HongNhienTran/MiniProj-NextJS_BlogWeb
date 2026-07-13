import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900">
        Chào mừng bạn đến với <span className="text-blue-600">MiniBlog</span>
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Nơi chia sẻ những bài viết kiến thức lập trình, kinh nghiệm phát triển bản thân và các công nghệ mới nhất.
      </p>
      <div className="mt-10">
        <Link
          href="/categories"
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Khám phá bài viết ngay
        </Link>
      </div>
    </div>
  );
}