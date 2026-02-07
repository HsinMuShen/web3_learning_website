'use client'

import { useState, useRef, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import GlossaryLink from './GlossaryLink'

interface GlossaryTooltipProps {
  term: string
  slug: string
  definition: string
  children: React.ReactNode
  learnMoreText?: string
}

const TOOLTIP_OFFSET = 8
const TOOLTIP_WIDTH = 256 // w-64

export default function GlossaryTooltip({
  term,
  slug,
  definition,
  children,
  learnMoreText = 'Click to learn more →',
}: GlossaryTooltipProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    if (!isHovered || typeof document === 'undefined') return
    const el = triggerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const left = Math.max(
      TOOLTIP_OFFSET,
      Math.min(rect.left + rect.width / 2 - TOOLTIP_WIDTH / 2, (typeof window !== 'undefined' ? window.innerWidth : 0) - TOOLTIP_WIDTH - TOOLTIP_OFFSET)
    )
    setPosition({
      left,
      top: rect.top - TOOLTIP_OFFSET,
    })
  }, [isHovered])

  const tooltipContent =
    isHovered && typeof document !== 'undefined' ? (
      <div
        className="fixed z-[9999] w-64 min-w-64 p-4 text-sm bg-white border border-gray-200 rounded-lg shadow-xl"
        style={{
          left: position.left,
          top: position.top,
          transform: 'translateY(-100%)',
        }}
      >
        {/* Arrow */}
        <div className="absolute left-1/2 top-full -translate-x-1/2 -mt-px border-8 border-transparent border-t-white" />
        <div className="absolute left-1/2 top-full -translate-x-1/2 -mt-2 border-8 border-transparent border-t-gray-200" />
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-gray-900">{term}</h4>
            <span className="text-xs text-primary-600">📖</span>
          </div>
          <p className="text-gray-600 leading-relaxed">{definition}</p>
          <div className="mt-2 pt-2 border-t border-gray-100">
            <span className="text-xs text-gray-500">{learnMoreText}</span>
          </div>
        </div>
      </div>
    ) : null

  return (
    <>
      <span ref={triggerRef} className="relative inline-block">
        <GlossaryLink
          href={`/glossary/${slug}`}
          className="text-primary-600 underline decoration-dotted hover:text-primary-700 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children || term}
        </GlossaryLink>
      </span>
      {tooltipContent && createPortal(tooltipContent, document.body)}
    </>
  )
}
