'use client'

import Diagram from './Diagram'

export default function ConsensusComparison() {
  const mechanisms = [
    {
      name: 'Proof of Work',
      icon: '⛏️',
      security: 'Very High',
      energy: 'Very High',
      speed: 'Slow',
      decentralization: 'High',
      example: 'Bitcoin',
      color: 'bg-orange-50 border-orange-200',
    },
    {
      name: 'Proof of Stake',
      icon: '🪙',
      security: 'High',
      energy: 'Very Low',
      speed: 'Fast',
      decentralization: 'Medium-High',
      example: 'Ethereum 2.0',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      name: 'Delegated PoS',
      icon: '🗳️',
      security: 'Medium',
      energy: 'Very Low',
      speed: 'Very Fast',
      decentralization: 'Medium',
      example: 'EOS',
      color: 'bg-purple-50 border-purple-200',
    },
    {
      name: 'PBFT',
      icon: '🔐',
      security: 'Medium',
      energy: 'Very Low',
      speed: 'Very Fast',
      decentralization: 'Low',
      example: 'Hyperledger',
      color: 'bg-green-50 border-green-200',
    },
  ]

  return (
    <Diagram title="Consensus Mechanisms Comparison">
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mechanisms.map((mech, index) => (
            <div
              key={index}
              className={`${mech.color} rounded-lg p-4 border-2 hover:shadow-md transition-shadow`}
            >
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">{mech.icon}</div>
                <h4 className="text-sm font-bold text-gray-900">{mech.name}</h4>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Security:</span>
                  <span className="font-semibold text-gray-800">{mech.security}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Energy:</span>
                  <span className="font-semibold text-gray-800">{mech.energy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Speed:</span>
                  <span className="font-semibold text-gray-800">{mech.speed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Decentralization:</span>
                  <span className="font-semibold text-gray-800">{mech.decentralization}</span>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-200">
                  <span className="text-gray-600">Example:</span>
                  <p className="font-semibold text-gray-800">{mech.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-yellow-50 rounded-lg p-4 border-2 border-yellow-200">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            ⚖️ The Blockchain Trilemma
          </p>
          <p className="text-sm text-gray-700">
            It&apos;s difficult to optimize all three: Decentralization, Security, and Scalability. 
            Each consensus mechanism makes different trade-offs!
          </p>
        </div>
      </div>
    </Diagram>
  )
}
