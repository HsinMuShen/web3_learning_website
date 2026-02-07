'use client'

import { useEffect, useState, useRef } from 'react'
import {
  markArticleComplete,
  updateLastVisitedArticle,
  addReadingTime,
} from '@/lib/progress-tracker'
import { CheckCircle } from 'lucide-react'

interface ArticleCompletionTrackerProps {
  slug: string
  readingTime: number
}

export default function ArticleCompletionTracker({
  slug,
  readingTime,
}: ArticleCompletionTrackerProps) {
  const [showCompletion, setShowCompletion] = useState(false)
  const [hasMarkedComplete, setHasMarkedComplete] = useState(false)
  const [mounted, setMounted] = useState(false)
  const startTimeRef = useRef<number>(Date.now())

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Update last visited article
    updateLastVisitedArticle(slug)

    // Track reading time on unmount
    return () => {
      const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000 / 60)
      if (timeSpent > 0) {
        addReadingTime(timeSpent)
      }
    }
  }, [slug])

  useEffect(() => {
    if (!mounted) return

    // Function to check if user has scrolled near the bottom
    const handleScroll = () => {
      if (hasMarkedComplete) return

      const scrollPosition = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPercentage = (scrollPosition / documentHeight) * 100

      // Mark as complete when user reaches 80% of the page
      if (scrollPercentage >= 80) {
        markArticleComplete(slug)
        setHasMarkedComplete(true)
        setShowCompletion(true)

        // Hide the completion message after 5 seconds
        setTimeout(() => {
          setShowCompletion(false)
        }, 5000)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [slug, hasMarkedComplete, mounted])

  if (!mounted || !showCompletion) return null

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-slide-up">
      <div className="bg-green-500 text-white rounded-lg shadow-xl p-4 flex items-center space-x-3 max-w-sm">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
        </div>
        <div>
          <p className="font-semibold">Article Complete! 🎉</p>
          <p className="text-sm opacity-90">Progress saved automatically</p>
        </div>
      </div>
    </div>
  )
}
