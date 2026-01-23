'use client'

import Diagram from './Diagram'

export default function DigitalSignature() {
  return (
    <Diagram title="Digital Signature: Your Unique Stamp">
      <div className="w-full max-w-2xl mx-auto">
        <div className="space-y-6">
          {/* Process */}
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mb-2 border-2 border-blue-300">
                <span className="text-2xl">📝</span>
              </div>
              <p className="text-xs text-gray-600">Transaction</p>
            </div>

            <div className="flex-1 flex items-center justify-center min-w-0">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 flex-shrink-0"
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
              <div className="w-20 h-20 bg-primary-100 rounded-lg flex items-center justify-center mb-2 border-2 border-primary-300">
                <span className="text-2xl">🔐</span>
              </div>
              <p className="text-xs text-gray-600">Your Private Key</p>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
              <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center mb-2 border-2 border-green-300">
                <span className="text-2xl">✍️</span>
              </div>
              <p className="text-xs text-gray-600">Digital Signature</p>
            </div>
          </div>

          {/* Verification */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700 text-center">
              <strong>Anyone can verify</strong> the signature using your public
              key, but <strong>only you</strong> can create it with your private
              key
            </p>
          </div>
        </div>
      </div>
    </Diagram>
  )
}

