'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

interface AnimatedCardProps {
  children: ReactNode
  index?: number
  hover?: boolean
  className?: string
}

export default function AnimatedCard({
  children,
  index = 0,
  hover = true,
  className = '',
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card hover={hover} className={className}>
        {children}
      </Card>
    </motion.div>
  )
}

