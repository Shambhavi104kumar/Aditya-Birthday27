'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useState } from 'react'

export function OwlPost() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-16 md:py-20">
      {/* Owl */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative h-40 w-40"
      >
        <Image
          src="/images/owl.png"
          alt="A gentle owl carrying a sealed envelope"
          fill
          className="object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]"
        />
      </motion.div>

      <div className="mt-10 w-full">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="envelope"
              type="button"
              onClick={() => setOpen(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.02 }}
              className="mx-auto flex w-full max-w-md flex-col items-center gap-4 rounded-xl border border-[#d4af37]/30 bg-gradient-to-b from-[#241d18] to-[#1a1512] px-8 py-12 text-center shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
            >
              <Mail className="h-10 w-10 text-[#d4af37]" />
              <p className="font-display text-sm tracking-[0.25em] text-[#e7d7b6]">
                A LETTER HAS ARRIVED
              </p>
              <p className="font-serif text-sm italic text-[#e7d7b6]/60">
                Tap to open the envelope
              </p>
            </motion.button>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, scaleY: 0.4, y: -10 }}
              animate={{ opacity: 1, scaleY: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'top' }}
              className="parchment mx-auto w-full max-w-md rounded-xl border border-[#7a5c45]/40 p-8 text-center shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
            >
              <p className="font-display text-xs tracking-[0.3em] text-[#5a1e2c]">
                DELIVERED ON SILENT WINGS
              </p>
              <p className="mt-5 font-serif text-lg leading-relaxed text-[#2a2018] md:text-xl">
                &quot;I hope this year brings you everything you&apos;ve been
                working toward — and a little bit of magic you never saw
                coming.&quot;
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
