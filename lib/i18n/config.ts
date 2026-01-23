export const locales = ['en', 'zh-TW', 'es'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  'zh-TW': '繁體中文',
  es: 'Español',
}

export const cookieName = 'NEXT_LOCALE'

export function isValidLocale(locale: string): locale is Locale {
  return ['en', 'zh-TW', 'es'].includes(locale)
}

