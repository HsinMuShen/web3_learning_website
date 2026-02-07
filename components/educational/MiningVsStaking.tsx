'use client'

import Diagram from './Diagram'

export default function MiningVsStaking() {
  const comparison = [
    {
      aspect: 'How it Works',
      mining: 'Solve complex math problems with computing power',
      staking: 'Lock up cryptocurrency as collateral',
      miningIcon: '🔢',
      stakingIcon: '🔒',
    },
    {
      aspect: 'Hardware',
      mining: 'Expensive ASICs or GPUs ($2K-$15K)',
      staking: 'Regular computer or even just a wallet',
      miningIcon: '💻',
      stakingIcon: '📱',
    },
    {
      aspect: 'Energy Use',
      mining: 'Very High (1000+ kWh/month)',
      staking: 'Very Low (similar to laptop)',
      miningIcon: '⚡',
      stakingIcon: '🌱',
    },
    {
      aspect: 'Initial Investment',
      mining: '$2,000 - $15,000 for equipment',
      staking: '32 ETH (~$64K) or as low as $10 in pools',
      miningIcon: '💰',
      stakingIcon: '🪙',
    },
    {
      aspect: 'Ongoing Costs',
      mining: 'High electricity bills ($100+/month)',
      staking: 'Minimal (just internet)',
      miningIcon: '💵',
      stakingIcon: '✨',
    },
    {
      aspect: 'Barriers',
      mining: 'Technical knowledge, space, cooling',
      staking: 'Lower - can use services or pools',
      miningIcon: '🚧',
      stakingIcon: '🟢',
    },
    {
      aspect: 'Environmental',
      mining: 'Significant carbon footprint',
      staking: '99.95% less energy than mining',
      miningIcon: '🏭',
      stakingIcon: '🌍',
    },
    {
      aspect: 'Examples',
      mining: 'Bitcoin, Litecoin, Dogecoin',
      staking: 'Ethereum 2.0, Cardano, Solana',
      miningIcon: '⛏️',
      stakingIcon: '🏦',
    },
  ]

  return (
    <Diagram title="Mining vs Staking Comparison">
      <div className="w-full max-w-5xl mx-auto">
        {/* Headers */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-orange-100 rounded-lg p-4 border-2 border-orange-300 text-center">
            <div className="text-4xl mb-2">⛏️</div>
            <h3 className="text-lg font-bold text-gray-900">Mining (PoW)</h3>
            <p className="text-xs text-gray-600">Proof of Work</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-4 border-2 border-blue-300 text-center">
            <div className="text-4xl mb-2">🪙</div>
            <h3 className="text-lg font-bold text-gray-900">Staking (PoS)</h3>
            <p className="text-xs text-gray-600">Proof of Stake</p>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="space-y-3">
          {comparison.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-white rounded-lg border-2 border-gray-200 p-3 hover:shadow-md transition-shadow">
              <div className="md:col-span-1 font-semibold text-sm text-gray-900 flex items-center">
                {item.aspect}
              </div>
              <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                <div className="flex items-start gap-2">
                  <span className="text-xl flex-shrink-0">{item.miningIcon}</span>
                  <span className="text-xs text-gray-700">{item.mining}</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <div className="flex items-start gap-2">
                  <span className="text-xl flex-shrink-0">{item.stakingIcon}</span>
                  <span className="text-xs text-gray-700">{item.staking}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-6 bg-primary-100 rounded-lg p-4 border-2 border-primary-300">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            💡 Which Should You Choose?
          </p>
          <p className="text-sm text-gray-700">
            <strong>Mining</strong> requires significant upfront investment and ongoing costs, best for those with cheap electricity and technical skills. 
            <strong> Staking</strong> is more accessible, environmentally friendly, and easier for beginners—just lock your crypto and earn rewards!
          </p>
        </div>
      </div>
    </Diagram>
  )
}
