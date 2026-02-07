'use client'

interface CategoryOption {
  id: string
  name: string
  icon: string
  count: number
}

interface CategoryFilterProps {
  categories: CategoryOption[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          selectedCategory === null
            ? 'bg-primary-600 text-white'
            : 'bg-white border border-gray-200 text-gray-700 hover:border-primary-500'
        }`}
      >
        All Categories
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedCategory === category.id
              ? 'bg-primary-600 text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:border-primary-500'
          }`}
        >
          <span className="mr-1">{category.icon}</span>
          {category.name}
          <span className="ml-1 opacity-75">({category.count})</span>
        </button>
      ))}
    </div>
  )
}
