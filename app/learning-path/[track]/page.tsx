import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Section from '@/components/ui/Section'
import AnimatedSection from '@/components/ui/AnimatedSection'
import {
  getLearningTrackWithPosts,
  getLearningTrackIds,
  getLocalizedTitle,
  getLocalizedDescription,
  getLocalizedBadgeName,
} from '@/lib/learning-path'
import { getServerTranslations } from '@/lib/i18n/server'
import ClientTrackView from './ClientTrackView'
import { ArrowLeft, Clock, BookOpen, Award } from 'lucide-react'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ track: string }>
}

export async function generateStaticParams() {
  const trackIds = getLearningTrackIds()
  return trackIds.map((track) => ({
    track,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { track: trackId } = await params
  const { locale } = await getServerTranslations()
  const track = getLearningTrackWithPosts(trackId, locale)

  if (!track) {
    return {
      title: 'Track Not Found',
    }
  }

  const title = getLocalizedTitle(track, locale)
  const description = getLocalizedDescription(track, locale)

  return {
    title: `${title} | Learning Paths`,
    description,
  }
}

export default async function TrackPage({ params }: PageProps) {
  const { track: trackId } = await params
  const { locale } = await getServerTranslations()
  const track = getLearningTrackWithPosts(trackId, locale)

  if (!track) {
    notFound()
  }

  const title = getLocalizedTitle(track, locale)
  const description = getLocalizedDescription(track, locale)
  const badgeName = getLocalizedBadgeName(track.badge, locale)

  const difficultyLabels = {
    beginner: { en: 'Beginner', es: 'Principiante', 'zh-TW': '初學者' },
    intermediate: { en: 'Intermediate', es: 'Intermedio', 'zh-TW': '中級' },
    advanced: { en: 'Advanced', es: 'Avanzado', 'zh-TW': '高級' },
  }

  const difficultyLabel =
    difficultyLabels[track.difficulty][
      locale as keyof typeof difficultyLabels[typeof track.difficulty]
    ] || difficultyLabels[track.difficulty].en

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/learning-path"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Learning Paths</span>
          </Link>

          {/* Track Header */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="text-6xl">{track.icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {title}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded bg-primary-100 text-primary-800">
                  {difficultyLabel}
                </span>
                <div className="flex items-center space-x-1 text-gray-600">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm">
                    {track.articles.length} articles
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{track.estimatedTime} min</span>
                </div>
              </div>
              <p className="text-lg text-gray-600">
                {description}
              </p>
            </div>
          </div>

          {/* Badge Reward */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-4">
              <div className="text-5xl">{track.badge.icon}</div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Complete this track to earn:</p>
                <p className="text-2xl font-bold text-gray-900">{badgeName}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Prerequisites Section */}
      {track.prerequisites && track.prerequisites.length > 0 && (
        <Section className="bg-yellow-50 border-y border-yellow-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">⚠️</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Prerequisites Required
                </h3>
                <p className="text-sm text-gray-600">
                  It's recommended to complete the{' '}
                  <strong>{track.prerequisites.join(', ')}</strong> track(s) before
                  starting this one.
                </p>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Track Content - Client Component for Progress Tracking */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <ClientTrackView track={track} locale={locale} />
        </div>
      </Section>

      {/* Next Tracks Section */}
      {track.nextTracks && track.nextTracks.length > 0 && (
        <Section className="bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What's Next?
              </h2>
              <p className="text-gray-600 mb-6">
                After completing this track, you can explore these related learning
                paths:
              </p>
              <div className="flex flex-wrap gap-3">
                {track.nextTracks.map((nextTrackId) => (
                  <Link
                    key={nextTrackId}
                    href={`/learning-path/${nextTrackId}`}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all"
                  >
                    <span className="font-medium text-gray-900 capitalize">
                      {nextTrackId}
                    </span>
                    <span className="text-gray-400">→</span>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Section>
      )}
    </>
  )
}
