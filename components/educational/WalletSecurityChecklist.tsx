'use client'

import Diagram from './Diagram'

export default function WalletSecurityChecklist() {
  const securityTips = [
    {
      icon: '📝',
      title: 'Write Down Seed Phrase',
      desc: 'Write on paper, never digital',
      priority: 'critical',
    },
    {
      icon: '🔒',
      title: 'Store Securely',
      desc: 'Safe, fireproof box, or bank vault',
      priority: 'critical',
    },
    {
      icon: '🚫',
      title: 'Never Share Keys',
      desc: 'Not even with "support" teams',
      priority: 'critical',
    },
    {
      icon: '🔐',
      title: 'Use Strong Passwords',
      desc: 'Unique, complex passwords',
      priority: 'high',
    },
    {
      icon: '✅',
      title: 'Enable 2FA',
      desc: 'Two-factor authentication',
      priority: 'high',
    },
    {
      icon: '🔄',
      title: 'Regular Backups',
      desc: 'Multiple secure copies',
      priority: 'high',
    },
    {
      icon: '🎣',
      title: 'Beware of Phishing',
      desc: 'Check URLs carefully',
      priority: 'medium',
    },
    {
      icon: '💻',
      title: 'Keep Software Updated',
      desc: 'Latest wallet versions',
      priority: 'medium',
    },
    {
      icon: '🧪',
      title: 'Test Small Amounts',
      desc: 'Before large transactions',
      priority: 'medium',
    },
  ]

  return (
    <Diagram title="Wallet Security Checklist">
      <div className="w-full max-w-4xl mx-auto">
        {/* Priority Levels */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full border border-red-200">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="text-xs font-semibold text-gray-700">Critical</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full border border-orange-200">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            <span className="text-xs font-semibold text-gray-700">High</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-yellow-50 rounded-full border border-yellow-200">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="text-xs font-semibold text-gray-700">Medium</span>
          </div>
        </div>

        {/* Security Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {securityTips.map((tip, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 border-2 ${
                tip.priority === 'critical'
                  ? 'bg-red-50 border-red-200'
                  : tip.priority === 'high'
                  ? 'bg-orange-50 border-orange-200'
                  : 'bg-yellow-50 border-yellow-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl flex-shrink-0">{tip.icon}</div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    {tip.title}
                  </h4>
                  <p className="text-xs text-gray-600">{tip.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Box */}
        <div className="mt-6 bg-red-100 rounded-lg p-5 border-2 border-red-300">
          <div className="flex items-start gap-3">
            <div className="text-3xl flex-shrink-0">⚠️</div>
            <div>
              <h4 className="text-base font-bold text-red-900 mb-2">
                Common Scams to Avoid
              </h4>
              <ul className="space-y-2 text-sm text-red-800">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>
                    <strong>Fake Support:</strong> Real support will never ask for your seed phrase or private keys
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>
                    <strong>Phishing Websites:</strong> Always double-check URLs before connecting your wallet
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>
                    <strong>Airdrop Scams:</strong> Don't click suspicious links promising free tokens
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>
                    <strong>Fake Wallets:</strong> Only download wallets from official websites or app stores
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Golden Rule */}
        <div className="mt-6 bg-primary-100 rounded-lg p-5 border-2 border-primary-300 text-center">
          <div className="text-4xl mb-2">🏆</div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">The Golden Rule</h4>
          <p className="text-base text-gray-700 font-semibold">
            "Not your keys, not your crypto"
          </p>
          <p className="text-sm text-gray-600 mt-2">
            If you don't control your private keys, you don't truly own your cryptocurrency
          </p>
        </div>
      </div>
    </Diagram>
  )
}

