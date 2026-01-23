import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import BlogList from '@/components/blog/BlogList'
import { getAllPosts } from '@/lib/blog'
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

      <Section>
        <AnimatedSection>
          <BlogList posts={posts} translations={translations} locale={locale} />
        </AnimatedSection>
      </Section>
    </>
  )
}

