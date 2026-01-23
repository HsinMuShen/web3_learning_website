'use client'

import Diagram from './Diagram'

export default function ProofOfWork() {
  return (
    <Diagram title="Proof of Work: Solving the Puzzle">
      <div className="w-full max-w-2xl mx-auto">
        <div className="space-y-6">
          {/* Puzzle solving */}
          <div className="overflow-x-auto pb-4">
            <div className="flex items-center justify-center gap-4 min-w-max">
              <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center mb-2 border-2 border-gray-400">
                <span className="text-2xl">🧩</span>
              </div>
              <p className="text-xs text-gray-600">Hard Puzzle</p>
            </div>

             <div className="w-8 flex items-center justify-center flex-shrink-0">
               <svg
                 className="w-5 h-5 text-primary-500 flex-shrink-0"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 preserveAspectRatio="xMidYMid meet"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M13 7l5 5m0 0l-5 5m5-5H6"
                 />
               </svg>
             </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-lg flex items-center justify-center mb-2 border-2 border-primary-400">
                <span className="text-2xl">💻</span>
              </div>
              <p className="text-xs text-gray-600">Miners Work</p>
            </div>

             <div className="w-8 flex items-center justify-center flex-shrink-0">
               <svg
                 className="w-5 h-5 text-green-500 flex-shrink-0"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 preserveAspectRatio="xMidYMid meet"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M13 7l5 5m0 0l-5 5m5-5H6"
                 />
               </svg>
             </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-lg flex items-center justify-center mb-2 border-2 border-green-400">
                <span className="text-2xl">✅</span>
              </div>
              <p className="text-xs text-gray-600">Solution Found</p>
              </div>
            </div>
          </div>

          {/* Reward */}
          <div className="text-center p-4 bg-primary-50 rounded-lg border border-primary-200">
            <p className="text-sm font-semibold text-gray-700 mb-1">
              First miner to solve gets:
            </p>
            <p className="text-lg font-bold text-primary-600">
              🏆 Reward: New Bitcoin + Transaction Fees
            </p>
          </div>
        </div>
      </div>
    </Diagram>
  )
}

