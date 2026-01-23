import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { getServerTranslations } from '@/lib/i18n/server'

export const metadata: Metadata = {
  title: 'Terms & Privacy Policy',
  description: 'Terms of use and privacy policy for Web3 Learn.',
}

export default async function Terms() {
  const { translations, locale } = await getServerTranslations()
  return (
    <>
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedHeading
            as="h1"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {translations.terms.title}
          </AnimatedHeading>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600"
          >
            <p>
              {translations.terms.lastUpdated}: {new Date().toLocaleDateString(locale === 'zh-TW' ? 'zh-TW' : locale === 'es' ? 'es-ES' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </AnimatedDiv>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
          {/* Terms of Use */}
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {translations.terms.termsOfUse}
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {translations.terms.acceptanceOfTerms}
                </h3>
                <p>{translations.terms.acceptanceOfTermsText}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {translations.terms.educationalContent}
                </h3>
                <p>{translations.terms.educationalContentText}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {translations.terms.notFinancialAdvice}
                </h3>
                <p>{translations.terms.notFinancialAdviceText}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {translations.terms.intellectualProperty}
                </h3>
                <p>{translations.terms.intellectualPropertyText}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Privacy Policy */}
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {translations.terms.privacyPolicy}
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {translations.terms.informationWeCollect}
                </h3>
                <p>{translations.terms.informationWeCollectText}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {translations.terms.cookiesAndTracking}
                </h3>
                <p>{translations.terms.cookiesAndTrackingText}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {translations.terms.thirdPartyServices}
                </h3>
                <p>{translations.terms.thirdPartyServicesText}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {translations.terms.yourRights}
                </h3>
                <p>{translations.terms.yourRightsText}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {translations.terms.contactInformation}
            </h2>
            <p className="text-gray-700">
              {translations.terms.contactInformationText}
            </p>
          </AnimatedSection>
        </div>
      </Section>
    </>
  )
}

