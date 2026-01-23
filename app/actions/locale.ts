'use server'

import { cookies } from 'next/headers'
import { Locale, cookieName, isValidLocale } from '@/lib/i18n/config'

export async function setLocale(locale: Locale) {
  if (!isValidLocale(locale)) {
    return { error: 'Invalid locale' }
  }

  const cookieStore = await cookies()
  cookieStore.set(cookieName, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  })

  return { success: true }
}

