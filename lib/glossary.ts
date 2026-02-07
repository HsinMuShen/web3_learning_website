import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Locale, defaultLocale } from './i18n/config'

const glossaryDirectory = path.join(process.cwd(), 'content/glossary/terms')
const categoriesPath = path.join(process.cwd(), 'content/glossary/categories.json')

export interface GlossaryTerm {
  slug: string
  term: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  relatedTerms: string[]
  content: string
  searchText: string // For search functionality
}

export interface GlossaryCategory {
  name: {
    en: string
    es: string
    'zh-TW': string
  }
  icon: string
}

// Get all term slugs (only base English slugs, not locale variants)
export function getTermSlugs(): string[] {
  if (!fs.existsSync(glossaryDirectory)) {
    return []
  }

  return fs
    .readdirSync(glossaryDirectory)
    .filter((file) => {
      // Only include base .mdx files, exclude .es.mdx and .zh-TW.mdx
      return file.endsWith('.mdx') && !file.includes('.es.mdx') && !file.includes('.zh-TW.mdx')
    })
    .map((file) => file.replace('.mdx', ''))
}

// Get single term by slug with locale support
export function getTermBySlug(slug: string, locale: Locale = defaultLocale): GlossaryTerm | null {
  try {
    // Try locale-specific file first, then fall back to default
    const localeFile = locale !== defaultLocale ? `${slug}.${locale}.mdx` : `${slug}.mdx`
    const localePath = path.join(glossaryDirectory, localeFile)
    const defaultPath = path.join(glossaryDirectory, `${slug}.mdx`)

    let fullPath = localePath
    if (!fs.existsSync(localePath) && locale !== defaultLocale) {
      // Fall back to English if locale file doesn't exist
      fullPath = defaultPath
    }

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Create searchable text (frontmatter + content)
    const searchText = `${data.term} ${content}`.toLowerCase()

    return {
      slug,
      term: data.term || '',
      category: data.category || '',
      difficulty: data.difficulty || 'beginner',
      relatedTerms: data.relatedTerms || [],
      content,
      searchText,
    }
  } catch (error) {
    console.error(`Error reading term ${slug}:`, error)
    return null
  }
}

// Get all terms with locale support
export function getAllTerms(locale: Locale = defaultLocale): GlossaryTerm[] {
  const slugs = getTermSlugs()
  return slugs
    .map((slug) => getTermBySlug(slug, locale))
    .filter((term): term is GlossaryTerm => term !== null)
    .sort((a, b) => a.term.localeCompare(b.term))
}

// Get terms by category
export function getTermsByCategory(category: string, locale: Locale = defaultLocale): GlossaryTerm[] {
  const allTerms = getAllTerms(locale)
  return allTerms.filter((term) => term.category === category)
}

// Get terms by difficulty
export function getTermsByDifficulty(
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  locale: Locale = defaultLocale
): GlossaryTerm[] {
  const allTerms = getAllTerms(locale)
  return allTerms.filter((term) => term.difficulty === difficulty)
}

// Search terms
export function searchTerms(query: string, locale: Locale = defaultLocale): GlossaryTerm[] {
  if (!query || query.trim() === '') {
    return getAllTerms(locale)
  }

  const allTerms = getAllTerms(locale)
  const lowerQuery = query.toLowerCase()

  return allTerms.filter((term) => term.searchText.includes(lowerQuery))
}

// Get all categories
export function getCategories(): Record<string, GlossaryCategory> {
  try {
    const fileContents = fs.readFileSync(categoriesPath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error reading categories:', error)
    return {}
  }
}

// Get category name localized
export function getCategoryName(
  categoryId: string,
  locale?: Locale
): string {
  const categories = getCategories()
  const category = categories[categoryId]

  if (!category) return categoryId

  const targetLocale = locale || defaultLocale
  return category.name[targetLocale] || category.name.en
}

// Get category icon
export function getCategoryIcon(categoryId: string): string {
  const categories = getCategories()
  return categories[categoryId]?.icon || '📖'
}

// Get term statistics
export function getGlossaryStats(locale: Locale = defaultLocale) {
  const allTerms = getAllTerms(locale)
  const categories = getCategories()

  const categoryCount: Record<string, number> = {}
  const difficultyCount = {
    beginner: 0,
    intermediate: 0,
    advanced: 0,
  }

  allTerms.forEach((term) => {
    categoryCount[term.category] = (categoryCount[term.category] || 0) + 1
    difficultyCount[term.difficulty]++
  })

  return {
    total: allTerms.length,
    categories: Object.keys(categories).length,
    categoryCount,
    difficultyCount,
  }
}

// Get random term (for "Term of the Day")
export function getRandomTerm(locale: Locale = defaultLocale): GlossaryTerm | null {
  const allTerms = getAllTerms(locale)
  if (allTerms.length === 0) return null

  const randomIndex = Math.floor(Math.random() * allTerms.length)
  return allTerms[randomIndex]
}

// Get related terms for a given term
export function getRelatedTermsData(term: GlossaryTerm, locale: Locale = defaultLocale): GlossaryTerm[] {
  return term.relatedTerms
    .map((slug) => getTermBySlug(slug, locale))
    .filter((t): t is GlossaryTerm => t !== null)
}
