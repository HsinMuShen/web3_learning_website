'use client'

import { Award } from 'lucide-react'

export interface Badge {
  id: string
  name: string
  icon: string
  earnedAt?: string
}

interface BadgeDisplayProps {
  badges: Badge[]
  size?: 'sm' | 'md' | 'lg'
  maxDisplay?: number
}

export default function BadgeDisplay({
  badges,
  size = 'md',
  maxDisplay,
}: BadgeDisplayProps) {
  const displayBadges = maxDisplay ? badges.slice(0, maxDisplay) : badges
  const remainingCount = maxDisplay && badges.length > maxDisplay
    ? badges.length - maxDisplay
    : 0

  const sizeClasses = {
    sm: 'w-10 h-10 text-2xl',
    md: 'w-16 h-16 text-4xl',
    lg: 'w-24 h-24 text-6xl',
  }

  if (badges.length === 0) {
    return (
      <div className="text-center py-8">
        <Award className="w-12 h-12 text-gray-300 mx-auto mb-2" />
        <p className="text-sm text-gray-500">
          No badges earned yet. Complete tracks to earn badges!
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-4">
      {displayBadges.map((badge) => (
        <div
          key={badge.id}
          className="group relative"
          title={badge.name}
        >
          <div
            className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110`}
          >
            <span className="drop-shadow-md">{badge.icon}</span>
          </div>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-gray-900 text-white text-xs rounded-lg py-1 px-3 whitespace-nowrap">
              {badge.name}
              {badge.earnedAt && (
                <div className="text-gray-400 text-[10px] mt-0.5">
                  {new Date(badge.earnedAt).toLocaleDateString()}
                </div>
              )}
            </div>
            <div className="w-2 h-2 bg-gray-900 transform rotate-45 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      ))}
      {remainingCount > 0 && (
        <div
          className={`${sizeClasses[size]} rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center`}
        >
          <span className="text-sm font-bold text-gray-600 dark:text-gray-300">
            +{remainingCount}
          </span>
        </div>
      )}
    </div>
  )
}
