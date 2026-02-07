'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { BlogPost } from '@/lib/blog'

interface NextLessonProps {
  article?: BlogPost
  trackTitle?: string
  trackId?: string
}

export default function NextLesson({ article, trackTitle, trackId }: NextLessonProps) {
  if (!article) {
    return null
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <BookOpen className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-medium text-primary-600">
              {trackTitle ? `Continue ${trackTitle}` : 'Next Lesson'}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{article.description}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>{article.readingTime} min read</span>
            {article.category && <span>• {article.category}</span>}
          </div>
        </div>
        <Link
          href={`/blog/${article.slug}`}
          className="ml-4 flex-shrink-0 bg-primary-600 text-white hover:bg-primary-700 rounded-full p-3 transition-colors"
        >
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  )
}
