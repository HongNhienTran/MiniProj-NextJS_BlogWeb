import Link from 'next/link';

export default function TopCategories() {
    // Danh sách các danh mục định sẵn của bạn
    const topics = [
        { name: 'Lập trình', icon: '💻', count: 12 },
        { name: 'UI/UX', icon: '🎨', count: 5 },
        { name: 'Công nghệ AI', icon: '🤖', count: 8 },
        { name: 'Kinh nghiệm', icon: '🚀', count: 4 },
    ];

    return (
        <section className="my-16 bg-gray-100/60 p-8 rounded-2xl border border-gray-200/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Khám phá theo chủ đề</h2>
            <p className="text-sm text-gray-500 mb-6">Tìm kiếm bài viết theo đúng mối quan tâm của bạn</p>

            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
                {topics.map((topic) => (
                    <Link
                        key={topic.name}
                        href={`/categories?cat=${encodeURIComponent(topic.name)}`} // Sau này có thể bắt query param này để tự lọc luôn
                        className="flex flex-col items-center bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-blue-500 hover:shadow transition-all group text-center"
                    >
                        <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{topic.icon}</span>
                        <span className="font-semibold text-gray-800 text-sm">{topic.name}</span>
                        <span className="text-xs text-gray-400 mt-1">{topic.count} bài viết</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}