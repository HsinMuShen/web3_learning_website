import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Section from '@/components/ui/Section'
import BlogList from '@/components/blog/BlogList'
import { getPostsByTag, getAllTags } from '@/lib/blog'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Tag from '@/components/blog/Tag'
import Link from 'next/link'
import { getServerTranslations } from '@/lib/i18n/server'

interface TagPageProps {
  params: Promise<{
    tag: string
  }>
}

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map(({ tag }) => ({
    tag: tag,
  }))
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)
  
  return {
    title: `Posts tagged with "${decodedTag}"`,
    description: `Browse all blog posts tagged with ${decodedTag}`,
  }
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params
  const { translations, locale } = await getServerTranslations()
  const decodedTag = decodeURIComponent(tag)
  const posts = getPostsByTag(decodedTag, locale)
  const allTags = getAllTags(locale)

  if (posts.length === 0) {
    notFound()
  }

  // Get related tags (tags that appear with this tag)
  const relatedTags = allTags
    .filter(({ tag: t }) => {
      if (t === decodedTag) return false
      return posts.some((post) => post.tags?.includes(t))
    })
    .slice(0, 10) // Show top 10 related tags

  return (
    <>
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/tags"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-4 text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to all tags
          </Link>

          <AnimatedHeading
            as="h1"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <Tag 
              tag={decodedTag} 
              count={posts.length} 
              size="lg"
              clickable={false}
            />
          </AnimatedHeading>
          
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            <p>
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} found
            </p>
          </AnimatedDiv>
        </div>
      </Section>

      <Section>
        <AnimatedSection>
          <BlogList posts={posts} translations={translations} locale={locale} />
        </AnimatedSection>

        {relatedTags.length > 0 && (
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                🔗 Related Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {relatedTags.map(({ tag: relatedTag, count }) => (
                  <Tag
                    key={relatedTag}
                    tag={relatedTag}
                    count={count}
                    size="md"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </Section>
    </>
  )
}
