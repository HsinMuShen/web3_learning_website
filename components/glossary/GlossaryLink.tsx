'use client'

import { useRouter } from 'next/navigation'

interface GlossaryLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

/**
 * Link-style span that navigates on click. Used instead of <a> so we never
 * create nested anchors when GlossaryTerm appears inside a markdown link.
 */
export default function GlossaryLink({
  href,
  children,
  className = '',
  onMouseEnter,
  onMouseLeave,
}: GlossaryLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(href)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      e.stopPropagation()
      router.push(href)
    }
  }

  return (
    <span
      role="link"
      tabIndex={0}
      className={className}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </span>
  )
}
