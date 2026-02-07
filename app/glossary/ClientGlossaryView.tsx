'use client'

import { useState, useMemo } from 'react'
import GlossarySearch from '@/components/glossary/GlossarySearch'
import CategoryFilter from '@/components/glossary/CategoryFilter'
import LetterNav from '@/components/glossary/LetterNav'
import TermCard from '@/components/glossary/TermCard'
import { GlossaryTerm } from '@/lib/glossary'

interface TermWithCategory extends GlossaryTerm {
  categoryName: string
  categoryIcon: string
}

interface CategoryOption {
  id: string
  name: string
  icon: string
  count: number
}

interface ClientGlossaryViewProps {
  terms: TermWithCategory[]
  categories: CategoryOption[]
  translations: {
    filterByCategory: string
    browseByLetter: string
    termsFound: string
    termFound: string
    clearFilters: string
    noTermsFound: string
    noTermsFoundDesc: string
    searchPlaceholder: string
  }
}

export default function ClientGlossaryView({
  terms,
  categories,
  translations,
}: ClientGlossaryViewProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)

  // Filter terms based on search, category, and letter
  const filteredTerms = useMemo(() => {
    let filtered = terms

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter((term) =>
        term.searchText.includes(query)
      )
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter((term) => term.category === selectedCategory)
    }

    // Apply letter filter
    if (selectedLetter) {
      filtered = filtered.filter(
        (term) => term.term.charAt(0).toUpperCase() === selectedLetter
      )
    }

    return filtered
  }, [terms, searchQuery, selectedCategory, selectedLetter])

  // Get available letters from filtered terms
  const availableLetters = useMemo(() => {
    const letters = new Set<string>()
    terms.forEach((term) => {
      const firstLetter = term.term.charAt(0).toUpperCase()
      if (/[A-Z]/.test(firstLetter)) {
        letters.add(firstLetter)
      }
    })
    return letters
  }, [terms])

  // Group terms by letter
  const groupedTerms = useMemo(() => {
    const groups: Record<string, TermWithCategory[]> = {}
    filteredTerms.forEach((term) => {
      const firstLetter = term.term.charAt(0).toUpperCase()
      if (!groups[firstLetter]) {
        groups[firstLetter] = []
      }
      groups[firstLetter].push(term)
    })
    return groups
  }, [filteredTerms])

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <GlossarySearch
          onSearch={setSearchQuery}
          placeholder={translations.searchPlaceholder}
        />
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            {translations.filterByCategory}
          </h3>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            {translations.browseByLetter}
          </h3>
          <LetterNav
            availableLetters={availableLetters}
            currentLetter={selectedLetter}
            onLetterClick={(letter) =>
              setSelectedLetter(selectedLetter === letter ? null : letter)
            }
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {filteredTerms.length} {filteredTerms.length !== 1 ? translations.termsFound : translations.termFound}
        </p>
        {(searchQuery || selectedCategory || selectedLetter) && (
          <button
            onClick={() => {
              setSearchQuery('')
              setSelectedCategory(null)
              setSelectedLetter(null)
            }}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            {translations.clearFilters}
          </button>
        )}
      </div>

      {/* Terms Grid */}
      {filteredTerms.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {translations.noTermsFound}
          </h3>
          <p className="text-gray-600">
            {translations.noTermsFoundDesc}
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.keys(groupedTerms)
            .sort()
            .map((letter) => (
              <div key={letter} id={`letter-${letter}`}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {letter}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupedTerms[letter].map((term) => (
                    <TermCard
                      key={term.slug}
                      term={term}
                      categoryName={term.categoryName}
                      categoryIcon={term.categoryIcon}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}
