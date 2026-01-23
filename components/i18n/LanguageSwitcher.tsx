'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Locale, localeNames } from '@/lib/i18n/config'
import { setLocale } from '@/app/actions/locale'

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = async (locale: Locale) => {
    if (locale === currentLocale) {
      setIsOpen(false)
      return
    }

    startTransition(async () => {
      await setLocale(locale)
      router.refresh()
      setIsOpen(false)
    })
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors rounded-md hover:bg-gray-100"
        aria-label="Change language"
        aria-expanded={isOpen}
        disabled={isPending}
      >
        <span className="text-lg">🌐</span>
        <span>{localeNames[currentLocale]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="py-1">
              {Object.entries(localeNames).map(([locale, name]) => (
                <button
                  key={locale}
                  onClick={() => handleLanguageChange(locale as Locale)}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    locale === currentLocale
                      ? 'bg-primary-50 text-primary-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isPending || locale === currentLocale}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

