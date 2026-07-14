import Link from 'next/link';

export default function Hero() {
    return (
        <section className="max-w-5xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Cột trái: Nội dung chữ */}
            <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl font-black text-gray-950 leading-tight">
                    Trở thành Chuyên gia cùng <span className="text-blue-600">Kiến thức</span> & <span className="text-blue-500">Kinh nghiệm</span> Thực chiến
                </h1>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
                    Từ các hướng dẫn ngắn gọn dễ hiểu đến các bài phân tích chuyên sâu kiến trúc hệ thống. Chúng tôi có mọi thứ cho mọi cấp độ.
                </p>
                <div>
                    <Link
                        href="/categories"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-full transition-colors inline-block shadow-lg shadow-blue-100"
                    >
                        Khám phá bài viết
                    </Link>
                </div>
            </div>

            {/* Cột phải: Hình ảnh minh họa lớn */}
            <div className="flex justify-center items-center">
                <div className="relative w-full max-w-sm aspect-square bg-gradient-to-tr from-blue-50 to-blue-100/50 rounded-full flex items-center justify-center p-8">
                    {/* Bạn có thể thay thế bằng thẻ <Image /> thật khi có file ảnh phối cảnh code/UI */}
                    <div className="text-8xl select-none filter drop-shadow-xl animate-bounce duration-1000">💻</div>
                </div>
            </div>
        </section>
    );
}