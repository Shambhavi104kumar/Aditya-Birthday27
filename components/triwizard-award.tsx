'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function TriwizardAward() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Cup */}
        <Reveal className="flex justify-center">
          <div className="relative flex h-[360px] w-[360px] items-center justify-center">
            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_65%)] blur-2xl" />
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative"
            >
              <Image
                src="/images/triwizard-cup.png"
                alt="A glowing golden Triwizard Cup radiating blue magical light"
                width={300}
                height={300}
                className="drop-shadow-[0_0_40px_rgba(212,175,55,0.6)]"
              />
            </motion.div>
            {/* sparkles */}
            {[...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-[#f6e6ac]"
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${15 + ((i * 37) % 70)}%`,
                }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5] }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.4,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </Reveal>

        {/* Certificate */}
        <Reveal index={1}>
          <div className="parchment relative rounded-lg border-2 border-[#d4af37]/50 p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:p-10">
            <div className="pointer-events-none absolute inset-2 rounded border border-[#7a5c45]/40" />
            <Sparkles className="mx-auto mb-4 h-6 w-6 text-[#5a1e2c]" />
            <p className="font-display text-xs tracking-[0.3em] text-[#5a1e2c]">
              OFFICIAL DECREE OF THE TRIWIZARD TOURNAMENT
            </p>
            <h2 className="mt-5 font-display text-2xl leading-tight text-[#2a2018] md:text-3xl">
              Triwizard Champion of My Heart
            </h2>
            <div className="mx-auto my-5 h-px w-28 bg-[#7a5c45]/50" />
            <p className="font-serif text-[16px] italic leading-relaxed text-[#3a2e24]">
              Awarded to <span className="font-semibold not-italic">Aditya</span>{' '}
              for extraordinary courage, unwavering patience, endless chaos, and
              for making my world infinitely brighter.
            </p>
            <p className="mt-8 font-display text-sm tracking-widest text-[#5a1e2c]">
              — SEALED WITH LOVE —
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
