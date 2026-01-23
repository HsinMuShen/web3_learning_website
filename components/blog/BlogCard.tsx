import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import { Locale } from '@/lib/i18n/config'

interface BlogCardProps {
  title: string
  description: string
  slug: string
  date: string
  readingTime: number
  featuredImage?: string
  locale?: Locale
  minReadText?: string
}

export default function BlogCard({
  title,
  description,
  slug,
  date,
  readingTime,
  featuredImage,
  locale = 'en',
  minReadText = 'min read',
}: BlogCardProps) {
  const localeMap: Record<Locale, string> = {
    en: 'en-US',
    'zh-TW': 'zh-TW',
    es: 'es-ES',
  }
  
  const formattedDate = new Date(date).toLocaleDateString(localeMap[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <Card hover className="h-full flex flex-col">
        {featuredImage && (
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{formattedDate}</span>
          <span>{readingTime} {minReadText}</span>
        </div>
      </Card>
    </Link>
  )
}

