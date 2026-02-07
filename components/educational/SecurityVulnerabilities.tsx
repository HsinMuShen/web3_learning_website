'use client'

import Diagram from './Diagram'

export default function SecurityVulnerabilities() {
  const vulnerabilities = [
    {
      name: 'Reentrancy',
      icon: '🔄',
      description: 'Attacker repeatedly calls function before previous execution completes',
      impact: 'Critical',
      example: 'The DAO Hack - $50M',
      color: 'bg-red-50 border-red-300',
    },
    {
      name: 'Integer Overflow',
      icon: '🔢',
      description: 'Numbers wrap around when exceeding max value',
      impact: 'High',
      example: 'BeautyChain - $900M tokens',
      color: 'bg-orange-50 border-orange-300',
    },
    {
      name: 'Access Control',
      icon: '🔐',
      description: 'Functions missing proper permission checks',
      impact: 'Critical',
      example: 'Parity Wallet - $30M',
      color: 'bg-red-50 border-red-300',
    },
    {
      name: 'Front-Running',
      icon: '🏃',
      description: 'Seeing pending transactions and executing first',
      impact: 'Medium',
      example: 'Common in DEX trading',
      color: 'bg-yellow-50 border-yellow-300',
    },
    {
      name: 'Oracle Manipulation',
      icon: '📊',
      description: 'Manipulating external data sources',
      impact: 'Critical',
      example: 'Mango Markets - $110M',
      color: 'bg-red-50 border-red-300',
    },
    {
      name: 'Flash Loan Attack',
      icon: '⚡',
      description: 'Borrowing huge amounts to manipulate protocols',
      impact: 'Critical',
      example: 'Cream Finance - $130M',
      color: 'bg-red-50 border-red-300',
    },
  ]

  return (
    <Diagram title="Common Smart Contract Vulnerabilities">
      <div className="w-full max-w-5xl mx-auto">
        {/* Vulnerabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {vulnerabilities.map((vuln, index) => (
            <div
              key={index}
              className={`${vuln.color} rounded-lg p-4 border-2 hover:shadow-md transition-shadow`}
            >
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">{vuln.icon}</div>
                <h4 className="text-sm font-bold text-gray-900">{vuln.name}</h4>
                <span className={`inline-block text-xs px-2 py-1 rounded mt-1 ${
                  vuln.impact === 'Critical' ? 'bg-red-200 text-red-800' :
                  vuln.impact === 'High' ? 'bg-orange-200 text-orange-800' :
                  'bg-yellow-200 text-yellow-800'
                }`}>
                  {vuln.impact} Risk
                </span>
              </div>
              <p className="text-xs text-gray-700 mb-3 text-center">{vuln.description}</p>
              <div className="bg-white rounded-lg p-2 border border-gray-300">
                <p className="text-xs text-gray-600 font-semibold">Famous Example:</p>
                <p className="text-xs text-gray-800">{vuln.example}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Security Best Practices */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300">
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span>👨‍💻</span>
              <span>For Developers</span>
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-gray-700">Use established libraries (OpenZeppelin)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-gray-700">Get professional audits</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-gray-700">Follow Checks-Effects-Interactions pattern</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-gray-700">Comprehensive testing and fuzzing</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span>👤</span>
              <span>For Users</span>
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-gray-700">Check for audit reports</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-gray-700">Start with small amounts</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-gray-700">Verify contract addresses on Etherscan</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-gray-700">Be wary of unrealistic promises</span>
              </div>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-6 bg-red-50 rounded-lg p-4 border-2 border-red-300">
          <p className="text-sm font-semibold text-red-900 mb-2">
            ⚠️ Billions Lost to Smart Contract Hacks
          </p>
          <p className="text-sm text-gray-700">
            Since 2016, over <strong>$10 billion</strong> has been stolen through smart contract exploits. 
            Security is paramount—always do your research and never invest more than you can afford to lose!
          </p>
        </div>
      </div>
    </Diagram>
  )
}
