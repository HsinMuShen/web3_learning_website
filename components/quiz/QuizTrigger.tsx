'use client'

import { useState } from 'react'
import Quiz from './Quiz'
import { QuizQuestionData } from './QuizQuestion'
import Button from '@/components/ui/Button'
import { Translations } from '@/lib/i18n/translations'

interface QuizTriggerProps {
  questions: QuizQuestionData[]
  title?: string
  buttonText?: string
  translations: Translations
}

export default function QuizTrigger({
  questions,
  title,
  buttonText,
  translations: t,
}: QuizTriggerProps) {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  if (questions.length === 0) return null

  const displayTitle = title || t.quiz.title
  const displayButtonText = buttonText || t.quiz.buttonText

  return (
    <>
      <div className="my-8 p-6 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg border-2 border-primary-200">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {t.quiz.testYourKnowledge}
            </h3>
            <p className="text-gray-600">
              {t.quiz.testDescription}
            </p>
          </div>
          <Button onClick={() => setIsQuizOpen(true)} size="lg">
            {displayButtonText} ({questions.length} {t.quiz.question.toLowerCase()}s)
          </Button>
        </div>
      </div>

      {isQuizOpen && (
        <Quiz
          questions={questions}
          title={displayTitle}
          onClose={() => setIsQuizOpen(false)}
          translations={t}
        />
      )}
    </>
  )
}

