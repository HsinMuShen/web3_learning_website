'use client'

import Diagram from './Diagram'

export default function SmartContractFlow() {
  const steps = [
    { num: 1, icon: '📝', title: 'Write', desc: 'Developer writes code' },
    { num: 2, icon: '🔍', title: 'Test', desc: 'Test the contract' },
    { num: 3, icon: '🚀', title: 'Deploy', desc: 'Deploy to blockchain' },
    { num: 4, icon: '⚡', title: 'Execute', desc: 'Automatically runs' },
    { num: 5, icon: '✅', title: 'Complete', desc: 'Transaction finalized' },
  ]

  return (
    <Diagram title="Smart Contract Lifecycle">
      <div className="w-full max-w-4xl mx-auto">
        <div className="overflow-x-auto pb-4">
          <div className="flex items-start min-w-max">
            {steps.map((step, index) => (
              <div key={step.num} className="flex items-start">
                <div className="text-center flex-shrink-0 w-20">
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
                  <div className="w-12 flex items-center justify-center flex-shrink-0 mt-8">
                    <svg
                      className="w-5 h-5 text-primary-400 flex-shrink-0"
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

        {/* Example Smart Contract */}
        <div className="mt-8 bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <div className="text-xs text-gray-400 mb-2">Example: Simple Storage Contract</div>
          <pre className="text-sm text-green-400 font-mono">
{`contract SimpleStorage {
    uint256 private storedData;
    
    function set(uint256 x) public {
        storedData = x;
    }
    
    function get() public view returns (uint256) {
        return storedData;
    }
}`}
          </pre>
        </div>
      </div>
    </Diagram>
  )
}

