'use client'

import Diagram from './Diagram'

export default function GasFeesDiagram() {
  return (
    <Diagram title="How Gas Fees Work">
      <div className="w-full max-w-3xl mx-auto">
        <div className="space-y-6">
          {/* Transaction Flow */}
          <div className="overflow-x-auto pb-4">
            <div className="flex items-start justify-center min-w-max">
              <div className="text-center flex-shrink-0 w-24">
                <div className="w-24 h-24 bg-blue-100 rounded-lg flex items-center justify-center mb-2 border-2 border-blue-300">
                  <span className="text-3xl">👤</span>
                </div>
                <p className="text-xs font-semibold text-gray-700">You</p>
                <p className="text-xs text-gray-500">Send transaction</p>
              </div>

              <div className="w-12 flex items-center justify-center flex-shrink-0 mt-10">
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

              <div className="text-center flex-shrink-0 w-24">
                <div className="w-24 h-24 bg-primary-100 rounded-lg flex items-center justify-center mb-2 border-2 border-primary-300">
                  <span className="text-3xl">⛽</span>
                </div>
                <p className="text-xs font-semibold text-gray-700">Gas Fee</p>
                <p className="text-xs text-gray-500">Computation cost</p>
              </div>

              <div className="w-12 flex items-center justify-center flex-shrink-0 mt-10">
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

              <div className="text-center flex-shrink-0 w-24">
                <div className="w-24 h-24 bg-green-100 rounded-lg flex items-center justify-center mb-2 border-2 border-green-300">
                  <span className="text-3xl">⚙️</span>
                </div>
                <p className="text-xs font-semibold text-gray-700">Validator</p>
                <p className="text-xs text-gray-500">Processes transaction</p>
              </div>
            </div>
          </div>

          {/* Gas Fee Formula */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="text-base font-semibold text-gray-900 mb-4 text-center">
              Gas Fee Calculation
            </h4>
            <div className="bg-white rounded-lg p-4 border border-primary-200 text-center">
              <div className="text-sm font-mono text-gray-700 mb-2">
                <span className="font-bold text-primary-600">Gas Fee</span> = 
                <span className="text-blue-600"> Gas Used</span> × 
                <span className="text-green-600"> Gas Price</span>
              </div>
              <div className="text-xs text-gray-500 mt-3">
                <p><strong>Gas Used:</strong> How much computation your transaction needs</p>
                <p className="mt-1"><strong>Gas Price:</strong> How much you pay per unit (in Gwei)</p>
              </div>
            </div>
          </div>

          {/* Factors Affecting Gas */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200 text-center">
              <div className="text-2xl mb-2">🚦</div>
              <h5 className="text-sm font-semibold text-gray-900 mb-1">Network Congestion</h5>
              <p className="text-xs text-gray-600">More users = Higher fees</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h5 className="text-sm font-semibold text-gray-900 mb-1">Transaction Complexity</h5>
              <p className="text-xs text-gray-600">More complex = More gas</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200 text-center">
              <div className="text-2xl mb-2">⏰</div>
              <h5 className="text-sm font-semibold text-gray-900 mb-1">Priority</h5>
              <p className="text-xs text-gray-600">Higher tip = Faster processing</p>
            </div>
          </div>
        </div>
      </div>
    </Diagram>
  )
}

