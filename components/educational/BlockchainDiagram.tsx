'use client'

import Diagram from './Diagram'

export default function BlockchainDiagram() {
  return (
    <Diagram title="The Blockchain: A Chain of Blocks">
      <div className="w-full max-w-3xl mx-auto">
        <div className="overflow-x-auto pb-4">
          <div className="flex items-center justify-center gap-2 min-w-max">
            {/* Block 1 */}
          <div className="flex-shrink-0 w-32 h-32 bg-primary-100 border-2 border-primary-300 rounded-lg p-3 flex flex-col items-center justify-center">
            <div className="text-xs font-semibold text-primary-700 mb-2">
              Block 1
            </div>
            <div className="text-xs text-gray-600 text-center">
              Transaction A<br />
              Transaction B
            </div>
            <div className="mt-2 text-xs text-primary-600">Hash: abc123</div>
          </div>

           {/* Arrow */}
           <div className="w-8 flex items-center justify-center flex-shrink-0">
             <svg
               className="w-5 h-5 text-primary-500"
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

          {/* Block 2 */}
          <div className="flex-shrink-0 w-32 h-32 bg-primary-100 border-2 border-primary-300 rounded-lg p-3 flex flex-col items-center justify-center">
            <div className="text-xs font-semibold text-primary-700 mb-2">
              Block 2
            </div>
            <div className="text-xs text-gray-600 text-center">
              Transaction C<br />
              Transaction D
            </div>
            <div className="mt-2 text-xs text-primary-600">Hash: def456</div>
            <div className="mt-1 text-xs text-gray-500">← abc123</div>
          </div>

           {/* Arrow */}
           <div className="w-8 flex items-center justify-center flex-shrink-0">
             <svg
               className="w-5 h-5 text-primary-500"
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

          {/* Block 3 */}
          <div className="flex-shrink-0 w-32 h-32 bg-primary-100 border-2 border-primary-300 rounded-lg p-3 flex flex-col items-center justify-center">
            <div className="text-xs font-semibold text-primary-700 mb-2">
              Block 3
            </div>
            <div className="text-xs text-gray-600 text-center">
              Transaction E<br />
              Transaction F
            </div>
            <div className="mt-2 text-xs text-primary-600">Hash: ghi789</div>
            <div className="mt-1 text-xs text-gray-500">← def456</div>
            </div>
          </div>
        </div>
        <p className="text-xs text-center text-gray-500 mt-4">
          Each block contains transactions and references the previous block,
          creating an unbreakable chain
        </p>
      </div>
    </Diagram>
  )
}

