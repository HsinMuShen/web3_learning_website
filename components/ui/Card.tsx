'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles = 'bg-white rounded-lg border border-gray-200 p-6'
  
  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={`${baseStyles} shadow-sm hover:shadow-md transition-shadow ${className}`}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  )
}

