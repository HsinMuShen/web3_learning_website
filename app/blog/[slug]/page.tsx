import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Section from '@/components/ui/Section'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import Image from 'next/image'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import ConceptCard from '@/components/educational/ConceptCard'
import Diagram from '@/components/educational/Diagram'
import PaymentComparison from '@/components/educational/PaymentComparison'
import BlockchainDiagram from '@/components/educational/BlockchainDiagram'
import TransactionFlow from '@/components/educational/TransactionFlow'
import NetworkDiagram from '@/components/educational/NetworkDiagram'
import ProofOfWork from '@/components/educational/ProofOfWork'
import DigitalSignature from '@/components/educational/DigitalSignature'
import { getServerTranslations } from '@/lib/i18n/server'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const { locale } = await getServerTranslations()
  const post = getPostBySlug(slug, locale)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  }
}

const mdxComponents = {
  h1: (props: any) => (
    <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2
      className="text-3xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-700 mb-4 leading-relaxed" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props} />
  ),
  li: (props: any) => <li className="ml-4" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-primary-500 pl-4 italic my-4 text-gray-600"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4"
      {...props}
    />
  ),
  a: (props: any) => (
    <a
      className="text-primary-600 hover:text-primary-700 underline"
      {...props}
    />
  ),
  img: (props: any) => {
    const { src, alt = '', width, height, ...rest } = props
    
    // Use Next.js Image for all images (both local and external)
    // External images are now allowed via next.config.js remotePatterns
    return (
      <div className="my-6 rounded-lg overflow-hidden">
        <Image
          src={src || ''}
          alt={alt}
          width={width || 800}
          height={height || 600}
          className="rounded-lg max-w-full h-auto"
          // For external images without known dimensions, use unoptimized
          unoptimized={!width && !height && (src?.startsWith('http://') || src?.startsWith('https://'))}
          {...rest}
        />
      </div>
    )
  },
  ConceptCard,
  Diagram,
  PaymentComparison,
  BlockchainDiagram,
  TransactionFlow,
  NetworkDiagram,
  ProofOfWork,
  DigitalSignature,
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const { locale, translations } = await getServerTranslations()
  const post = getPostBySlug(slug, locale)

  if (!post) {
    notFound()
  }

  const dateLocale = locale === 'zh-TW' ? 'zh-TW' : locale === 'es' ? 'es-ES' : 'en-US'
  const formattedDate = new Date(post.date).toLocaleDateString(dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <article>
        {/* Hero Section */}
        <Section className="bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{post.description}</p>
            <div className="flex items-center gap-4 text-gray-500">
              <time dateTime={post.date}>{formattedDate}</time>
              <span>•</span>
              <span>{post.readingTime} {translations.common.minRead}</span>
            </div>
            {post.featuredImage && (
              <div className="relative w-full h-64 md:h-96 mt-8 rounded-lg overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </Section>

        {/* Content */}
        <Section>
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypeAutolinkHeadings,
                      {
                        behavior: 'wrap',
                        properties: {
                          className: ['anchor'],
                        },
                      },
                    ],
                    // @ts-expect-error - rehype-highlight has nested dependency conflicts
                    rehypeHighlight,
                  ],
                },
              }}
            />
          </div>
        </Section>
      </article>
    </>
  )
}

