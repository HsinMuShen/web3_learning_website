'use client'

import Diagram from './Diagram'

export default function NetworkDiagram() {
  return (
    <Diagram title="Bitcoin Network: Peer-to-Peer">
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative h-64 flex items-center justify-center">
          {/* Central node */}
          <div className="absolute z-10">
            <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">₿</span>
            </div>
          </div>

          {/* Connected nodes in a circle */}
          <div className="relative w-full h-full">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((num) => {
              const angle = (num * 360) / 8
              const radius = 100
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <div key={num}>
                  {/* Connection line to center */}
                  <svg
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                      width: '200px',
                      height: '200px',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <line
                      x1="100"
                      y1="100"
                      x2={100 + x}
                      y2={100 + y}
                      stroke="#f97316"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      opacity="0.3"
                    />
                  </svg>
                  <div
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center border-2 border-primary-400">
                      <span className="text-lg">💻</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <p className="text-xs text-center text-gray-500 mt-4">
          Thousands of computers (nodes) connected directly to each other,
          working together to verify and record transactions
        </p>
      </div>
    </Diagram>
  )
}

