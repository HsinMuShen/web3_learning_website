import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import AnimatedCard from '@/components/ui/AnimatedCard'
import Button from '@/components/ui/Button'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { getServerTranslations } from '@/lib/i18n/server'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Learn Bitcoin and Web3 fundamentals in simple, beginner-friendly language.',
}

export default async function Home() {
  const { translations } = await getServerTranslations()
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedHeading
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance"
          >
            {translations.home.title}
          </AnimatedHeading>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 text-balance"
          >
            <p>{translations.home.subtitle}</p>
          </AnimatedDiv>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/blog" size="lg">
              {translations.home.startLearning}
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              {translations.home.learnMore}
            </Button>
          </AnimatedDiv>
        </div>
      </Section>

      {/* What You'll Learn Section */}
      <Section>
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            {translations.home.whatYoullLearn}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {translations.home.whatYoullLearnDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: translations.home.bitcoinBasics,
                description: translations.home.bitcoinBasicsDesc,
                icon: '₿',
              },
              {
                title: translations.home.blockchainExplained,
                description: translations.home.blockchainExplainedDesc,
                icon: '⛓️',
              },
              {
                title: translations.home.web3Fundamentals,
                description: translations.home.web3FundamentalsDesc,
                icon: '🌐',
              },
              {
                title: translations.home.digitalWallets,
                description: translations.home.digitalWalletsDesc,
                icon: '👛',
              },
              {
                title: translations.home.smartContracts,
                description: translations.home.smartContractsDesc,
                icon: '📜',
              },
              {
                title: translations.home.decentralization,
                description: translations.home.decentralizationDesc,
                icon: '🔗',
              },
            ].map((item, index) => (
              <AnimatedCard key={item.title} index={index}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* How It Works Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              {translations.home.howItWorks}
            </h2>
            <p className="text-center text-gray-600 mb-12">
              {translations.home.howItWorksDesc}
            </p>

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: translations.home.step1,
                  description: translations.home.step1Desc,
                },
                {
                  step: '2',
                  title: translations.home.step2,
                  description: translations.home.step2Desc,
                },
                {
                  step: '3',
                  title: translations.home.step3,
                  description: translations.home.step3Desc,
                },
                {
                  step: '4',
                  title: translations.home.step4,
                  description: translations.home.step4Desc,
                },
              ].map((item, index) => (
                <AnimatedDiv
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section>
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.home.readyToStart}
          </h2>
          <p className="text-gray-600 mb-8">
            {translations.home.readyToStartDesc}
          </p>
          <Button href="/blog" size="lg">
            {translations.home.exploreBlog}
          </Button>
        </AnimatedSection>
      </Section>
    </>
  )
}

