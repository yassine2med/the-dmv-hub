'use client'

export function CircuitLines() {
  return (
    <div className="absolute inset-y-0 left-0 right-0 pointer-events-none overflow-hidden select-none z-0 hidden xl:block">
      <style>{`
        @keyframes circuit-pulse-left {
          0% {
            stroke-dashoffset: 900;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes circuit-pulse-right {
          0% {
            stroke-dashoffset: 800;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .animate-circuit-pulse-left {
          animation: circuit-pulse-left 12s linear infinite;
        }
        .animate-circuit-pulse-right {
          animation: circuit-pulse-right 14s linear infinite;
          animation-delay: 4s;
        }
      `}</style>

      {/* Left Circuit Line */}
      <div className="absolute top-[8%] left-[calc(50%-660px)] w-20 h-[84%] opacity-25">
        <svg className="w-full h-full" viewBox="0 0 80 1200" preserveAspectRatio="none" fill="none">
          <path
            d="M 40 0 V 300 L 10 330 V 600 L 70 660 V 900 L 40 930 V 1200"
            stroke="url(#circuit-gradient-left)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Animated pulsing segment */}
          <path
            className="animate-circuit-pulse-left"
            d="M 40 0 V 300 L 10 330 V 600 L 70 660 V 900 L 40 930 V 1200"
            stroke="#43CEA2"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="120 780"
          />
          <defs>
            <linearGradient id="circuit-gradient-left" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 107, 157, 0.25)" />
              <stop offset="50%" stopColor="rgba(65, 88, 208, 0.25)" />
              <stop offset="100%" stopColor="rgba(67, 206, 162, 0.25)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right Circuit Line */}
      <div className="absolute top-[12%] right-[calc(50%-660px)] w-20 h-[76%] opacity-25">
        <svg className="w-full h-full" viewBox="0 0 80 1000" preserveAspectRatio="none" fill="none">
          <path
            d="M 40 0 V 250 L 70 280 V 500 L 10 560 V 750 L 40 780 V 1000"
            stroke="url(#circuit-gradient-right)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Animated pulsing segment */}
          <path
            className="animate-circuit-pulse-right"
            d="M 40 0 V 250 L 70 280 V 500 L 10 560 V 750 L 40 780 V 1000"
            stroke="#FF6B9D"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="100 700"
          />
          <defs>
            <linearGradient id="circuit-gradient-right" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(67, 206, 162, 0.25)" />
              <stop offset="50%" stopColor="rgba(65, 88, 208, 0.25)" />
              <stop offset="100%" stopColor="rgba(255, 107, 157, 0.25)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
