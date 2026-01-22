'use client'

import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  onClick,
  disabled,
  type,
  form,
  formAction,
  formEncType,
  formMethod,
  formNoValidate,
  formTarget,
  name,
  value,
  autoFocus,
  tabIndex,
  ...restProps
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary:
      'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    ghost:
      'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  // Only pass safe props to motion.button
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
      form={form}
      formAction={formAction}
      formEncType={formEncType}
      formMethod={formMethod}
      formNoValidate={formNoValidate}
      formTarget={formTarget}
      name={name}
      value={value}
      autoFocus={autoFocus}
      tabIndex={tabIndex}
      {...restProps}
    >
      {children}
    </motion.button>
  )
}

