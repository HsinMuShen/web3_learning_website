import { ReactNode } from 'react'
import { getLocale } from '@/lib/i18n/cookies'
import { getTranslations } from '@/lib/i18n/translations'
import { Locale } from '@/lib/i18n/config'
import { Translations } from '@/lib/i18n/translations'

interface LocaleProviderProps {
  children: (locale: Locale, translations: Translations) => ReactNode
}

export default async function LocaleProvider({ children }: LocaleProviderProps) {
  const locale = await getLocale()
  const translations = getTranslations(locale)
  
  return <>{children(locale, translations)}</>
}

