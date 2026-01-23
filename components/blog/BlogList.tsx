import { BlogPost } from '@/lib/blog'
import BlogCard from './BlogCard'
import { Translations } from '@/lib/i18n/translations'
import { Locale } from '@/lib/i18n/config'

interface BlogListProps {
  posts: BlogPost[]
  translations: Translations
  locale: Locale
}

export default function BlogList({ posts, translations, locale }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">
          {translations.blog.noPosts}
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          description={post.description}
          slug={post.slug}
          date={post.date}
          readingTime={post.readingTime}
          featuredImage={post.featuredImage}
          locale={locale}
          minReadText={translations.common.minRead}
        />
      ))}
    </div>
  )
}

