'use client'

import Link from 'next/link'
import { CheckCircle2, Circle, Lock } from 'lucide-react'
import { BlogPost } from '@/lib/blog'

interface ArticleCheckpointProps {
  article: BlogPost
  order: number
  isCompleted: boolean
  isLocked?: boolean
  required?: boolean
  showLine?: boolean
}

export default function ArticleCheckpoint({
  article,
  order,
  isCompleted,
  isLocked = false,
  required = true,
  showLine = true,
}: ArticleCheckpointProps) {
  const content = (
    <div
      className={`group relative ${
        isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      {/* Connection Line */}
      {showLine && (
        <div className="absolute left-5 top-12 w-0.5 h-full bg-gray-200 -z-10" />
      )}

      <div className="flex items-start space-x-4">
        {/* Checkpoint Icon */}
        <div className="relative flex-shrink-0">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
              isCompleted
                ? 'bg-green-500 border-green-500'
                : isLocked
                ? 'bg-gray-300 border-gray-300'
                : 'bg-white border-primary-500 group-hover:bg-primary-50'
            }`}
          >
            {isLocked ? (
              <Lock className="w-5 h-5 text-gray-500" />
            ) : isCompleted ? (
              <CheckCircle2 className="w-6 h-6 text-white" />
            ) : (
              <Circle className="w-5 h-5 text-primary-500" />
            )}
          </div>
          {/* Order Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gray-700 text-white rounded-full flex items-center justify-center text-xs font-bold">
            {order}
          </div>
        </div>

        {/* Article Info */}
        <div className="flex-1 min-w-0 pb-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3
                className={`font-semibold mb-1 ${
                  isLocked
                    ? 'text-gray-500'
                    : isCompleted
                    ? 'text-green-700'
                    : 'text-gray-900 group-hover:text-primary-600'
                }`}
              >
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {article.description}
              </p>
              <div className="flex items-center space-x-3 text-xs text-gray-500">
                <span>{article.readingTime} min read</span>
                {!required && (
                  <span className="px-2 py-0.5 bg-gray-100 rounded-full">
                    Optional
                  </span>
                )}
                {isCompleted && (
                  <span className="text-green-600 font-medium">
                    ✓ Completed
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  if (isLocked) {
    return <div className="pointer-events-none">{content}</div>
  }

  return (
    <Link href={`/blog/${article.slug}`} className="block">
      {content}
    </Link>
  )
}
