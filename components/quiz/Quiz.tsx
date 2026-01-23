'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import QuizQuestion, { QuizQuestionData } from './QuizQuestion'
import Button from '@/components/ui/Button'
import { Translations } from '@/lib/i18n/translations'

interface QuizProps {
  questions: QuizQuestionData[]
  title?: string
  onClose?: () => void
  translations: Translations
}

export default function Quiz({ questions, title = 'Test Your Knowledge', onClose, translations: t }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const handleAnswer = (isCorrect: boolean) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = isCorrect
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => {
      onClose?.()
    }, 300) // Wait for animation to complete
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setAnswers([])
    setShowResults(false)
  }

  const correctCount = answers.filter((a) => a === true).length
  const score = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-1">{title}</h2>
                  {!showResults && (
                    <p className="text-primary-100 text-sm">
                      {t.quiz.question} {currentQuestionIndex + 1} {t.quiz.of} {questions.length}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleClose}
                  className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white/10"
                  aria-label="Close quiz"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {!showResults ? (
                  <QuizQuestion
                    key={questions[currentQuestionIndex].id}
                    question={questions[currentQuestionIndex]}
                    questionNumber={currentQuestionIndex + 1}
                    totalQuestions={questions.length}
                    onAnswer={handleAnswer}
                    translations={t}
                  />
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white mb-4">
                        <span className="text-4xl font-bold">{score}%</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {score >= 80
                          ? t.quiz.excellent
                          : score >= 60
                          ? t.quiz.goodJob
                          : t.quiz.keepLearning}
                      </h3>
                      <p className="text-gray-600">
                        {t.quiz.youGot} {correctCount} {t.quiz.outOf} {questions.length} {t.quiz.questionsCorrect}
                      </p>
                    </div>

                    {/* Score Breakdown */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="grid grid-cols-2 gap-4 text-left">
                        <div>
                          <p className="text-sm text-gray-600">Correct</p>
                          <p className="text-2xl font-bold text-green-600">{correctCount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Incorrect</p>
                          <p className="text-2xl font-bold text-red-600">
                            {questions.length - correctCount}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Review Answers Button */}
                    <Button onClick={handleRestart} className="w-full mb-4">
                      {t.quiz.tryAgain}
                    </Button>
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              {!showResults && (
                <div className="border-t border-gray-200 p-4 flex items-center justify-between bg-gray-50">
                  <Button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    variant="secondary"
                  >
                    {t.quiz.previous}
                  </Button>
                  <div className="flex gap-2">
                    {questions.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentQuestionIndex
                            ? 'bg-primary-600'
                            : answers[index] !== undefined
                            ? answers[index]
                              ? 'bg-green-500'
                              : 'bg-red-500'
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <Button
                    onClick={handleNext}
                    disabled={answers[currentQuestionIndex] === undefined}
                  >
                    {currentQuestionIndex === questions.length - 1 ? t.quiz.finish : t.quiz.next}
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

