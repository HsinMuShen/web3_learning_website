'use client'

interface LetterNavProps {
  availableLetters: Set<string>
  currentLetter: string | null
  onLetterClick: (letter: string) => void
}

export default function LetterNav({
  availableLetters,
  currentLetter,
  onLetterClick,
}: LetterNavProps) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {alphabet.map((letter) => {
        const isAvailable = availableLetters.has(letter)
        const isActive = currentLetter === letter

        return (
          <button
            key={letter}
            onClick={() => isAvailable && onLetterClick(letter)}
            disabled={!isAvailable}
            className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-colors ${
              isActive
                ? 'bg-primary-600 text-white'
                : isAvailable
                ? 'bg-white border border-gray-200 text-gray-700 hover:border-primary-500 hover:text-primary-600'
                : 'bg-gray-100 text-gray-300 cursor-not-allowed'
            }`}
          >
            {letter}
          </button>
        )
      })}
    </div>
  )
}
