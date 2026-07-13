import Link from 'next/link';
import { Post } from '@/data/posts';

export default function BlogCard({ post }: { post: Post }) {
    return (
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-blue-600 uppercase">{post.category}</span>
            <h3 className="text-xl font-bold mt-2 text-gray-800">{post.title}</h3>
            <p className="text-gray-600 mt-2 line-clamp-2">{post.description}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-400">{post.date}</span>
                <Link
                    href={`/categories/${post.slug}`}
                    className="text-blue-500 hover:underline font-medium text-sm"
                >
                    Xem chi tiết →
                </Link>
            </div>
        </div>
    );
}