'use client'

import Diagram from './Diagram'

export default function DAOStructure() {
  const steps = [
    { icon: '🪙', title: 'Governance Tokens', desc: 'Members hold tokens representing voting power' },
    { icon: '💡', title: 'Create Proposal', desc: 'Anyone can suggest changes or actions' },
    { icon: '🗳️', title: 'Community Votes', desc: 'Token holders vote on proposals' },
    { icon: '✅', title: 'Proposal Passes', desc: 'If majority approves, proposal is accepted' },
    { icon: '🤖', title: 'Smart Contract Executes', desc: 'Code automatically carries out the decision' },
    { icon: '🎉', title: 'Results', desc: 'Changes implemented, funds distributed, etc.' },
  ]

  return (
    <Diagram title="How DAOs Work">
      <div className="w-full max-w-4xl mx-auto">
        {/* Main Flow */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-4 border-2 border-primary-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl flex-shrink-0">{step.icon}</div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    {index + 1}. {step.title}
                  </h4>
                  <p className="text-xs text-gray-700">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Traditional vs DAO Comparison */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-100 rounded-lg p-4 border-2 border-gray-300">
            <h4 className="text-sm font-bold text-gray-900 mb-3 text-center">
              🏢 Traditional Organization
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span>👔</span>
                <span className="text-gray-700">CEO makes decisions</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📊</span>
                <span className="text-gray-700">Top-down hierarchy</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span className="text-gray-700">Closed operations</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📝</span>
                <span className="text-gray-700">Legal paperwork required</span>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-lg p-4 border-2 border-primary-300">
            <h4 className="text-sm font-bold text-gray-900 mb-3 text-center">
              🌐 DAO
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span>🗳️</span>
                <span className="text-gray-700">Community votes on decisions</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🤝</span>
                <span className="text-gray-700">Flat structure, no bosses</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔓</span>
                <span className="text-gray-700">Transparent on blockchain</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚡</span>
                <span className="text-gray-700">Smart contracts execute automatically</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Diagram>
  )
}
