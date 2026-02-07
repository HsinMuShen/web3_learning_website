import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import { getAllTags } from '@/lib/blog'
import Tag from '@/components/blog/Tag'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import { getServerTranslations } from '@/lib/i18n/server'

export const metadata: Metadata = {
  title: 'Blog Tags',
  description: 'Browse blog posts by tags',
}

export default async function TagsPage() {
  const { locale } = await getServerTranslations()
  const tags = getAllTags(locale)

  return (
    <>
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedHeading
            as="h1"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            📚 Blog Tags
          </AnimatedHeading>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            <p>Browse articles by topic</p>
          </AnimatedDiv>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              All Tags ({tags.length})
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {tags.map(({ tag, count }) => (
                <Tag 
                  key={tag} 
                  tag={tag} 
                  count={count} 
                  size="lg"
                />
              ))}
            </div>

            {tags.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                No tags found
              </p>
            )}
          </div>

          <div className="mt-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
              💡 How to use tags
            </h3>
            <p className="text-gray-700 mb-3">
              Tags help you find related articles quickly. Click on any tag to see all articles with that tag.
            </p>
            <div className="text-sm text-gray-600">
              <p className="mb-1">• <strong>beginners</strong> - Articles perfect for newcomers</p>
              <p className="mb-1">• <strong>security</strong> - Learn about staying safe in crypto</p>
              <p className="mb-1">• <strong>blockchain</strong> - Core blockchain technology articles</p>
              <p>• And many more topics to explore!</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
