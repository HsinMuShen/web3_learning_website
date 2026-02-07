'use client'

import { Search } from 'lucide-react'
import { useState, useEffect } from 'react'

interface GlossarySearchProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export default function GlossarySearch({
  onSearch,
  placeholder = 'Search terms...',
}: GlossarySearchProps) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const debounce = setTimeout(() => {
      onSearch(query)
    }, 300)

    return () => clearTimeout(debounce)
  }, [query, onSearch])

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
    </div>
  )
}
