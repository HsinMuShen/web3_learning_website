import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about our mission to make Bitcoin and Web3 education accessible to everyone.',
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedHeading
            as="h1"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            About Web3 Learn
          </AnimatedHeading>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            <p>
              Making Bitcoin and Web3 education accessible to everyone, one simple
              explanation at a time.
            </p>
          </AnimatedDiv>
        </div>
      </Section>

      {/* Mission Statement */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Bitcoin and Web3 technologies represent one of the most
                significant innovations of our time. However, the complexity of
                these concepts often creates barriers that prevent people from
                understanding and participating in this new digital economy.
              </p>
              <p>
                Our mission is to break down these barriers by providing clear,
                simple, and accessible educational content. We believe that
                everyone, regardless of their technical background or prior
                knowledge, should have the opportunity to understand Bitcoin and
                Web3.
              </p>
              <p>
                Whether you&apos;re a complete beginner, a student, or someone simply
                curious about these technologies, we&apos;re here to guide you on
                your learning journey.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Educational Philosophy */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Educational Philosophy
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Simplicity First
                </h3>
                <p className="text-gray-700">
                  We believe that complex concepts can be explained simply
                  without losing their essence. Every lesson is designed to be
                  understood by someone with zero prior knowledge.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Visual Learning
                </h3>
                <p className="text-gray-700">
                  We use diagrams, illustrations, and visual metaphors to help
                  you understand abstract concepts. A picture is worth a
                  thousand words, especially when learning something new.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Accessibility for All
                </h3>
                <p className="text-gray-700">
                  Our content is designed to be accessible to everyone,
                  including those using assistive technologies. We follow WCAG
                  guidelines to ensure our website is usable by all learners.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  No Jargon Without Explanation
                </h3>
                <p className="text-gray-700">
                  We avoid technical jargon whenever possible. When we must use
                  technical terms, we explain them immediately in simple
                  language.
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
              What Makes This Different
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Many resources about Bitcoin and Web3 assume you already have a
                background in computer science, cryptography, or economics. We
                don&apos;t.
              </p>
              <p>
                Our content is specifically designed for absolute beginners. We
                start from the very beginning, using analogies and simple
                language to explain concepts that might seem intimidating
                elsewhere.
              </p>
              <p>
                We&apos;re committed to creating an inclusive learning environment
                where everyone feels welcome, regardless of their age, technical
                background, or prior knowledge.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-primary-50">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-gray-700 mb-6">
              Begin your journey with our beginner-friendly blog posts designed
              to make Bitcoin and Web3 concepts easy to understand.
            </p>
            <a
              href="/blog"
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Explore Our Blog
            </a>
          </AnimatedSection>
        </div>
      </Section>
    </>
  )
}

