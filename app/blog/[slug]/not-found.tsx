import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { getServerTranslations } from '@/lib/i18n/server'

export default async function NotFound() {
  const { translations } = await getServerTranslations()
  
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {translations.blog.postNotFound}
        </h1>
        <p className="text-gray-600 mb-8">
          {translations.blog.postNotFoundDesc}
        </p>
        <Button href="/blog">{translations.blog.backToBlog}</Button>
      </div>
    </Section>
  )
}

