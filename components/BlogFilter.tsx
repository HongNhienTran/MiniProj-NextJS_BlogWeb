'use client';

interface FilterProps {
  categories: string[];
  selectedCategory: string;
  selectedDate: string;
  sortBy: string;
  onCategoryChange: (value: string) => void;
  onDateChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onClearFilters: () => void;
}

export default function BlogFilter({
  categories,
  selectedCategory,
  selectedDate,
  sortBy,
  onCategoryChange,
  onDateChange,
  onSortChange,
  onClearFilters,
}: FilterProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6 grid gap-4 md:grid-cols-4 items-end">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
        >
          <option value="">Tất cả danh mục</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Từ ngày</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Sắp xếp theo ngày</label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
        >
          <option value="desc">Mới nhất/Giảm dần</option>
          <option value="asc">Cũ nhất/Tăng dần</option>
        </select>
      </div>
      <div>
        <button
          onClick={onClearFilters}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md text-sm transition-colors"
        >
          Xóa bộ lọc
        </button>
      </div>
    </div>
  );
}