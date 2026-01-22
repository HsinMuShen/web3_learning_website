'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedHeadingProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function AnimatedHeading({
  children,
  className = '',
  delay = 0,
  as: Component = 'h1',
}: AnimatedHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  )
}

