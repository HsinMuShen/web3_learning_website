import Link from 'next/link'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Post Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/blog">Back to Blog</Button>
      </div>
    </Section>
  )
}

