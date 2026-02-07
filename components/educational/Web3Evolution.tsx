'use client'

import Diagram from './Diagram'

export default function Web3Evolution() {
  const eras = [
    {
      name: 'Web 1.0',
      years: '1990-2004',
      icon: '📄',
      title: 'Read-Only Web',
      features: ['Static websites', 'One-way info flow', 'No interaction', 'Personal pages'],
      color: 'bg-gray-100 border-gray-300',
      example: 'Yahoo, Early websites',
    },
    {
      name: 'Web 2.0',
      years: '2004-Present',
      icon: '💬',
      title: 'Read-Write Web',
      features: ['Social media', 'User content', 'Centralized platforms', 'Companies own data'],
      color: 'bg-blue-100 border-blue-300',
      example: 'Facebook, YouTube, Twitter',
    },
    {
      name: 'Web 3.0',
      years: '2020s-Future',
      icon: '🌐',
      title: 'Read-Write-Own Web',
      features: ['User ownership', 'Decentralized', 'Blockchain-based', 'Control your data'],
      color: 'bg-primary-100 border-primary-300',
      example: 'Ethereum dApps, IPFS',
    },
  ]

  return (
    <Diagram title="Evolution of the Web">
      <div className="w-full max-w-5xl mx-auto">
        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {eras.map((era, index) => (
            <div key={index} className="relative">
              <div className={`${era.color} rounded-lg p-5 border-2 hover:shadow-lg transition-shadow h-full`}>
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">{era.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">{era.name}</h3>
                  <p className="text-xs text-gray-600 font-semibold">{era.years}</p>
                  <p className="text-sm text-gray-800 font-semibold mt-1">{era.title}</p>
                </div>

                <div className="space-y-2 mb-4">
                  {era.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-primary-500 mt-0.5">•</span>
                      <span className="text-xs text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-lg p-2 border border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold mb-1">Example:</p>
                  <p className="text-xs text-gray-700">{era.example}</p>
                </div>
              </div>
              
              {index < eras.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="text-3xl text-primary-500">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Difference */}
        <div className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-lg p-5 border-2 border-primary-300">
          <h4 className="text-sm font-bold text-gray-900 mb-3 text-center">
            🔑 The Key Difference
          </h4>
          <div className="grid sm:grid-cols-3 gap-4 text-xs">
            <div className="text-center">
              <div className="font-semibold text-gray-900 mb-1">Web 1.0</div>
              <div className="text-gray-700">You READ content</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900 mb-1">Web 2.0</div>
              <div className="text-gray-700">You READ + WRITE content<br/>(but platforms own it)</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900 mb-1">Web 3.0</div>
              <div className="text-gray-700">You READ + WRITE + OWN content<br/>(true ownership!)</div>
            </div>
          </div>
        </div>
      </div>
    </Diagram>
  )
}
