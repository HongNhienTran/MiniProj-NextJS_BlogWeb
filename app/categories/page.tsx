import { MOCK_POSTS } from '@/data/posts';
import BlogCard from '@/components/BlogCard';

export default function CategoriesPage() {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Tất cả bài viết</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {MOCK_POSTS.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}