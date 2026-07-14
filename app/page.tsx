import Hero from './_components/Hero';
import FeaturedPosts from './_components/FeaturedPosts';
import TopCategories from './_components/TopCategories';

export default function HomePage() {
  return (
    <div className="space-y-4">
      {/* 1. Phần Hero giới thiệu */}
      <Hero />

      {/* 2. Phần bài viết phổ biến (Lưới 4 cột chuyên nghiệp) */}
      <FeaturedPosts />

      {/* 3. Khám phá danh mục dạng hình tròn tinh gọn */}
      <TopCategories />
    </div>
  );
}