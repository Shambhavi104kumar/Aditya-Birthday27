'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles, X } from 'lucide-react'
import { useEffect, useState } from 'react'

function SnitchSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden="true">
      {/* left wing */}
      <path
        d="M52 30 C30 8, 6 10, 2 26 C22 20, 40 26, 50 34 Z"
        fill="rgba(231,215,182,0.85)"
        stroke="rgba(212,175,55,0.9)"
        strokeWidth="1"
      />
      {/* right wing */}
      <path
        d="M68 30 C90 8, 114 10, 118 26 C98 20, 80 26, 70 34 Z"
        fill="rgba(231,215,182,0.85)"
        stroke="rgba(212,175,55,0.9)"
        strokeWidth="1"
      />
      {/* body */}
      <circle cx="60" cy="32" r="11" fill="#d4af37" />
      <circle cx="60" cy="32" r="11" fill="url(#g)" />
      <defs>
        <radialGradient id="g" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#f6e6ac" />
          <stop offset="100%" stopColor="#a9861f" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export function GoldenSnitch() {
  const [caught, setCaught] = useState(false)
  const [flightKey, setFlightKey] = useState(0)

  // Re-trigger a new random flight periodically
  useEffect(() => {
    const id = setInterval(() => setFlightKey((k) => k + 1), 13000)
    return () => clearInterval(id)
  }, [])

  const startY = 12 + (flightKey % 5) * 14
  const midY = startY + (flightKey % 2 === 0 ? -10 : 14)

  return (
    <>
      <motion.button
        key={flightKey}
        type="button"
        aria-label="Catch the Golden Snitch"
        onClick={() => setCaught(true)}
        className="pointer-events-auto fixed left-0 top-0 z-40 h-8 w-16 cursor-pointer"
        initial={{ x: '-10vw', y: `${startY}vh`, opacity: 0 }}
        animate={{
          x: ['-10vw', '40vw', '90vw', '110vw'],
          y: [`${startY}vh`, `${midY}vh`, `${startY}vh`, `${midY}vh`],
          opacity: [0, 1, 1, 0],
        }}
        transition={{ duration: 11, ease: 'easeInOut' }}
        whileHover={{ scale: 1.3 }}
      >
        <SnitchSvg className="h-full w-full drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
      </motion.button>

      <AnimatePresence>
        {caught && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0f0c0a]/80 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCaught(false)}
          >
            <motion.div
              className="relative w-full max-w-md rounded-2xl border border-[#d4af37]/30 bg-gradient-to-b from-[#241d18] to-[#1a1512] p-8 text-center shadow-[0_0_60px_rgba(212,175,55,0.25)]"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: 'spring', damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setCaught(false)}
                className="absolute right-4 top-4 text-[#7a5c45] transition-colors hover:text-[#d4af37]"
              >
                <X className="h-5 w-5" />
              </button>
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mx-auto mb-4 w-28"
              >
                <SnitchSvg className="w-full drop-shadow-[0_0_16px_rgba(212,175,55,0.9)]" />
              </motion.div>
              <p className="mb-2 flex items-center justify-center gap-2 font-display text-2xl text-[#d4af37]">
                <Sparkles className="h-5 w-5" /> You caught the Snitch!
              </p>
              <p className="font-serif text-lg italic leading-relaxed text-[#e7d7b6]">
                {
                  '"Just like you caught me — the moment I met you, I knew this year would be worth chasing. Happy Birthday, my favourite seeker."'
                }
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
