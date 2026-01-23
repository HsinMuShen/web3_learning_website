'use client'

import Diagram from './Diagram'

export default function TransactionFlow() {
  const steps = [
    { num: 1, title: 'Create', desc: 'You create a transaction', icon: '✍️' },
    { num: 2, title: 'Sign', desc: 'You sign it digitally', icon: '🔐' },
    { num: 3, title: 'Broadcast', desc: 'Send to network', icon: '📡' },
    { num: 4, title: 'Verify', desc: 'Miners verify', icon: '✅' },
    { num: 5, title: 'Block', desc: 'Added to block', icon: '📦' },
    { num: 6, title: 'Chain', desc: 'Added to blockchain', icon: '⛓️' },
    { num: 7, title: 'Complete', desc: 'Transaction complete!', icon: '🎉' },
  ]

  return (
    <Diagram title="Bitcoin Transaction Flow">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 min-w-0">
          {steps.map((step, index) => (
            <div key={step.num} className="flex items-center">
              <div className="flex-shrink-0 text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-lg flex flex-col items-center justify-center mb-2 border-2 border-primary-300">
                  <div className="text-2xl mb-1">{step.icon}</div>
                  <div className="text-xs font-bold text-primary-700">
                    Step {step.num}
                  </div>
                </div>
                <div className="text-xs font-semibold text-gray-700">
                  {step.title}
                </div>
                <div className="text-xs text-gray-500">{step.desc}</div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-shrink-0 mx-1 sm:mx-2">
                  <svg
                    className="w-4 h-4 sm:w-6 sm:h-6 text-primary-400 flex-shrink-0"
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
              )}
            </div>
          ))}
        </div>
      </div>
    </Diagram>
  )
}

