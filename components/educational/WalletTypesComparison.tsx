'use client'

import Diagram from './Diagram'

export default function WalletTypesComparison() {
  return (
    <Diagram title="Hot Wallets vs Cold Wallets">
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hot Wallets */}
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Hot Wallets</h3>
              <p className="text-sm text-gray-600">Connected to Internet</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Examples:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• MetaMask (browser extension)</li>
                  <li>• Trust Wallet (mobile app)</li>
                  <li>• Coinbase Wallet (mobile app)</li>
                  <li>• Exchange wallets</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-green-700 mb-2">✅ Pros:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Convenient & easy to use</li>
                  <li>• Quick transactions</li>
                  <li>• Free or low cost</li>
                  <li>• Great for daily use</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-red-700 mb-2">❌ Cons:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Vulnerable to hacks</li>
                  <li>• Risk of malware</li>
                  <li>• Phishing attacks</li>
                  <li>• Less secure</li>
                </ul>
              </div>

              <div className="bg-yellow-100 rounded-lg p-3 border border-yellow-300">
                <p className="text-xs text-gray-700">
                  <strong>Best for:</strong> Small amounts, frequent trading, DeFi interactions
                </p>
              </div>
            </div>
          </div>

          {/* Cold Wallets */}
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">❄️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Cold Wallets</h3>
              <p className="text-sm text-gray-600">Offline Storage</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Examples:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Ledger (hardware wallet)</li>
                  <li>• Trezor (hardware wallet)</li>
                  <li>• Paper wallets</li>
                  <li>• Steel backup plates</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-green-700 mb-2">✅ Pros:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Maximum security</li>
                  <li>• Immune to online hacks</li>
                  <li>• Protected from malware</li>
                  <li>• Long-term storage</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-red-700 mb-2">❌ Cons:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Less convenient</li>
                  <li>• Cost ($50-$200+)</li>
                  <li>• Slower transactions</li>
                  <li>• Can be lost/damaged</li>
                </ul>
              </div>

              <div className="bg-green-100 rounded-lg p-3 border border-green-300">
                <p className="text-xs text-gray-700">
                  <strong>Best for:</strong> Large amounts, long-term holding, maximum security
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="mt-6 bg-primary-50 rounded-lg p-4 border border-primary-200 text-center">
          <p className="text-sm font-semibold text-gray-900 mb-2">💡 Pro Tip</p>
          <p className="text-sm text-gray-700">
            Use <strong>both</strong>! Keep large amounts in cold storage, and smaller amounts in hot wallets for daily use.
          </p>
        </div>
      </div>
    </Diagram>
  )
}

