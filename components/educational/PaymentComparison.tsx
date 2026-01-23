'use client'

import Diagram from './Diagram'

export default function PaymentComparison() {
  return (
    <Diagram title="Traditional Payment vs Bitcoin">
      <div className="w-full max-w-2xl mx-auto">
        {/* Traditional Payment */}
        <div className="mb-8">
          <h5 className="text-sm font-semibold text-gray-700 mb-4 text-center">
            Traditional Payment System
          </h5>
          <div className="overflow-x-auto pb-4">
            <div className="flex items-center justify-center gap-3 min-w-max">
              <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">👤</span>
              </div>
              <p className="text-xs text-gray-600">You</p>
            </div>
             <div className="w-8 flex items-center justify-center flex-shrink-0">
               <svg
                 className="w-5 h-5 text-gray-400 flex-shrink-0"
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
              <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center mb-2">
                <span className="text-lg font-bold">🏦</span>
              </div>
              <p className="text-xs text-gray-600">Bank</p>
            </div>
             <div className="w-8 flex items-center justify-center flex-shrink-0">
               <svg
                 className="w-5 h-5 text-gray-400 flex-shrink-0"
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
              <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center mb-2">
                <span className="text-lg font-bold">🏦</span>
              </div>
              <p className="text-xs text-gray-600">Friend&apos;s Bank</p>
            </div>
             <div className="w-8 flex items-center justify-center flex-shrink-0">
               <svg
                 className="w-5 h-5 text-gray-400 flex-shrink-0"
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">👤</span>
              </div>
              <p className="text-xs text-gray-600">Friend</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-center text-gray-500 mt-2">
            Requires banks as intermediaries
          </p>
        </div>

        {/* Bitcoin Payment */}
        <div>
          <h5 className="text-sm font-semibold text-gray-700 mb-4 text-center">
            Bitcoin Payment System
          </h5>
          <div className="overflow-x-auto pb-4">
            <div className="flex items-center justify-center gap-4 min-w-max">
              <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">👤</span>
              </div>
              <p className="text-xs text-gray-600">You</p>
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
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">👤</span>
              </div>
              <p className="text-xs text-gray-600">Friend</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-center text-gray-500 mt-2">
            Direct peer-to-peer, no intermediaries
          </p>
        </div>
      </div>
    </Diagram>
  )
}

