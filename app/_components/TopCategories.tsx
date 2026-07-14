import Link from 'next/link';

export default function TopCategories() {
    const categories = [
        { name: 'Lập trình', icon: '💻', count: 12 },
        { name: 'UI/UX', icon: '🎨', count: 5 },
        { name: 'Công nghệ AI', icon: '🤖', count: 8 },
        { name: 'Kinh nghiệm', icon: '🚀', count: 4 },
    ];

    return (
        <section className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center space-y-2 mb-12">
                <h2 className="text-3xl font-extrabold text-gray-950">Khám phá theo danh mục</h2>
                <p className="text-gray-400 text-sm">Tìm kiếm bài viết theo từng chủ đề công nghệ bạn quan tâm</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {categories.map((cat) => (
                    <Link
                        key={cat.name}
                        href={`/categories?cat=${encodeURIComponent(cat.name)}`}
                        className="flex flex-col items-center group text-center"
                    >
                        {/* Vòng tròn icon */}
                        <div className="w-24 h-24 rounded-full bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center text-4xl group-hover:border-blue-500 group-hover:shadow-md group-hover:scale-105 transition-all">
                            {cat.icon}
                        </div>
                        <span className="mt-3 text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {cat.name}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}