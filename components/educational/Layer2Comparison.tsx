'use client'

import Diagram from './Diagram'

export default function Layer2Comparison() {
  const solutions = [
    {
      name: 'Lightning Network',
      icon: '⚡',
      type: 'Payment Channels',
      tps: '1M+',
      withdrawal: 'Instant',
      security: 'Economic',
      example: 'Bitcoin',
      color: 'bg-yellow-50 border-yellow-200',
    },
    {
      name: 'Optimistic Rollups',
      icon: '🔵',
      type: 'Rollup',
      tps: '2K-4K',
      withdrawal: '~7 days',
      security: 'Fraud Proofs',
      example: 'Arbitrum',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      name: 'ZK Rollups',
      icon: '🔐',
      type: 'Rollup',
      tps: '2K-20K',
      withdrawal: 'Minutes',
      security: 'Math Proofs',
      example: 'zkSync',
      color: 'bg-purple-50 border-purple-200',
    },
    {
      name: 'Sidechains',
      icon: '🔗',
      type: 'Separate Chain',
      tps: '65K+',
      withdrawal: 'Minutes',
      security: 'Independent',
      example: 'Polygon',
      color: 'bg-green-50 border-green-200',
    },
  ]

  return (
    <Diagram title="Layer 2 Solutions Comparison">
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`${solution.color} rounded-lg p-4 border-2 hover:shadow-md transition-shadow`}
            >
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">{solution.icon}</div>
                <h4 className="text-sm font-bold text-gray-900">{solution.name}</h4>
                <p className="text-xs text-gray-600">{solution.type}</p>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">TPS:</span>
                  <span className="font-semibold text-gray-800">{solution.tps}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Withdrawal:</span>
                  <span className="font-semibold text-gray-800">{solution.withdrawal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Security:</span>
                  <span className="font-semibold text-gray-800">{solution.security}</span>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-200">
                  <span className="text-gray-600">Example:</span>
                  <p className="font-semibold text-gray-800">{solution.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-primary-100 rounded-lg p-4 border-2 border-primary-300">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            🚀 Scaling the Future
          </p>
          <p className="text-sm text-gray-700">
            Layer 2 solutions process transactions off-chain, then submit proof to mainnet. 
            This makes blockchains faster and cheaper while maintaining security!
          </p>
        </div>
      </div>
    </Diagram>
  )
}
