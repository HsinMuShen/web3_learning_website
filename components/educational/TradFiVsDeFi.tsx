'use client'

import Diagram from './Diagram'

export default function TradFiVsDeFi() {
  return (
    <Diagram title="Traditional Finance vs Decentralized Finance">
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Traditional Finance */}
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-300">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🏦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Traditional Finance</h3>
              <p className="text-sm text-gray-600">Centralized & Controlled</p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">🏢 Control</h4>
                <p className="text-xs text-gray-600">Banks and institutions control your money</p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">⏰ Hours</h4>
                <p className="text-xs text-gray-600">9-5 business days only</p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">🚪 Access</h4>
                <p className="text-xs text-gray-600">Requires approval, ID, credit check</p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">💰 Fees</h4>
                <p className="text-xs text-gray-600">High fees, hidden charges</p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">👁️ Privacy</h4>
                <p className="text-xs text-gray-600">All transactions monitored</p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">⏱️ Speed</h4>
                <p className="text-xs text-gray-600">Days for international transfers</p>
              </div>
            </div>
          </div>

          {/* DeFi */}
          <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-300">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🔷</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Decentralized Finance</h3>
              <p className="text-sm text-gray-600">Open & Permissionless</p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-primary-200">
                <h4 className="text-sm font-semibold text-primary-700 mb-2">🔓 Control</h4>
                <p className="text-xs text-gray-600">You control your own money</p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-primary-200">
                <h4 className="text-sm font-semibold text-primary-700 mb-2">🌐 Hours</h4>
                <p className="text-xs text-gray-600">24/7/365 always open</p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-primary-200">
                <h4 className="text-sm font-semibold text-primary-700 mb-2">🌍 Access</h4>
                <p className="text-xs text-gray-600">Open to anyone with internet</p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-primary-200">
                <h4 className="text-sm font-semibold text-primary-700 mb-2">💸 Fees</h4>
                <p className="text-xs text-gray-600">Lower fees, transparent costs</p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-primary-200">
                <h4 className="text-sm font-semibold text-primary-700 mb-2">🔒 Privacy</h4>
                <p className="text-xs text-gray-600">Pseudonymous transactions</p>
              </div>

              <div className="bg-white rounded-lg p-3 border border-primary-200">
                <h4 className="text-sm font-semibold text-primary-700 mb-2">⚡ Speed</h4>
                <p className="text-xs text-gray-600">Minutes for any transfer worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Diagram>
  )
}

