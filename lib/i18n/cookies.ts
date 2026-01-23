import { cookies } from 'next/headers'
import { Locale, defaultLocale, cookieName, isValidLocale } from './config'

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get(cookieName)
  
  if (localeCookie?.value && isValidLocale(localeCookie.value)) {
    return localeCookie.value as Locale
  }
  
  return defaultLocale
}

export async function setLocaleCookie(locale: Locale) {
  const cookieStore = await cookies()
  cookieStore.set(cookieName, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  })
}

