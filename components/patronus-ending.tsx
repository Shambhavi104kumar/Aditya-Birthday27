'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export function PatronusEnding() {
  return (
    <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      {/* Patronus mist */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(220,235,255,0.28),transparent_70%)] blur-2xl" />
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#e9f2ff]"
            style={{ left: `${(i * 61) % 100}%`, top: `${(i * 43) % 100}%` }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.4, 1.4, 0.4],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4 + (i % 4),
              delay: i * 0.3,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, letterSpacing: '0.1em' }}
        whileInView={{ opacity: 1, letterSpacing: '0.35em' }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="relative font-display text-sm tracking-[0.35em] text-[#cfe0f5]"
      >
        MISCHIEF MANAGED
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative mt-6 flex items-center justify-center gap-3 font-display text-4xl text-[#e7d7b6] md:text-6xl"
      >
        Happy Birthday
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <Heart className="h-8 w-8 fill-[#5a1e2c] text-[#5a1e2c] md:h-10 md:w-10" />
        </motion.span>
      </motion.h2>
    </div>
  )
}
