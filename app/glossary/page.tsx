import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { getAllTerms, getCategories, getCategoryName, getCategoryIcon, getGlossaryStats } from '@/lib/glossary'
import { getServerTranslations } from '@/lib/i18n/server'
import ClientGlossaryView from './ClientGlossaryView'

export const metadata: Metadata = {
  title: 'Web3 Glossary | Web3 Learning',
  description:
    'Comprehensive glossary of Web3, blockchain, and cryptocurrency terms with simple explanations for beginners.',
}

export default async function GlossaryPage() {
  const { locale, translations } = await getServerTranslations()
  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }
  
  const allTerms = getAllTerms(locale as any)
  const categories = getCategories()
  const stats = getGlossaryStats(locale as any)

  // Prepare categories with localized names for client
  const categoryOptions = Object.keys(categories).map((id) => ({
    id,
    name: getCategoryName(id, locale),
    icon: getCategoryIcon(id),
    count: stats.categoryCount[id] || 0,
  }))

  // Prepare terms with category info
  const termsWithCategory = allTerms.map((term) => ({
    ...term,
    categoryName: getCategoryName(term.category, locale),
    categoryIcon: getCategoryIcon(term.category),
  }))

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-5xl mb-4">📖</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('glossary.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            {t('glossary.subtitle')}
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span>{stats.total} {t('glossary.terms')}</span>
            <span>•</span>
            <span>{stats.categories} {t('glossary.categories')}</span>
            <span>•</span>
            <span>{t('glossary.beginnerFriendly')}</span>
          </div>
        </div>
      </Section>

      {/* Glossary Content */}
      <Section>
        <AnimatedSection>
          <ClientGlossaryView
            terms={termsWithCategory}
            categories={categoryOptions}
            translations={{
              filterByCategory: t('glossary.filterByCategory'),
              browseByLetter: t('glossary.browseByLetter'),
              termsFound: t('glossary.termsFound'),
              termFound: t('glossary.termFound'),
              clearFilters: t('glossary.clearFilters'),
              noTermsFound: t('glossary.noTermsFound'),
              noTermsFoundDesc: t('glossary.noTermsFoundDesc'),
              searchPlaceholder: t('glossary.searchPlaceholder'),
            }}
          />
        </AnimatedSection>
      </Section>

      {/* How to Use Section */}
      <Section className="bg-gray-50">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t('glossary.howToUse')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('glossary.search')}</h3>
                <p className="text-sm text-gray-600">
                  {t('glossary.searchDesc')}
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="text-4xl mb-3">🏷️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('glossary.filter')}</h3>
                <p className="text-sm text-gray-600">
                  {t('glossary.filterDesc')}
                </p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="text-4xl mb-3">🔗</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('glossary.explore')}</h3>
                <p className="text-sm text-gray-600">
                  {t('glossary.exploreDesc')}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  )
}
