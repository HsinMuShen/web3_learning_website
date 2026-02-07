'use client'

import { useEffect, useState } from 'react'
import { getUserProgress, markTrackComplete, awardBadge } from '@/lib/progress-tracker'
import ProgressBar from '@/components/learning-path/ProgressBar'
import ArticleCheckpoint from '@/components/learning-path/ArticleCheckpoint'
import { Award, CheckCircle } from 'lucide-react'

interface LearningTrackArticle {
  slug: string
  order: number
  required: boolean
}

interface LearningTrackWithPosts {
  id: string
  title: Record<string, string>
  description: Record<string, string>
  icon: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime: number
  badge: {
    id: string
    name: Record<string, string>
    icon: string
  }
  articles: LearningTrackArticle[]
  prerequisites: string[]
  nextTracks: string[]
  posts: Array<{
    slug: string
    title: string
    description: string
    readingTime: number
  }>
}

interface ClientTrackViewProps {
  track: LearningTrackWithPosts
  locale: string
}

// Client-side version of calculateTrackProgress
function calculateTrackProgress(
  track: LearningTrackWithPosts,
  completedArticles: string[]
) {
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

export default function ClientTrackView({ track, locale }: ClientTrackViewProps) {
  const [progress, setProgress] = useState<ReturnType<typeof getUserProgress> | null>(
    null
  )

  useEffect(() => {
    // Load progress on client side only
    const userProgress = getUserProgress()
    setProgress(userProgress)

    // Check if track should be marked complete
    const trackProgress = calculateTrackProgress(
      track,
      userProgress.completedArticles
    )

    if (trackProgress.isCompleted && !userProgress.completedTracks.includes(track.id)) {
      // Mark track as complete and award badge
      markTrackComplete(track.id)
      awardBadge(track.badge.id)
      setProgress(getUserProgress())
    }
  }, [track])

  if (!progress) {
    // Show loading skeleton while progress loads
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4" />
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded mb-8" />
        </div>
        {track.posts.map((_, index) => (
          <div key={index} className="animate-pulse flex space-x-4">
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  const trackProgress = calculateTrackProgress(track, progress.completedArticles)
  const isTrackCompleted = trackProgress.isCompleted

  const badgeName =
    track.badge.name[locale as keyof typeof track.badge.name] || track.badge.name.en

  return (
    <div>
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Your Progress
          </h2>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {trackProgress.completedCount} of {trackProgress.totalCount} completed
          </span>
        </div>
        <ProgressBar progress={trackProgress.progress} height="lg" showPercentage={true} />
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {trackProgress.requiredCompletedCount} of {trackProgress.requiredTotalCount}{' '}
          required articles completed
        </p>
      </div>

      {/* Completion Celebration */}
      {isTrackCompleted && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">🎉 Track Completed!</h3>
              <p className="text-gray-700">
                Congratulations! You've earned the <strong>{badgeName}</strong> badge.
              </p>
            </div>
            <div className="text-6xl">{track.badge.icon}</div>
          </div>
        </div>
      )}

      {/* Articles List */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Learning Path
        </h3>
        <div className="space-y-2">
          {track.posts.map((post, index) => {
            const article = track.articles.find((a) => a.slug === post.slug)
            return (
              <ArticleCheckpoint
                key={post.slug}
                article={post}
                order={index + 1}
                isCompleted={progress.completedArticles.includes(post.slug)}
                required={article?.required ?? true}
                showLine={index < track.posts.length - 1}
              />
            )
          })}
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <div className="text-2xl">💡</div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Learning Tips
            </h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                • Follow articles in order for the best learning experience
              </li>
              <li>
                • Take your time - it's not a race! Understanding is more important
                than speed
              </li>
              <li>
                • Complete all required articles to earn your badge and unlock new
                tracks
              </li>
              <li>
                • Optional articles provide extra depth but aren't required for
                completion
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
