import { BlogPost } from '@/lib/blog'
import BlogCard from './BlogCard'

interface BlogListProps {
  posts: BlogPost[]
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">
          No blog posts yet. Check back soon!
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          description={post.description}
          slug={post.slug}
          date={post.date}
          readingTime={post.readingTime}
          featuredImage={post.featuredImage}
        />
      ))}
    </div>
  )
}

