import Hero from './_components/Hero';
import FeaturedPosts from './_components/FeaturedPosts';
import TopCategories from './_components/TopCategories';

export default function HomePage() {
  return (
    <div className="space-y-4">
      <Hero />
      <FeaturedPosts />
      <TopCategories />
    </div>
  );
}