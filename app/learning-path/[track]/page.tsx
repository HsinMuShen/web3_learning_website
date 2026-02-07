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
  const { locale, translations } = await getServerTranslations()
  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }
  
  const track = getLearningTrackWithPosts(trackId, locale)

  if (!track) {
    notFound()
  }

  const title = getLocalizedTitle(track, locale)
  const description = getLocalizedDescription(track, locale)
  const badgeName = getLocalizedBadgeName(track.badge, locale)

  const difficultyLabels = {
    beginner: t('blog.difficulty.beginner'),
    intermediate: t('blog.difficulty.intermediate'),
    advanced: t('blog.difficulty.advanced'),
  }

  const difficultyLabel = difficultyLabels[track.difficulty]

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
            <span>{t('learningPath.backToLearningPaths')}</span>
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
                    {track.articles.length} {t('learningPath.articles')}
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
                <p className="text-sm text-gray-600 mb-1">{t('learningPath.completeArticles')}</p>
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
                  {t('learningPath.prerequisitesRequired')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t('learningPath.prerequisitesDesc')}{' '}
                  <strong>{track.prerequisites.join(', ')}</strong> {t('learningPath.prerequisitesDesc2')}
                </p>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Track Content - Client Component for Progress Tracking */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <ClientTrackView 
            track={track} 
            locale={locale}
            translations={{
              yourProgress: t('learningPath.yourProgress'),
              completed: t('learningPath.completed'),
              optional: t('learningPath.optional'),
              required: t('learningPath.required'),
              of: t('learningPath.of'),
              articles: t('learningPath.articles'),
              trackCompleted: t('learningPath.trackCompleted'),
              congratulations: t('learningPath.congratulations'),
              badge: t('learningPath.badge'),
              learningTips: t('learningPath.learningTips'),
              learningTip1: t('learningPath.learningTip1'),
              learningTip2: t('learningPath.learningTip3'),
              learningTip3: t('learningPath.learningTip3'),
              learningTip4: t('learningPath.learningTip4'),
            }}
          />
        </div>
      </Section>

      {/* Next Tracks Section */}
      {track.nextTracks && track.nextTracks.length > 0 && (
        <Section className="bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('learningPath.whatsNext')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('learningPath.whatsNextDesc')}
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
