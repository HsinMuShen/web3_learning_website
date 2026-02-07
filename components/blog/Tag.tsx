'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface TagProps {
  tag: string
  count?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline'
  clickable?: boolean
}

export default function Tag({ 
  tag, 
  count, 
  size = 'md', 
  variant = 'default',
  clickable = true,
}: TagProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  }

  const variantClasses = {
    default: 'bg-primary-100 text-primary-700 hover:bg-primary-200',
    outline: 'border border-primary-300 text-primary-700 hover:bg-primary-50',
  }

  const content = (
    <>
      #{tag}
      {count !== undefined && (
        <span className="ml-1.5 text-xs opacity-75">({count})</span>
      )}
    </>
  )

  const baseClasses = `
    inline-flex items-center rounded-full font-medium
    transition-all duration-200
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${clickable ? 'cursor-pointer hover:scale-105' : ''}
  `.trim().replace(/\s+/g, ' ')

  if (!clickable) {
    return (
      <span className={baseClasses}>
        {content}
      </span>
    )
  }

  return (
    <Link href={`/tags/${tag}`}>
      <motion.span
        className={baseClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.span>
    </Link>
  )
}
