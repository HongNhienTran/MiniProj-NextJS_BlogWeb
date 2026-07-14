import { MOCK_POSTS } from '@/data/posts';
import Link from 'next/link';

export default function FeaturedPosts() {
    // Lấy ra tối đa 4 bài viết để làm lưới bài viết phổ biến
    const popularPosts = MOCK_POSTS.slice(0, 4);

    return (
        <section className="bg-gray-50/50 border-y border-gray-100 py-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center space-y-2 mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-950">Bài viết phổ biến không thể bỏ qua</h2>
                    <p className="text-gray-400 text-sm">Những nội dung chất lượng cao thu hút nhiều lượt đọc nhất</p>
                </div>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {popularPosts.map((post) => (
                        <div key={post.id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
                            <div>
                                {/* Giả lập Thumbnail ảnh */}
                                <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-2xl text-gray-300 font-mono">
                                    {post.category === 'UI/UX' ? '🎨' : '📝'}
                                </div>
                                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">{post.category}</span>
                                <h3 className="text-base font-bold text-gray-900 mt-1 line-clamp-2 min-h-[3rem]">
                                    {post.title}
                                </h3>
                                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                                    {post.description}
                                </p>
                            </div>

                            <div className="mt-5">
                                <Link
                                    href={`/categories/${post.slug}`}
                                    className="w-full block text-center border border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 text-xs font-semibold py-2.5 rounded-lg transition-colors"
                                >
                                    Xem chi tiết
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}