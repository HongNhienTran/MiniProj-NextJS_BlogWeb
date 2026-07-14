export interface Post {
    id: string;
    slug: string;
    title: string;
    description: string;
    content: string;
    category: string;
    date: string;
}

export const MOCK_POSTS: Post[] = [
    {
        id: '1',
        slug: 'hoc-nextjs-cho-nguoi-moi',
        title: 'Học Next.js cho người mới bắt đầu',
        description: 'Hướng dẫn từng bước tiếp cận Next.js App Router hiệu quả từ con số 0.',
        content: 'Next.js App Router mang lại cơ chế routing dựa trên thư mục cực kỳ trực quan. Trong bài viết này, chúng ta sẽ tìm hiểu về Server Components, Client Components và cách tối ưu hóa hiệu năng ứng dụng bằng cách tận dụng tối đa sức mạnh của SSR (Server-Side Rendering).',
        category: 'Lập trình',
        date: '2026-07-13'
    },
    {
        id: '2',
        slug: 'suc-manh-cua-tailwind-css',
        title: 'Sức mạnh của Tailwind CSS trong dự án lớn',
        description: 'Tại sao Tailwind CSS giúp bạn code giao diện nhanh hơn x2 và dễ bảo trì hơn.',
        content: 'Tailwind CSS không chỉ là các utility classes rời rạc. Khi áp dụng vào dự án lớn, việc cấu hình file tailwind.config.js chuẩn chỉnh kết hợp với các design tokens sẽ giúp team của bạn đồng bộ giao diện một cách hoàn hảo mà không làm phình to dung lượng file CSS build ra.',
        category: 'UI/UX',
        date: '2026-07-12'
    },
    {
        id: '3',
        slug: 'typescript-tips-cho-frontend-developer',
        title: 'TypeScript Tips cực hay cho Frontend Developer',
        description: 'Làm chủ Generics, Utility Types và Advanced Types để viết code an toàn hơn.',
        content: 'Sử dụng TypeScript không chỉ đơn thuần là khai báo kiểu dữ liệu primitive. Hãy cùng khám phá sức mạnh của Mapped Types, Conditional Types và cách tối ưu hóa kiểu dữ liệu khi làm việc với các API có cấu trúc phức tạp nhằm hạn chế tối đa lỗi runtime.',
        category: 'Lập trình',
        date: '2026-07-10'
    },
    {
        id: '4',
        slug: 'xu-huong-thiet-ke-giao-dien-hien-dai',
        title: 'Xu hướng thiết kế giao diện hiện đại năm 2026',
        description: 'Khám phá phong cách Bento Grid, Minimalism và hiệu ứng Glassmorphism thịnh hành.',
        content: 'Thiết kế UI/UX hiện đại ngày càng hướng tới sự tối giản nhưng tinh tế. Phong cách Bento Grid (chia ô như hộp cơm Nhật Bản) đang làm mưa làm gió trên các trang landing page của các tập đoàn công nghệ lớn nhờ khả năng phân cấp thị giác cực kỳ tốt.',
        category: 'UI/UX',
        date: '2026-07-08'
    },
    {
        id: '5',
        slug: 'ung-dung-ai-vao-quy-trinh-lap-trinh',
        title: 'Tối ưu hiệu suất bằng cách ứng dụng AI vào lập trình',
        description: 'Cách tận dụng GitHub Copilot và các LLMs để tăng tốc độ gõ code và fix bug.',
        content: 'AI không thay thế lập trình viên, nhưng lập trình viên biết dùng AI sẽ thay thế những người không biết. Bài viết này hướng dẫn cách viết prompt chuẩn để AI sinh code đúng cấu trúc design pattern và cách dùng AI để review các lỗ hổng bảo mật trong code.',
        category: 'Công nghệ AI',
        date: '2026-07-05'
    },
    {
        id: '6',
        slug: 'xay-dung-agent-thong-minh-voi-langchain',
        title: 'Xây dựng AI Agent thông minh với LangChain',
        description: 'Từng bước tích hợp mô hình ngôn ngữ lớn để tự động hóa tác vụ đọc hiểu tài liệu.',
        content: 'LangChain cung cấp một framework tuyệt vời để kết nối LLMs với các nguồn dữ liệu ngoại vi. Chúng ta sẽ cùng nhau thiết kế một Chatbot thông minh theo kiến trúc RAG (Retrieval-Augmented Generation) có khả năng đọc hiểu file PDF nội bộ.',
        category: 'Công nghệ AI',
        date: '2026-07-01'
    },
    {
        id: '7',
        slug: 'kinh-nghiem-quan-ly-project-khi-lam-viec-nhom',
        title: 'Kinh nghiệm quản lý dự án khi làm việc nhóm',
        description: 'Cách phân chia Task, quản lý Git Branch và giải quyết xung đột hiệu quả.',
        content: 'Làm sao để một team nhiều thành viên phối hợp mượt mà không bị chồng chéo code? Câu trả lời nằm ở việc áp dụng quy trình Git Flow chuẩn chỉnh, phân rã công việc (WBS) hợp lý và tổ chức các buổi daily ngắn gọn để kiểm soát tiến độ dự án.',
        category: 'Kinh nghiệm',
        date: '2026-06-28'
    },
    {
        id: '8',
        slug: 'tu-sinh-vien-den-khi-di-lam-can-chuan-bi-gi',
        title: 'Hành trang từ sinh viên đến khi đi làm thực tế',
        description: 'Những kỹ năng mềm và tư duy công nghệ cốt lõi doanh nghiệp luôn tìm kiếm.',
        content: 'Doanh nghiệp không chỉ tìm người giỏi lý thuyết, họ cần người có khả năng giải quyết vấn đề. Việc chủ động tìm tòi công nghệ mới, tư duy đóng gói ứng dụng (Docker) và thói quen viết tài liệu kỹ thuật sạch sẽ là điểm cộng rất lớn giúp bạn nổi bật.',
        category: 'Kinh nghiệm',
        date: '2026-06-20'
    }
];