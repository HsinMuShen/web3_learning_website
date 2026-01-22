'use client'

import { ReactNode } from 'react'
import Card from '@/components/ui/Card'

interface ConceptCardProps {
  title: string
  children: ReactNode
  icon?: string
  className?: string
}

export default function ConceptCard({
  title,
  children,
  icon,
  className = '',
}: ConceptCardProps) {
  return (
    <Card className={`my-6 ${className}`}>
      <div className="flex items-start gap-4">
        {icon && (
          <div className="text-4xl flex-shrink-0">{icon}</div>
        )}
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
          <div className="text-gray-700">{children}</div>
        </div>
      </div>
    </Card>
  )
}

