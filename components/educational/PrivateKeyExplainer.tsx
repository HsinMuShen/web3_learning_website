'use client'

import Diagram from './Diagram'

export default function PrivateKeyExplainer() {
  return (
    <Diagram title="How Public and Private Keys Work">
      <div className="w-full max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Key Flow */}
          <div className="overflow-x-auto pb-4">
            <div className="flex items-start justify-center min-w-max">
              <div className="text-center flex-shrink-0 w-32">
                <div className="w-28 h-28 bg-red-100 rounded-lg flex flex-col items-center justify-center mb-2 border-2 border-red-300 p-2">
                  <span className="text-3xl mb-1">🔐</span>
                  <span className="text-xs font-bold text-red-700">Private Key</span>
                </div>
                <p className="text-xs font-semibold text-gray-700 mt-2">Your Secret</p>
                <p className="text-xs text-gray-500">Never share!</p>
              </div>

              <div className="w-16 flex items-center justify-center flex-shrink-0 mt-12">
                <svg
                  className="w-6 h-6 text-primary-500 flex-shrink-0"
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

              <div className="text-center flex-shrink-0 w-32">
                <div className="w-28 h-28 bg-green-100 rounded-lg flex flex-col items-center justify-center mb-2 border-2 border-green-300 p-2">
                  <span className="text-3xl mb-1">🔑</span>
                  <span className="text-xs font-bold text-green-700">Public Key</span>
                </div>
                <p className="text-xs font-semibold text-gray-700 mt-2">Shareable</p>
                <p className="text-xs text-gray-500">Like email address</p>
              </div>

              <div className="w-16 flex items-center justify-center flex-shrink-0 mt-12">
                <svg
                  className="w-6 h-6 text-primary-500 flex-shrink-0"
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

              <div className="text-center flex-shrink-0 w-32">
                <div className="w-28 h-28 bg-blue-100 rounded-lg flex flex-col items-center justify-center mb-2 border-2 border-blue-300 p-2">
                  <span className="text-3xl mb-1">📬</span>
                  <span className="text-xs font-bold text-blue-700">Wallet Address</span>
                </div>
                <p className="text-xs font-semibold text-gray-700 mt-2">Public Address</p>
                <p className="text-xs text-gray-500">Receive crypto here</p>
              </div>
            </div>
          </div>

          {/* Analogy Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
              <div className="text-3xl text-center mb-2">🔐</div>
              <h4 className="text-sm font-bold text-gray-900 text-center mb-2">Private Key</h4>
              <p className="text-xs text-gray-600 text-center mb-3">
                Like your ATM PIN - it proves you own the wallet
              </p>
              <div className="bg-red-50 rounded p-2 border border-red-200">
                <p className="text-xs text-red-700 font-semibold text-center">
                  ⚠️ NEVER share this!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
              <div className="text-3xl text-center mb-2">🔑</div>
              <h4 className="text-sm font-bold text-gray-900 text-center mb-2">Public Key</h4>
              <p className="text-xs text-gray-600 text-center mb-3">
                Mathematical derivation from private key
              </p>
              <div className="bg-gray-50 rounded p-2 border border-gray-200">
                <p className="text-xs text-gray-700 text-center">
                  Used to create address
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
              <div className="text-3xl text-center mb-2">📬</div>
              <h4 className="text-sm font-bold text-gray-900 text-center mb-2">Wallet Address</h4>
              <p className="text-xs text-gray-600 text-center mb-3">
                Like your email - share it to receive crypto
              </p>
              <div className="bg-green-50 rounded p-2 border border-green-200">
                <p className="text-xs text-green-700 text-center">
                  ✅ Safe to share publicly
                </p>
              </div>
            </div>
          </div>

          {/* Key Facts */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="text-base font-semibold text-gray-900 mb-4 text-center">
              Important Facts About Keys
            </h4>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-primary-500 font-bold text-lg">1.</span>
                <p className="text-gray-700">
                  Your <strong>private key</strong> generates your <strong>public key</strong>, which creates your <strong>wallet address</strong>
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-500 font-bold text-lg">2.</span>
                <p className="text-gray-700">
                  You can have many addresses from one private key
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-500 font-bold text-lg">3.</span>
                <p className="text-gray-700">
                  If you lose your private key, you lose access to your crypto <strong>forever</strong>
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-500 font-bold text-lg">4.</span>
                <p className="text-gray-700">
                  No one can recover your private key—not even the wallet company
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Diagram>
  )
}

