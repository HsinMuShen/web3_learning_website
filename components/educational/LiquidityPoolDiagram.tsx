'use client'

import Diagram from './Diagram'

export default function LiquidityPoolDiagram() {
  return (
    <Diagram title="How Liquidity Pools Work">
      <div className="w-full max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Pool Structure */}
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
            <h4 className="text-center text-lg font-semibold text-gray-900 mb-4">
              The Liquidity Pool
            </h4>
            <div className="flex flex-col items-center">
              {/* Pool Container */}
              <div className="relative w-full max-w-md bg-blue-100 rounded-lg p-6 border-2 border-blue-300">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🏊</div>
                  <p className="text-sm font-semibold text-gray-900">ETH/USDC Pool</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-200 text-center">
                    <div className="text-2xl mb-1">⟠</div>
                    <p className="text-sm font-semibold text-gray-900">100 ETH</p>
                    <p className="text-xs text-gray-600 mt-1">$200,000</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200 text-center">
                    <div className="text-2xl mb-1">💵</div>
                    <p className="text-sm font-semibold text-gray-900">200,000 USDC</p>
                    <p className="text-xs text-gray-600 mt-1">$200,000</p>
                  </div>
                </div>

                <div className="mt-4 bg-white rounded-lg p-3 border border-blue-200 text-center">
                  <p className="text-xs text-gray-600">Total Pool Value</p>
                  <p className="text-base font-bold text-primary-600">$400,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="grid sm:grid-cols-3 gap-4">
            {/* Liquidity Providers */}
            <div className="bg-green-50 rounded-lg p-5 border-2 border-green-200">
              <div className="text-center mb-3">
                <div className="text-3xl mb-2">👥</div>
                <h5 className="text-sm font-bold text-gray-900">1. Liquidity Providers</h5>
              </div>
              <div className="space-y-2 text-xs text-gray-700">
                <p>• Add equal value of both tokens</p>
                <p>• Receive LP tokens as receipt</p>
                <p>• Earn fees from trades</p>
                <p>• Can withdraw anytime</p>
              </div>
            </div>

            {/* Traders */}
            <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-200">
              <div className="text-center mb-3">
                <div className="text-3xl mb-2">🔄</div>
                <h5 className="text-sm font-bold text-gray-900">2. Traders</h5>
              </div>
              <div className="space-y-2 text-xs text-gray-700">
                <p>• Swap tokens instantly</p>
                <p>• Pay small trading fee</p>
                <p>• No order books needed</p>
                <p>• Price determined by ratio</p>
              </div>
            </div>

            {/* Fees Distribution */}
            <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-200">
              <div className="text-center mb-3">
                <div className="text-3xl mb-2">💰</div>
                <h5 className="text-sm font-bold text-gray-900">3. Fee Distribution</h5>
              </div>
              <div className="space-y-2 text-xs text-gray-700">
                <p>• Trading fees (e.g., 0.3%)</p>
                <p>• Distributed to LPs</p>
                <p>• Proportional to share</p>
                <p>• Passive income</p>
              </div>
            </div>
          </div>

          {/* Example Trade Flow */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="text-base font-semibold text-gray-900 mb-4 text-center">
              Example Trade: Swap ETH for USDC
            </h4>
            <div className="overflow-x-auto pb-4">
              <div className="flex items-start justify-center min-w-max">
                <div className="text-center flex-shrink-0 w-28">
                  <div className="w-24 h-24 bg-white rounded-lg flex flex-col items-center justify-center mb-2 border-2 border-gray-300 p-2">
                    <span className="text-2xl mb-1">👤</span>
                    <span className="text-xs font-bold text-gray-700">You</span>
                  </div>
                  <p className="text-xs text-gray-600">Have 1 ETH</p>
                </div>

                <div className="w-12 flex items-center justify-center flex-shrink-0 mt-10">
                  <svg
                    className="w-5 h-5 text-primary-500 flex-shrink-0"
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

                <div className="text-center flex-shrink-0 w-28">
                  <div className="w-24 h-24 bg-blue-100 rounded-lg flex flex-col items-center justify-center mb-2 border-2 border-blue-300 p-2">
                    <span className="text-2xl mb-1">🏊</span>
                    <span className="text-xs font-bold text-blue-700">Pool</span>
                  </div>
                  <p className="text-xs text-gray-600">Processes swap</p>
                </div>

                <div className="w-12 flex items-center justify-center flex-shrink-0 mt-10">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0"
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

                <div className="text-center flex-shrink-0 w-28">
                  <div className="w-24 h-24 bg-green-100 rounded-lg flex flex-col items-center justify-center mb-2 border-2 border-green-300 p-2">
                    <span className="text-2xl mb-1">✅</span>
                    <span className="text-xs font-bold text-green-700">Done</span>
                  </div>
                  <p className="text-xs text-gray-600">Get ~$1,994 USDC</p>
                  <p className="text-xs text-gray-500">($6 fee to LPs)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Concepts */}
          <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-200">
            <h4 className="text-base font-semibold text-gray-900 mb-3 text-center">
              ⚠️ Important Concept: Impermanent Loss
            </h4>
            <p className="text-sm text-gray-700 text-center mb-3">
              When token prices change significantly, liquidity providers might earn less than if they simply held the tokens
            </p>
            <div className="bg-white rounded-lg p-3 border border-yellow-300">
              <p className="text-xs text-gray-600 text-center">
                <strong>Example:</strong> If ETH price doubles, you'll have less ETH in the pool but more USDC.
                The trading fees need to compensate for this potential loss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Diagram>
  )
}

