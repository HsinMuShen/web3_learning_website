'use client'

import Diagram from './Diagram'

export default function DigitalSignature() {
  return (
    <Diagram title="Digital Signature: Your Unique Stamp">
      <div className="w-full max-w-2xl mx-auto">
        <div className="space-y-6">
          {/* Process */}
          <div className="overflow-x-auto pb-4">
            <div className="flex items-start justify-center min-w-max">
              <div className="text-center flex-shrink-0 w-20">
                <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mb-2 border-2 border-blue-300">
                  <span className="text-2xl">📝</span>
                </div>
                <p className="text-xs text-gray-600">Transaction</p>
              </div>

              <div className="w-12 flex items-center justify-center flex-shrink-0 mt-8">
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

              <div className="text-center flex-shrink-0 w-20">
                <div className="w-20 h-20 bg-primary-100 rounded-lg flex items-center justify-center mb-2 border-2 border-primary-300">
                  <span className="text-2xl">🔐</span>
                </div>
                <p className="text-xs text-gray-600">Your Private Key</p>
              </div>

              <div className="w-12 flex items-center justify-center flex-shrink-0 mt-8">
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

              <div className="text-center flex-shrink-0 w-20">
                <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center mb-2 border-2 border-green-300">
                  <span className="text-2xl">✍️</span>
                </div>
                <p className="text-xs text-gray-600">Digital Signature</p>
              </div>
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

