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
        description: 'Hướng dẫn từng bước tiếp cận Next.js App Router hiệu quả.',
        content: 'Đây là nội dung chi tiết bài viết về Next.js...',
        category: 'Lập trình',
        date: '2026-07-13'
    },
    {
        id: '2',
        slug: 'suc-manh-cua-tailwind-css',
        title: 'Sức mạnh của Tailwind CSS',
        description: 'Tại sao Tailwind CSS giúp bạn code giao diện nhanh hơn x2.',
        content: 'Đây là nội dung chi tiết bài viết về Tailwind CSS...',
        category: 'UI/UX',
        date: '2026-07-12'
    }
];