'use client'

import Link from 'next/link'
import { Clock, BookOpen, Lock } from 'lucide-react'
import Card from '@/components/ui/Card'
import ProgressBar from './ProgressBar'
import { LearningTrack } from '@/lib/learning-path'

interface LearningTrackCardProps {
  track: LearningTrack
  locale: string
  progress?: number
  completedArticles?: number
  totalArticles?: number
  isLocked?: boolean
  isCompleted?: boolean
}

export default function LearningTrackCard({
  track,
  locale,
  progress = 0,
  completedArticles = 0,
  totalArticles,
  isLocked = false,
  isCompleted = false,
}: LearningTrackCardProps) {
  const title = track.title[locale as keyof typeof track.title] || track.title.en
  const description =
    track.description[locale as keyof typeof track.description] ||
    track.description.en
  const badgeName =
    track.badge.name[locale as keyof typeof track.badge.name] ||
    track.badge.name.en

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  }

  const difficultyLabels = {
    beginner: { en: 'Beginner', es: 'Principiante', 'zh-TW': '初學者' },
    intermediate: { en: 'Intermediate', es: 'Intermedio', 'zh-TW': '中級' },
    advanced: { en: 'Advanced', es: 'Avanzado', 'zh-TW': '高級' },
  }

  const difficultyLabel =
    difficultyLabels[track.difficulty][locale as keyof typeof difficultyLabels[typeof track.difficulty]] ||
    difficultyLabels[track.difficulty].en

  const articleCount = totalArticles || track.articles.length

  const content = (
    <Card hover={!isLocked} className="h-full flex flex-col relative">
      {/* Lock or Completed Badge */}
      {isLocked && (
        <div className="absolute top-4 right-4">
          <div className="bg-gray-400 text-white p-2 rounded-full">
            <Lock className="w-4 h-4" />
          </div>
        </div>
      )}
      {isCompleted && (
        <span className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
          ✓ Completed
        </span>
      )}

      {/* Header */}
      <div className="flex items-start space-x-3 mb-3">
        <div className="text-4xl">{track.icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-1 hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${difficultyColors[track.difficulty]}`}>
            {difficultyLabel}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 flex-grow">
        {description}
      </p>

      {/* Progress Bar (if started) */}
      {progress > 0 && !isCompleted && (
        <div className="mb-4">
          <ProgressBar progress={progress} height="sm" showPercentage={true} />
        </div>
      )}

      {/* Stats */}
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
        <div className="flex items-center space-x-1">
          <BookOpen className="w-4 h-4" />
          <span>
            {progress > 0
              ? `${completedArticles}/${articleCount} articles`
              : `${articleCount} articles`}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{track.estimatedTime} min</span>
        </div>
      </div>

      {/* Badge Reward */}
      <div className="flex items-center space-x-2 pt-3 border-t border-gray-100">
        <span className="text-2xl">{track.badge.icon}</span>
        <div>
          <p className="text-xs text-gray-500">
            {locale === 'en' ? 'Earn:' : locale === 'es' ? 'Gana:' : '獲得：'}
          </p>
          <p className="text-sm font-medium text-gray-900">
            {badgeName}
          </p>
        </div>
      </div>
    </Card>
  )

  if (isLocked) {
    return <div className="opacity-60 cursor-not-allowed">{content}</div>
  }

  return (
    <Link href={`/learning-path/${track.id}`} className="block h-full">
      {content}
    </Link>
  )
}
