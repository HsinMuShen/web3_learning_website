import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import BlogList from '@/components/blog/BlogList'
import Tag from '@/components/blog/Tag'
import { getAllPosts, getAllTags } from '@/lib/blog'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { getServerTranslations } from '@/lib/i18n/server'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Educational articles about Bitcoin and Web3 for beginners.',
}

export default async function BlogPage() {
  const { translations, locale } = await getServerTranslations()
  const posts = getAllPosts(locale)
  const tags = getAllTags(locale).slice(0, 15) // Show top 15 tags

  return (
    <>
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedHeading
            as="h1"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {translations.blog.title}
          </AnimatedHeading>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            <p>{translations.blog.subtitle}</p>
          </AnimatedDiv>
        </div>
      </Section>

      {tags.length > 0 && (
        <Section className="pt-8 pb-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  🏷️ Browse by Tags
                </h2>
                <Link 
                  href="/tags"
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  View all →
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map(({ tag, count }) => (
                  <Tag 
                    key={tag} 
                    tag={tag} 
                    count={count}
                    size="md"
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>
      )}

      <Section>
        <AnimatedSection>
          <BlogList posts={posts} translations={translations} locale={locale} />
        </AnimatedSection>
      </Section>
    </>
  )
}

