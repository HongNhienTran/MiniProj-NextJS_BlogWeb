import { MOCK_POSTS } from '@/data/posts';
import BlogCard from '@/components/BlogCard';

export default function FeaturedPosts() {
    // Lấy tạm 2 bài viết đầu tiên làm bài viết nổi bật
    const featuredPosts = MOCK_POSTS.slice(0, 2);

    return (
        <section className="my-16">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Bài viết nổi bật</h2>
                    <p className="text-sm text-gray-500 mt-1">Những bài viết chia sẻ sâu sắc không nên bỏ qua</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {featuredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
}