import fs from 'fs'
import path from 'path'
import { Locale, defaultLocale } from './i18n/config'
import { getPostBySlug, BlogPost } from './blog'

const learningPathsDirectory = path.join(process.cwd(), 'content/learning-paths')

export interface LearningTrackArticle {
  slug: string
  order: number
  required: boolean
}

export interface LearningTrackBadge {
  id: string
  name: {
    en: string
    es: string
    'zh-TW': string
  }
  icon: string
}

export interface LearningTrack {
  id: string
  title: {
    en: string
    es: string
    'zh-TW': string
  }
  description: {
    en: string
    es: string
    'zh-TW': string
  }
  icon: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: number // in minutes
  badge: LearningTrackBadge
  articles: LearningTrackArticle[]
  prerequisites: string[] // track IDs
  nextTracks: string[] // track IDs
}

export interface LearningTrackWithPosts extends LearningTrack {
  posts: BlogPost[]
  progress?: number // 0-100
  completedArticles?: number
  totalArticles?: number
}

// Get all learning track IDs
export function getLearningTrackIds(): string[] {
  if (!fs.existsSync(learningPathsDirectory)) {
    return []
  }

  return fs
    .readdirSync(learningPathsDirectory)
    .filter((file) => file.endsWith('.json'))
    .map((file) => file.replace('.json', ''))
}

// Get a single learning track by ID
export function getLearningTrack(trackId: string): LearningTrack | null {
  try {
    const filePath = path.join(learningPathsDirectory, `${trackId}.json`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error(`Error reading learning track ${trackId}:`, error)
    return null
  }
}

// Get all learning tracks
export function getAllLearningTracks(): LearningTrack[] {
  const trackIds = getLearningTrackIds()
  return trackIds
    .map((id) => getLearningTrack(id))
    .filter((track): track is LearningTrack => track !== null)
}

// Get learning track with full blog post data
export function getLearningTrackWithPosts(
  trackId: string,
  locale?: Locale
): LearningTrackWithPosts | null {
  const track = getLearningTrack(trackId)
  if (!track) return null

  const targetLocale = locale || defaultLocale

  // Fetch all blog posts for this track
  const posts = track.articles
    .map((article) => getPostBySlug(article.slug, targetLocale))
    .filter((post): post is BlogPost => post !== null)

  return {
    ...track,
    posts,
  }
}

// Get all learning tracks with posts
export function getAllLearningTracksWithPosts(
  locale?: Locale
): LearningTrackWithPosts[] {
  const trackIds = getLearningTrackIds()
  return trackIds
    .map((id) => getLearningTrackWithPosts(id, locale))
    .filter((track): track is LearningTrackWithPosts => track !== null)
}

// Get localized title
export function getLocalizedTitle(
  track: LearningTrack,
  locale?: Locale
): string {
  const targetLocale = locale || defaultLocale
  return track.title[targetLocale] || track.title.en
}

// Get localized description
export function getLocalizedDescription(
  track: LearningTrack,
  locale?: Locale
): string {
  const targetLocale = locale || defaultLocale
  return track.description[targetLocale] || track.description.en
}

// Get localized badge name
export function getLocalizedBadgeName(
  badge: LearningTrackBadge,
  locale?: Locale
): string {
  const targetLocale = locale || defaultLocale
  return badge.name[targetLocale] || badge.name.en
}

// Check if user can access a track (prerequisites met)
export function canAccessTrack(
  trackId: string,
  completedTracks: string[]
): boolean {
  const track = getLearningTrack(trackId)
  if (!track) return false

  // No prerequisites means always accessible
  if (!track.prerequisites || track.prerequisites.length === 0) {
    return true
  }

  // Check if all prerequisites are completed
  return track.prerequisites.every((prereq) => completedTracks.includes(prereq))
}

// Get recommended next track based on completed tracks
export function getRecommendedNextTrack(
  completedTracks: string[]
): LearningTrack | null {
  const allTracks = getAllLearningTracks()

  // Find a track that:
  // 1. User hasn't completed yet
  // 2. Has all prerequisites met
  // 3. Prioritize by difficulty (beginner first)
  
  const availableTracks = allTracks.filter(
    (track) =>
      !completedTracks.includes(track.id) &&
      canAccessTrack(track.id, completedTracks)
  )

  if (availableTracks.length === 0) {
    return null
  }

  // Sort by difficulty priority
  const difficultyOrder = { beginner: 0, intermediate: 1, advanced: 2 }
  availableTracks.sort(
    (a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
  )

  return availableTracks[0]
}

// Calculate track progress based on completed articles
export function calculateTrackProgress(
  track: LearningTrack,
  completedArticles: string[]
): {
  progress: number
  completedCount: number
  totalCount: number
  requiredCompletedCount: number
  requiredTotalCount: number
  isCompleted: boolean
} {
  const totalCount = track.articles.length
  const completedCount = track.articles.filter((article) =>
    completedArticles.includes(article.slug)
  ).length

  const requiredArticles = track.articles.filter((a) => a.required)
  const requiredTotalCount = requiredArticles.length
  const requiredCompletedCount = requiredArticles.filter((article) =>
    completedArticles.includes(article.slug)
  ).length

  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0
  const isCompleted = requiredCompletedCount === requiredTotalCount

  return {
    progress: Math.round(progress),
    completedCount,
    totalCount,
    requiredCompletedCount,
    requiredTotalCount,
    isCompleted,
  }
}
