'use client'

import Diagram from './Diagram'

export default function DeFiEcosystem() {
  const categories = [
    {
      icon: '💱',
      title: 'DEXs',
      subtitle: 'Decentralized Exchanges',
      desc: 'Trade crypto without intermediaries',
      examples: 'Uniswap, SushiSwap, PancakeSwap',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      icon: '🏦',
      title: 'Lending',
      subtitle: 'Borrow & Lend',
      desc: 'Earn interest or borrow against collateral',
      examples: 'Aave, Compound, MakerDAO',
      color: 'bg-green-50 border-green-200',
    },
    {
      icon: '💵',
      title: 'Stablecoins',
      subtitle: 'Price-Stable Crypto',
      desc: 'Cryptocurrency pegged to fiat currency',
      examples: 'USDC, DAI, USDT',
      color: 'bg-yellow-50 border-yellow-200',
    },
    {
      icon: '🌊',
      title: 'Yield Farming',
      subtitle: 'Liquidity Mining',
      desc: 'Earn rewards by providing liquidity',
      examples: 'Curve, Yearn, Convex',
      color: 'bg-purple-50 border-purple-200',
    },
    {
      icon: '📊',
      title: 'Derivatives',
      subtitle: 'Trading Products',
      desc: 'Futures, options, synthetic assets',
      examples: 'dYdX, Synthetix, GMX',
      color: 'bg-red-50 border-red-200',
    },
    {
      icon: '🔐',
      title: 'Insurance',
      subtitle: 'Risk Protection',
      desc: 'Protect against smart contract failures',
      examples: 'Nexus Mutual, InsurAce',
      color: 'bg-orange-50 border-orange-200',
    },
  ]

  return (
    <Diagram title="The DeFi Ecosystem">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full border-2 border-primary-300 mb-3">
            <span className="text-4xl">🔷</span>
          </div>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            DeFi recreates traditional financial services using blockchain and smart contracts
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} rounded-lg p-5 border-2 hover:shadow-md transition-shadow`}
            >
              <div className="text-center mb-3">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h4 className="text-base font-bold text-gray-900">{category.title}</h4>
                <p className="text-xs text-gray-600 mb-2">{category.subtitle}</p>
              </div>
              <p className="text-sm text-gray-700 mb-3 text-center">{category.desc}</p>
              <div className="bg-white rounded-lg p-2 border border-gray-200">
                <p className="text-xs text-gray-500 font-semibold mb-1">Examples:</p>
                <p className="text-xs text-gray-700">{category.examples}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-primary-100 rounded-lg p-5 border-2 border-primary-300 text-center">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            💡 All These Services Are Interconnected
          </p>
          <p className="text-sm text-gray-700">
            DeFi protocols can work together like LEGO blocks—this is called &quot;composability&quot; or &quot;money legos&quot;
          </p>
        </div>
      </div>
    </Diagram>
  )
}

