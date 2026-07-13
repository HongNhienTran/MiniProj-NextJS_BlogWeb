export default function Newsletter() {
    return (
        <section className="my-16 bg-blue-600 text-white p-8 md:p-12 rounded-2xl shadow-sm text-center relative overflow-hidden">
            {/* Khối vẽ trang trí nhỏ phía sau */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-50 blur-2xl"></div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3">Đăng ký nhận bài viết mới</h2>
            <p className="text-blue-100 max-w-md mx-auto mb-6 text-sm md:text-base">
                Nhận thông báo qua email mỗi khi có bài viết công nghệ hoặc chia sẻ mới. Không bài đăng rác.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" >
                <input
                    type="email"
                    placeholder="Địa chỉ email của bạn..."
                    required
                    className="flex-grow rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-lg text-sm transition-colors shrink-0"
                >
                    Đăng ký ngay
                </button>
            </form>
        </section>
    );
}