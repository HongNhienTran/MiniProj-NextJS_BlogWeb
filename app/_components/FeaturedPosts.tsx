'use client';

import { useRef } from 'react';
import { MOCK_POSTS } from '@/data/posts';
import Link from 'next/link';

export default function FeaturedPosts() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const { scrollLeft, clientWidth } = sliderRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth
                : scrollLeft + clientWidth;

            sliderRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="bg-gray-50/50 border-y border-gray-100 py-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 gap-4">
                    <div className="text-center sm:text-left space-y-2">
                        <h2 className="text-3xl font-extrabold text-gray-950">Bài viết phổ biến không thể bỏ qua</h2>
                        <p className="text-gray-400 text-sm">Những nội dung chất lượng cao thu hút nhiều lượt đọc nhất</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95 shadow-sm"
                            aria-label="Xem bài viết trước"
                        >
                            ←
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95 shadow-sm"
                            aria-label="Xem bài viết kế tiếp"
                        >
                            →
                        </button>
                    </div>
                </div>
                <div
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {MOCK_POSTS.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between shrink-0 snap-start w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                        >
                            <div>
                                <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-2xl text-gray-300 font-mono">
                                    <img src="/PostThumbnail.jpg" alt="Post Thumbnail" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">{post.category}</span>
                                <h3 className="text-base font-bold text-gray-900 mt-1 line-clamp-2 min-h-[3rem]">
                                    {post.title}
                                </h3>
                                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                                    {post.description}
                                </p>
                            </div>

                            <div className="mt-5">
                                <Link
                                    href={`/categories/${post.slug}`}
                                    className="w-full block text-center border border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 text-xs font-semibold py-2.5 rounded-lg transition-colors"
                                >
                                    Xem chi tiết
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}