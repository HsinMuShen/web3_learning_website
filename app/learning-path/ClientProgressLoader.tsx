'use client'

import { useEffect, useState } from 'react'
import { getUserProgress } from '@/lib/progress-tracker'
import Section from '@/components/ui/Section'
import AnimatedSection from '@/components/ui/AnimatedSection'
import LearningTrackCard from '@/components/learning-path/LearningTrackCard'
import BadgeDisplay, { Badge } from '@/components/learning-path/BadgeDisplay'
import NextLesson from '@/components/learning-path/NextLesson'
import { Award, BookOpen, Clock } from 'lucide-react'

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

interface ClientProgressLoaderProps {
  tracks: LearningTrackWithPosts[]
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

export default function ClientProgressLoader({
  tracks,
  locale,
}: ClientProgressLoaderProps) {
  const [progress, setProgress] = useState<ReturnType<typeof getUserProgress> | null>(
    null
  )

  useEffect(() => {
    // Only load progress on client side to avoid hydration mismatch
    setProgress(getUserProgress())
  }, [])

  // Don't render anything until we have progress loaded
  if (!progress) {
    return null
  }

  // Don't show if user hasn't started any articles
  if (progress.stats.articlesRead === 0) {
    return null
  }

  // Calculate progress for each track
  const tracksWithProgress = tracks.map((track) => {
    const trackProgress = calculateTrackProgress(
      track,
      progress.completedArticles
    )
    return {
      ...track,
      progress: trackProgress.progress,
      completedArticles: trackProgress.completedCount,
      isCompleted: trackProgress.isCompleted,
    }
  })

  // Get recommended next track (simple client-side version)
  const availableTracks = tracks.filter(
    (track) => !progress.completedTracks.includes(track.id)
  )
  const recommendedTrack = availableTracks[0]
  
  const nextLesson = progress.lastVisitedArticle
    ? tracksWithProgress
        .flatMap((t) => t.posts)
        .find((p) => p.slug === progress.lastVisitedArticle)
    : recommendedTrack
    ? tracksWithProgress
        .find((t) => t.id === recommendedTrack.id)
        ?.posts.find(
          (p) => !progress.completedArticles.includes(p.slug)
        )
    : tracksWithProgress[0]?.posts[0]

  const earnedBadges: Badge[] = tracksWithProgress
    .filter((t) => t.isCompleted)
    .map((t) => ({
      id: t.badge.id,
      name: t.badge.name[locale as keyof typeof t.badge.name] || t.badge.name.en,
      icon: t.badge.icon,
    }))

  const inProgressTracks = tracksWithProgress.filter(
    (t) => t.progress > 0 && !t.isCompleted
  )

  return (
    <>
      {/* Progress Overview */}
      <Section>
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Your Progress
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {progress.stats.articlesRead}
                  </p>
                  <p className="text-sm text-gray-600">
                    Articles Read
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {progress.stats.tracksCompleted}
                  </p>
                  <p className="text-sm text-gray-600">
                    Tracks Completed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {progress.stats.totalTimeSpent}
                  </p>
                  <p className="text-sm text-gray-600">
                    Minutes Spent
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Lesson */}
          {nextLesson && (
            <div className="mb-8">
              <NextLesson article={nextLesson} />
            </div>
          )}

          {/* Badges */}
          {earnedBadges.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Your Badges ({earnedBadges.length})
              </h3>
              <BadgeDisplay badges={earnedBadges} size="md" />
            </div>
          )}

          {/* In Progress Tracks */}
          {inProgressTracks.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Continue Learning
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {inProgressTracks.map((track) => (
                  <LearningTrackCard
                    key={track.id}
                    track={track}
                    locale={locale}
                    progress={track.progress}
                    completedArticles={track.completedArticles}
                    totalArticles={track.articles.length}
                  />
                ))}
              </div>
            </div>
          )}
        </AnimatedSection>
      </Section>
    </>
  )
}
