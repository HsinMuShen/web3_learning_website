'use client'

interface ProgressBarProps {
  progress: number // 0-100
  height?: 'sm' | 'md' | 'lg'
  showPercentage?: boolean
  className?: string
}

export default function ProgressBar({
  progress,
  height = 'md',
  showPercentage = true,
  className = '',
}: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100)

  const heightClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-1">
        {showPercentage && (
          <span className="text-sm font-medium text-gray-700">
            {clampedProgress}%
          </span>
        )}
      </div>
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${heightClasses[height]}`}>
        <div
          className="h-full bg-primary-600 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${clampedProgress}%` }}
          role="progressbar"
          aria-valuenow={clampedProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}
