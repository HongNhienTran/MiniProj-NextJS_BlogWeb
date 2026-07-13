import { MOCK_POSTS } from '@/data/posts';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function PostDetailPage({ params }: Props) {
    const { slug } = await params;
    const post = MOCK_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound(); // Trả về trang 404 nếu không tìm thấy slug
    }

    return (
        <article className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <span className="text-sm font-semibold text-blue-600 uppercase">{post.category}</span>
            <h1 className="text-3xl font-bold mt-2 mb-4 text-gray-900">{post.title}</h1>
            <p className="text-sm text-gray-400 mb-6">Ngày đăng: {post.date}</p>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
                <p>{post.content}</p>
            </div>
        </article>
    );
}