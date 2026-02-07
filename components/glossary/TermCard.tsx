import Link from 'next/link'
import Card from '@/components/ui/Card'
import { GlossaryTerm } from '@/lib/glossary'

interface TermCardProps {
  term: GlossaryTerm
  categoryName: string
  categoryIcon: string
}

export default function TermCard({ term, categoryName, categoryIcon }: TermCardProps) {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  }

  const difficultyLabels = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  }

  // Extract first paragraph from content for preview
  const preview = term.content
    .split('\n\n')
    .find((p) => p.trim() && !p.startsWith('#'))
    ?.substring(0, 150) + '...'

  return (
    <Link href={`/glossary/${term.slug}`} className="block">
      <Card hover className="h-full">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{categoryIcon}</span>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                {term.term}
              </h3>
              <p className="text-xs text-gray-500">{categoryName}</p>
            </div>
          </div>
          <span
            className={`px-2 py-1 text-xs font-medium rounded ${
              difficultyColors[term.difficulty]
            }`}
          >
            {difficultyLabels[term.difficulty]}
          </span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-3">{preview}</p>

        {term.relatedTerms && term.relatedTerms.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              Related: {term.relatedTerms.slice(0, 3).join(', ')}
              {term.relatedTerms.length > 3 && '...'}
            </p>
          </div>
        )}
      </Card>
    </Link>
  )
}
