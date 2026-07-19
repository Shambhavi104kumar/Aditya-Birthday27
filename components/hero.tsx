'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

function Candle({ className }: { className?: string }) {
  return (
    <div className={`animate-float ${className}`}>
      <div className="relative flex flex-col items-center">
        <span className="animate-flicker block h-6 w-2 rounded-full bg-gradient-to-t from-[#d4af37] to-[#f6e6ac] blur-[1px] shadow-[0_0_18px_6px_rgba(212,175,55,0.6)]" />
        <span className="mt-0.5 h-12 w-2.5 rounded-sm bg-gradient-to-b from-[#e7d7b6] to-[#7a5c45]" />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* Background silhouette */}
      <Image
        src="/images/hogwarts-hero.png"
        alt="Silhouette of a castle beneath a starry, candlelit night sky"
        fill
        priority
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0c0a]/60 via-[#0f0c0a]/40 to-[#0f0c0a]" />

      {/* Floating candles */}
      <Candle className="absolute left-[12%] top-[28%] hidden md:block" />
      <Candle className="absolute right-[16%] top-[22%] hidden [animation-delay:1.5s] md:block" />
      <Candle className="absolute left-[22%] top-[62%] hidden [animation-delay:0.8s] lg:block" />
      <Candle className="absolute right-[24%] top-[58%] hidden [animation-delay:2.2s] lg:block" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#1a1512]/60 px-4 py-1.5 font-display text-xs tracking-[0.3em] text-[#d4af37]"
        >
          <Sparkles className="h-3.5 w-3.5" /> A MAGICAL CELEBRATION
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="text-balance font-display text-5xl leading-[1.05] md:text-7xl"
        >
          <span className="block text-[#e7d7b6]">Happy Birthday,</span>
          <span className="shimmer-gold block">Aditya</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mx-auto mt-6 max-w-lg text-pretty font-serif text-lg italic leading-relaxed text-[#e7d7b6]/80 md:text-xl"
        >
          Every great wizard deserves a story worth remembering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-10 flex items-center justify-center"
        >
          <Link
            href="/gallery"
            className="group relative inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 px-8 py-3.5 font-display text-sm tracking-widest text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37]/20 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
          >
            BEGIN THE JOURNEY
            <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-[#7a5c45]" />
      </motion.div>
    </section>
  )
}
