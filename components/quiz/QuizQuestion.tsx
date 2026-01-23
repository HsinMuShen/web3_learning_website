'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Translations } from '@/lib/i18n/translations'

export interface QuizQuestionData {
  id: string
  question: string
  options: string[]
  correctAnswer: number // index of correct answer
  explanation: string
}

interface QuizQuestionProps {
  question: QuizQuestionData
  questionNumber: number
  totalQuestions: number
  onAnswer: (isCorrect: boolean) => void
  translations: Translations
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  translations: t,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleSelectAnswer = (index: number) => {
    if (selectedAnswer !== null) return // Already answered

    setSelectedAnswer(index)
    const correct = index === question.correctAnswer
    setIsCorrect(correct)
    setShowExplanation(true)
    onAnswer(correct)
  }

  return (
    <div className="mb-8">
      {/* Question Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-primary-600">
            {t.quiz.question} {questionNumber} {t.quiz.of} {totalQuestions}
          </span>
          {isCorrect !== null && (
            <span
              className={`text-sm font-semibold ${
                isCorrect ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {isCorrect ? `✓ ${t.quiz.correct}` : `✗ ${t.quiz.incorrect}`}
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">
          {question.question}
        </h3>
      </div>

      {/* Answer Options */}
      <div className="space-y-3 mb-4">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index
          const isCorrectOption = index === question.correctAnswer
          let optionClass =
            'w-full text-left p-4 rounded-lg border-2 transition-all cursor-pointer hover:bg-gray-50'

          if (selectedAnswer !== null) {
            if (isCorrectOption) {
              optionClass += ' border-green-500 bg-green-50'
            } else if (isSelected && !isCorrectOption) {
              optionClass += ' border-red-500 bg-red-50'
            } else {
              optionClass += ' border-gray-200 bg-gray-50 opacity-60'
            }
          } else {
            optionClass += ' border-gray-200 bg-white'
          }

          return (
            <button
              key={index}
              onClick={() => handleSelectAnswer(index)}
              disabled={selectedAnswer !== null}
              className={optionClass}
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center mr-3 mt-0.5">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1 text-gray-700">{option}</span>
                {selectedAnswer !== null && isCorrectOption && (
                  <span className="ml-2 text-green-600 font-bold">✓</span>
                )}
                {isSelected && !isCorrectOption && (
                  <span className="ml-2 text-red-600 font-bold">✗</span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`p-4 rounded-lg border-l-4 ${
              isCorrect
                ? 'bg-green-50 border-green-500'
                : 'bg-blue-50 border-blue-500'
            }`}
          >
            <p className="text-sm font-medium text-gray-900 mb-1">
              {isCorrect ? `${t.quiz.greatJob} ` : `${t.quiz.letsReview} `}
            </p>
            <p className="text-gray-700">{question.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

