import { getLocale } from './cookies'
import { getTranslations } from './translations'

export async function getServerTranslations() {
  const locale = await getLocale()
  const translations = getTranslations(locale)
  return { locale, translations }
}

