import Link from 'next/link';
import Image from 'next/image'; 

export default function TopCategories() {
    const categories = [
        { name: 'Lập trình', img: { link: "/Coding.jpg", alt: 'Icon Lập trình' } },
        { name: 'UI/UX', img: { link: "/UIUX.jpg", alt: 'Icon UI/UX' } },
        { name: 'Công nghệ AI', img: { link: "/AI.jpg", alt: 'Icon Công nghệ AI' } },
        { name: 'Kinh nghiệm', img: { link: "/Experience.jpg", alt: 'Icon Kinh nghiệm' } },
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
                        <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-md group-hover:scale-105 transition-all">
                            <Image
                                src={cat.img.link}
                                alt={cat.img.alt}
                                fill 
                                className="object-cover transition-transform duration-300 group-hover:scale-110" // Tăng kích thước ảnh nhẹ khi hover tạo hiệu ứng chuyên nghiệp
                            />
                        </div>
                        <span className="mt-4 text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {cat.name}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}