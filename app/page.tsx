import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import AnimatedCard from '@/components/ui/AnimatedCard'
import Button from '@/components/ui/Button'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Learn Bitcoin and Web3 fundamentals in simple, beginner-friendly language.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedHeading
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance"
          >
            Learn Bitcoin & Web3,{' '}
            <span className="text-primary-600">Made Simple</span>
          </AnimatedHeading>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 text-balance"
          >
            <p>
              Understanding Bitcoin and Web3 doesn&apos;t have to be complicated. We
              break down complex concepts into simple, easy-to-understand lessons
              perfect for absolute beginners.
            </p>
          </AnimatedDiv>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/blog" size="lg">
              Start Learning
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Learn More
            </Button>
          </AnimatedDiv>
        </div>
      </Section>

      {/* What You'll Learn Section */}
      <Section>
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            What You&apos;ll Learn
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our lessons cover everything from the basics of Bitcoin to
            understanding the broader Web3 ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Bitcoin Basics',
                description:
                  'Learn what Bitcoin is, how it works, and why it matters in simple terms.',
                icon: '₿',
              },
              {
                title: 'Blockchain Explained',
                description:
                  'Understand the technology behind Bitcoin and how blockchains work.',
                icon: '⛓️',
              },
              {
                title: 'Web3 Fundamentals',
                description:
                  'Explore the decentralized web and how it differs from the internet you know.',
                icon: '🌐',
              },
              {
                title: 'Digital Wallets',
                description:
                  'Learn about digital wallets and how to safely store cryptocurrency.',
                icon: '👛',
              },
              {
                title: 'Smart Contracts',
                description:
                  'Discover how smart contracts work and their real-world applications.',
                icon: '📜',
              },
              {
                title: 'Decentralization',
                description:
                  'Understand what decentralization means and why it matters.',
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
              How It Works
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Our learning journey is designed to be simple and accessible.
            </p>

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Start with the Basics',
                  description:
                    'We begin with fundamental concepts, assuming you have zero prior knowledge of Bitcoin or Web3.',
                },
                {
                  step: '2',
                  title: 'Learn Through Stories',
                  description:
                    'Complex ideas are explained using simple analogies, visual diagrams, and real-world examples.',
                },
                {
                  step: '3',
                  title: 'Build Your Understanding',
                  description:
                    'Each lesson builds on the previous one, gradually expanding your knowledge of the Web3 world.',
                },
                {
                  step: '4',
                  title: 'Practice & Explore',
                  description:
                    'Apply what you learn and explore further resources to deepen your understanding.',
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
            Ready to Start Learning?
          </h2>
          <p className="text-gray-600 mb-8">
            Begin your journey into Bitcoin and Web3 with our first lesson,
            designed specifically for beginners.
          </p>
          <Button href="/blog" size="lg">
            Explore Our Blog
          </Button>
        </AnimatedSection>
      </Section>
    </>
  )
}

