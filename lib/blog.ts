import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Locale, defaultLocale } from './i18n/config'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readingTime: number
  category?: string
  featured?: boolean
  featuredImage?: string
  tags?: string[]
  content: string
  locale?: Locale
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
}

export function getPostBySlug(slug: string, locale?: Locale): BlogPost | null {
  try {
    const targetLocale = locale || defaultLocale
    const postDir = path.join(postsDirectory, slug)
    
    // Try locale-specific file first (e.g., index.zh-TW.mdx)
    const localeSpecificPath = path.join(postDir, `index.${targetLocale}.mdx`)
    const defaultPath = path.join(postDir, 'index.mdx')
    
    let fullPath: string
    if (fs.existsSync(localeSpecificPath)) {
      fullPath = localeSpecificPath
    } else if (fs.existsSync(defaultPath)) {
      fullPath = defaultPath
    } else {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      readingTime: data.readingTime || 5,
      category: data.category,
      featured: data.featured || false,
      featuredImage: data.featuredImage,
      tags: data.tags || [],
      content,
      locale: targetLocale,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPosts(locale?: Locale): BlogPost[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, locale))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })

  return posts
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured)
}

export function getAllTags(locale?: Locale): { tag: string; count: number }[] {
  const posts = getAllPosts(locale)
  const tagCount: Record<string, number> = {}

  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        tagCount[tag] = (tagCount[tag] || 0) + 1
      })
    }
  })

  return Object.entries(tagCount)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count) // Sort by count descending
}

export function getPostsByTag(tag: string, locale?: Locale): BlogPost[] {
  const allPosts = getAllPosts(locale)
  return allPosts.filter((post) => 
    post.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
  )
}

