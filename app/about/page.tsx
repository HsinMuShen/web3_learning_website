import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { getServerTranslations } from '@/lib/i18n/server'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about our mission to make Bitcoin and Web3 education accessible to everyone.',
}

export default async function About() {
  const { translations } = await getServerTranslations()
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedHeading
            as="h1"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {translations.about.title}
          </AnimatedHeading>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            <p>{translations.about.subtitle}</p>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Mission Statement */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {translations.about.mission}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>{translations.about.missionText1}</p>
              <p>{translations.about.missionText2}</p>
              <p>{translations.about.missionText3}</p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Educational Philosophy */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {translations.about.philosophy}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {translations.about.simplicityFirst}
                </h3>
                <p className="text-gray-700">
                  {translations.about.simplicityFirstDesc}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {translations.about.visualLearning}
                </h3>
                <p className="text-gray-700">
                  {translations.about.visualLearningDesc}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {translations.about.accessibilityForAll}
                </h3>
                <p className="text-gray-700">
                  {translations.about.accessibilityForAllDesc}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {translations.about.noJargon}
                </h3>
                <p className="text-gray-700">
                  {translations.about.noJargonDesc}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* What Makes This Different */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {translations.about.whatMakesDifferent}
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>{translations.about.whatMakesDifferentText1}</p>
              <p>{translations.about.whatMakesDifferentText2}</p>
              <p>{translations.about.whatMakesDifferentText3}</p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-primary-50">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translations.about.readyToStart}
            </h2>
            <p className="text-gray-700 mb-6">
              {translations.about.readyToStartDesc}
            </p>
            <Button href="/blog" size="lg">
              {translations.about.exploreBlog}
            </Button>
          </AnimatedSection>
        </div>
      </Section>
    </>
  )
}

