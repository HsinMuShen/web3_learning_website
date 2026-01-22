'use client'

import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface AnimatedDivProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
}

export default function AnimatedDiv({
  children,
  className = '',
  ...motionProps
}: AnimatedDivProps) {
  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  )
}

