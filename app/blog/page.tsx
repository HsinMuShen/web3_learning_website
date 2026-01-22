import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import BlogList from '@/components/blog/BlogList'
import { getAllPosts } from '@/lib/blog'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Educational articles about Bitcoin and Web3 for beginners.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedHeading
            as="h1"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Learn Bitcoin & Web3
          </AnimatedHeading>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            <p>Simple, beginner-friendly explanations of complex concepts.</p>
          </AnimatedDiv>
        </div>
      </Section>

      <Section>
        <AnimatedSection>
          <BlogList posts={posts} />
        </AnimatedSection>
      </Section>
    </>
  )
}

