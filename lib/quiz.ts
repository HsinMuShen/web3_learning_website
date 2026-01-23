import fs from 'fs'
import path from 'path'
import { Locale, defaultLocale } from './i18n/config'
import { QuizQuestionData } from '@/components/quiz/QuizQuestion'

const quizDirectory = path.join(process.cwd(), 'content/blog')

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Shuffle options and update correct answer index
function shuffleQuestionOptions(question: QuizQuestionData): QuizQuestionData {
  const originalOptions = [...question.options]
  const correctAnswerText = originalOptions[question.correctAnswer]
  
  // Create array of indices and shuffle them
  const indices = originalOptions.map((_, index) => index)
  const shuffledIndices = shuffleArray(indices)
  
  // Shuffle the options using the shuffled indices
  const shuffledOptions = shuffledIndices.map(index => originalOptions[index])
  
  // Find the new index of the correct answer
  const newCorrectAnswerIndex = shuffledOptions.indexOf(correctAnswerText)
  
  return {
    ...question,
    options: shuffledOptions,
    correctAnswer: newCorrectAnswerIndex,
  }
}

export function getQuizBySlug(slug: string, locale?: Locale): QuizQuestionData[] | null {
  try {
    const targetLocale = locale || defaultLocale
    const postDir = path.join(quizDirectory, slug)
    
    // Try locale-specific quiz file first (e.g., quiz.zh-TW.json)
    const localeSpecificPath = path.join(postDir, `quiz.${targetLocale}.json`)
    const defaultPath = path.join(postDir, 'quiz.json')
    
    let fullPath: string
    if (fs.existsSync(localeSpecificPath)) {
      fullPath = localeSpecificPath
    } else if (fs.existsSync(defaultPath)) {
      fullPath = defaultPath
    } else {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const quizData = JSON.parse(fileContents)
    
    // Validate and shuffle options for each question
    if (Array.isArray(quizData) && quizData.length > 0) {
      return quizData.map((question: QuizQuestionData) => shuffleQuestionOptions(question))
    }
    
    return null
  } catch (error) {
    console.error(`Error reading quiz for ${slug}:`, error)
    return null
  }
}

