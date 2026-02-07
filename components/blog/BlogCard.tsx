import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import Tag from './Tag'
import { Locale } from '@/lib/i18n/config'

interface BlogCardProps {
  title: string
  description: string
  slug: string
  date: string
  readingTime: number
  featuredImage?: string
  tags?: string[]
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
  tags,
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
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.slice(0, 3).map((tag) => (
              <Tag 
                key={tag} 
                tag={tag} 
                size="sm"
              />
            ))}
            {tags.length > 3 && (
              <span className="text-xs text-gray-500 self-center">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500 pt-3 border-t border-gray-100">
          <span>{formattedDate}</span>
          <span>{readingTime} {minReadText}</span>
        </div>
      </Card>
    </Link>
  )
}

