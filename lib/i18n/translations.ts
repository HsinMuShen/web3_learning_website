import { Locale } from './config'
import en from '@/messages/en.json'
import zhTW from '@/messages/zh-TW.json'
import es from '@/messages/es.json'

const translations = {
  en,
  'zh-TW': zhTW,
  es,
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}

export type Translations = typeof en

