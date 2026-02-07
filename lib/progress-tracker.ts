'use client'

// This file runs on the client side to manage user progress using localStorage

export interface UserProgress {
  completedArticles: string[] // Array of article slugs
  completedTracks: string[] // Array of track IDs
  badges: string[] // Array of badge IDs
  lastVisitedArticle?: string
  lastVisitedTrack?: string
  stats: {
    totalTimeSpent: number // in minutes
    articlesRead: number
    tracksCompleted: number
    firstVisit: string // ISO date string
    lastVisit: string // ISO date string
    visitCount: number
  }
}

const STORAGE_KEY = 'web3_learning_progress'

// Initialize default progress
const defaultProgress: UserProgress = {
  completedArticles: [],
  completedTracks: [],
  badges: [],
  stats: {
    totalTimeSpent: 0,
    articlesRead: 0,
    tracksCompleted: 0,
    firstVisit: new Date().toISOString(),
    lastVisit: new Date().toISOString(),
    visitCount: 1,
  },
}

// Get user progress from localStorage
export function getUserProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return defaultProgress
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return defaultProgress
    }

    const progress = JSON.parse(stored) as UserProgress
    
    // Update last visit and visit count
    progress.stats.lastVisit = new Date().toISOString()
    progress.stats.visitCount = (progress.stats.visitCount || 0) + 1
    
    return progress
  } catch (error) {
    console.error('Error reading user progress:', error)
    return defaultProgress
  }
}

// Save user progress to localStorage
export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') {
    return
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch (error) {
    console.error('Error saving user progress:', error)
  }
}

// Mark an article as completed
export function markArticleComplete(slug: string): UserProgress {
  const progress = getUserProgress()

  if (!progress.completedArticles.includes(slug)) {
    progress.completedArticles.push(slug)
    progress.stats.articlesRead = progress.completedArticles.length
  }

  saveUserProgress(progress)
  return progress
}

// Mark a track as completed
export function markTrackComplete(trackId: string): UserProgress {
  const progress = getUserProgress()

  if (!progress.completedTracks.includes(trackId)) {
    progress.completedTracks.push(trackId)
    progress.stats.tracksCompleted = progress.completedTracks.length
  }

  saveUserProgress(progress)
  return progress
}

// Award a badge to the user
export function awardBadge(badgeId: string): UserProgress {
  const progress = getUserProgress()

  if (!progress.badges.includes(badgeId)) {
    progress.badges.push(badgeId)
  }

  saveUserProgress(progress)
  return progress
}

// Check if article is completed
export function isArticleCompleted(slug: string): boolean {
  const progress = getUserProgress()
  return progress.completedArticles.includes(slug)
}

// Check if track is completed
export function isTrackCompleted(trackId: string): boolean {
  const progress = getUserProgress()
  return progress.completedTracks.includes(trackId)
}

// Check if user has badge
export function hasBadge(badgeId: string): boolean {
  const progress = getUserProgress()
  return progress.badges.includes(badgeId)
}

// Update last visited article
export function updateLastVisitedArticle(slug: string): void {
  const progress = getUserProgress()
  progress.lastVisitedArticle = slug
  saveUserProgress(progress)
}

// Update last visited track
export function updateLastVisitedTrack(trackId: string): void {
  const progress = getUserProgress()
  progress.lastVisitedTrack = trackId
  saveUserProgress(progress)
}

// Add reading time to stats
export function addReadingTime(minutes: number): void {
  const progress = getUserProgress()
  progress.stats.totalTimeSpent += minutes
  saveUserProgress(progress)
}

// Reset all progress (for testing/debugging)
export function resetProgress(): void {
  if (typeof window === 'undefined') {
    return
  }

  localStorage.removeItem(STORAGE_KEY)
}

// Export progress as JSON (for sharing/backup)
export function exportProgress(): string {
  const progress = getUserProgress()
  return JSON.stringify(progress, null, 2)
}

// Import progress from JSON (for restoring)
export function importProgress(jsonString: string): boolean {
  try {
    const progress = JSON.parse(jsonString) as UserProgress
    saveUserProgress(progress)
    return true
  } catch (error) {
    console.error('Error importing progress:', error)
    return false
  }
}

// Get progress percentage for a specific track
export function getTrackProgressPercent(
  trackId: string,
  articleSlugs: string[]
): number {
  const progress = getUserProgress()
  const completedInTrack = articleSlugs.filter((slug) =>
    progress.completedArticles.includes(slug)
  )
  return articleSlugs.length > 0
    ? Math.round((completedInTrack.length / articleSlugs.length) * 100)
    : 0
}
