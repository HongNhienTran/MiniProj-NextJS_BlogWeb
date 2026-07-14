# 🚀 MiniBlog - Next.js Learning 

Một dự án Web Blog đơn giản được xây dựng với mục đích nghiên cứu, học tập các tính năng cốt lõi của **Next.js (App Router)** 
---
## 🌐 Live Demo
Dự án hiện đã được deploy trực tiếp trên **Vercel**. Bạn có thể truy cập và trải nghiệm giao diện thực tế tại đây:
👉 **[Tên-Dự-Án-Của-Bạn.vercel.app](https://mini-blog-swart-pi.vercel.app/)

## 📌 Mục Tiêu Dự Án (Project Purpose)

Repo này được tạo ra như một môi trường thực hành độc lập nhằm:
- **Làm chủ Next.js:** Tiếp cận cấu trúc thư mục App Router, hiểu cơ chế hoạt động của Server/Client Components, Caching, và Dynamic Routing.
- **Quản lý cấu trúc code:** Học cách chia nhỏ Component một cách khoa học, tách biệt logic helpers để mã nguồn dễ bảo trì và mở rộng trong tương lai.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (Tối ưu hóa hiển thị Tiếng Việt, chống lỗi font hệ thống)
- **Icons/Graphics:** Dữ liệu hình ảnh được cấu hình trực quan tại thư mục `public`

---

## 🏗️ Cấu Trúc Thư Mục Hệ Thống (Project Structure)

Dự án tuân thủ nghiêm ngặt mô hình phân rã component để nâng cao khả năng tái sử dụng:

```text
src/
├── app/
│   ├── layout.tsx          # Layout tổng (Cấu hình Font Inter, kết hợp Header/Footer)
│   ├── page.tsx            # Trang Chủ (Hero section 2 cột, Featured Slider, Categories tròn)
│   ├── categories/
│   │   ├── page.tsx        # Trang Danh mục (Tích hợp bộ lọc Client-side)
│   │   └── [slug]/
│   │       └── page.tsx    # Trang Chi tiết bài viết (Dynamic Route xử lý slug từ URL)
│   └── _components/        # Sub-components dành riêng cho cấu trúc Trang Chủ
├── components/             # Các UI Components dùng chung toàn hệ thống (Header, Footer, BlogCard)
├── data/                   # Nơi lưu trữ Mock Data (Danh sách bài viết đa dạng danh mục)
└── utils/                  # Hàm logic xử lý thuần túy (Bộ lọc Filter, Sort helper độc lập)

🏃‍♂️ Khởi Chạy Dự Án (Local Development)
Để chạy dự án này ở máy cục bộ của bạn, hãy làm theo các bước sau:

Clone repository:

Bash
git clone <link-repo-github-cua-ban>
cd mini-blog
Cài đặt các gói phụ thuộc (Dependencies):

Bash
npm install
Chạy dự án ở môi trường phát triển:

Bash
npm run dev
Trải nghiệm ứng dụng:
Mở trình duyệt và truy cập: http://localhost:3000