'use client'

import { ReactNode } from 'react'

interface DiagramProps {
  title?: string
  children: ReactNode
  className?: string
}

export default function Diagram({
  title,
  children,
  className = '',
}: DiagramProps) {
  return (
    <div className={`my-8 p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-200 overflow-hidden ${className}`}>
      {title && (
        <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          {title}
        </h4>
      )}
      <div className="flex justify-center items-center w-full max-w-full overflow-x-auto">
        <div className="w-full max-w-full">{children}</div>
      </div>
    </div>
  )
}

