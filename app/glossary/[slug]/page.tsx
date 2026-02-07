import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import {
  getTermBySlug,
  getTermSlugs,
  getCategoryName,
  getCategoryIcon,
  getRelatedTermsData,
} from '@/lib/glossary'
import { getServerTranslations } from '@/lib/i18n/server'
import remarkGfm from 'remark-gfm'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getTermSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const { locale } = await getServerTranslations()
  const term = getTermBySlug(slug, locale as any)

  if (!term) {
    return {
      title: 'Term Not Found',
    }
  }

  return {
    title: `${term.term} - Web3 Glossary`,
    description: term.content.substring(0, 160),
  }
}

const mdxComponents = {
  h2: (props: any) => (
    <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2" {...props} />
  ),
  p: (props: any) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props} />
  ),
  li: (props: any) => <li className="ml-4" {...props} />,
  strong: (props: any) => <strong className="font-semibold text-gray-900" {...props} />,
  code: (props: any) => (
    <code
      className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800"
      {...props}
    />
  ),
}

export default async function TermPage({ params }: PageProps) {
  const { slug } = await params
  const { locale, translations } = await getServerTranslations()
  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }
  
  const term = getTermBySlug(slug, locale as any)

  if (!term) {
    notFound()
  }

  const categoryName = getCategoryName(term.category, locale)
  const categoryIcon = getCategoryIcon(term.category)
  const relatedTerms = getRelatedTermsData(term, locale as any)

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  }

  const difficultyLabels = {
    beginner: t('blog.difficulty.beginner'),
    intermediate: t('blog.difficulty.intermediate'),
    advanced: t('blog.difficulty.advanced'),
  }

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/glossary"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('glossary.backToGlossary')}</span>
          </Link>

          {/* Term Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <span className="text-5xl">{categoryIcon}</span>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {term.term}
                </h1>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">{categoryName}</span>
                  <span className="text-gray-300">•</span>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${
                      difficultyColors[term.difficulty]
                    }`}
                  >
                    {difficultyLabels[term.difficulty]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-8">
            <MDXRemote
              source={term.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>

          {/* Related Terms */}
          {relatedTerms.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('glossary.relatedTerms')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedTerms.map((relatedTerm) => (
                  <Link
                    key={relatedTerm.slug}
                    href={`/glossary/${relatedTerm.slug}`}
                  >
                    <Card hover>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">
                          {getCategoryIcon(relatedTerm.category)}
                        </span>
                        <h3 className="font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                          {relatedTerm.term}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        {getCategoryName(relatedTerm.category, locale)}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  )
}
