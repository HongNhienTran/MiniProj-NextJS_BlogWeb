'use client';

import { useState, useMemo } from 'react';
import { MOCK_POSTS } from '@/data/posts';
import BlogCard from '@/components/BlogCard';
import BlogFilter from '@/components/BlogFilter';
import { filterAndSortPosts, getUniqueCategories } from '@/utils/filterHelpers';

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('desc'); 

  const uniqueCategories = useMemo(() => getUniqueCategories(MOCK_POSTS), []);

  const filteredPosts = useMemo(() => {
    return filterAndSortPosts(MOCK_POSTS, {
      category: selectedCategory,
      date: selectedDate,
      sortBy: sortBy,
    });
  }, [selectedCategory, selectedDate, sortBy]);

  const handleClearFilters = () => {
    setSelectedCategory('');
    setSelectedDate('');
    setSortBy('desc');
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Khám phá bài viết</h2>
      <BlogFilter
        categories={uniqueCategories}
        selectedCategory={selectedCategory}
        selectedDate={selectedDate}
        sortBy={sortBy}
        onCategoryChange={setSelectedCategory}
        onDateChange={setSelectedDate}
        onSortChange={setSortBy}
        onClearFilters={handleClearFilters}
      />
      {filteredPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500 border border-dashed border-gray-200 rounded-lg">
          Không tìm thấy bài viết nào phù hợp với bộ lọc.
        </div>
      )}
    </div>
  );
}