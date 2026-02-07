import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import AnimatedSection from '@/components/ui/AnimatedSection'
import LearningTrackCard from '@/components/learning-path/LearningTrackCard'
import BadgeDisplay, { Badge } from '@/components/learning-path/BadgeDisplay'
import NextLesson from '@/components/learning-path/NextLesson'
import {
  getAllLearningTracksWithPosts,
} from '@/lib/learning-path'
import { getServerTranslations } from '@/lib/i18n/server'
import { Award, Target, TrendingUp } from 'lucide-react'
import ClientProgressLoader from './ClientProgressLoader'

export const metadata: Metadata = {
  title: 'Learning Paths | Web3 Learning',
  description:
    'Follow structured learning paths to master Web3, blockchain, and cryptocurrency concepts from beginner to advanced.',
}

export default async function LearningPathPage() {
  const { locale } = await getServerTranslations()
  const tracks = getAllLearningTracksWithPosts(locale)

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-5xl mb-4">🎯</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learning Paths
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Follow structured curricula to master Web3 concepts. Track your progress,
            earn badges, and level up your knowledge step by step.
          </p>
        </div>
      </Section>

      {/* Progress Overview Section */}
      <ClientProgressLoader tracks={tracks} locale={locale} />

      {/* How It Works Section */}
      <Section className="bg-gray-50">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            How Learning Paths Work
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Structured learning designed to take you from beginner to expert
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Choose Your Path
              </h3>
              <p className="text-sm text-gray-600">
                Pick a track that matches your goals and current knowledge level
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Learn & Progress
              </h3>
              <p className="text-sm text-gray-600">
                Follow articles in order, track completion, and build knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Earn Badges
              </h3>
              <p className="text-sm text-gray-600">
                Complete tracks to earn badges and unlock advanced content
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* All Learning Tracks Section */}
      <Section>
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            All Learning Tracks
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tracks.map((track) => (
              <LearningTrackCard
                key={track.id}
                track={track}
                locale={locale}
                totalArticles={track.articles.length}
              />
            ))}
          </div>
        </AnimatedSection>
      </Section>
    </>
  )
}
