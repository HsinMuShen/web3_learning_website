'use client'

import Diagram from './Diagram'

export default function EthereumVsBitcoin() {
  return (
    <Diagram title="Bitcoin vs Ethereum: Key Differences">
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bitcoin */}
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-200">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">₿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Bitcoin</h3>
              <p className="text-sm text-gray-600">Digital Gold</p>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span className="text-gray-700"><strong>Purpose:</strong> Digital currency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span className="text-gray-700"><strong>Smart Contracts:</strong> Limited</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span className="text-gray-700"><strong>Transaction Time:</strong> ~10 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span className="text-gray-700"><strong>Consensus:</strong> Proof of Work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span className="text-gray-700"><strong>Use Case:</strong> Store of value, payments</span>
              </li>
            </ul>
          </div>

          {/* Ethereum */}
          <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-200">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">⟠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Ethereum</h3>
              <p className="text-sm text-gray-600">World Computer</p>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span className="text-gray-700"><strong>Purpose:</strong> Decentralized platform</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span className="text-gray-700"><strong>Smart Contracts:</strong> Full support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span className="text-gray-700"><strong>Transaction Time:</strong> ~12 seconds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span className="text-gray-700"><strong>Consensus:</strong> Proof of Stake</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span className="text-gray-700"><strong>Use Case:</strong> DApps, DeFi, NFTs, more</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Diagram>
  )
}

