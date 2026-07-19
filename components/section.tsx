'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function PageIntro({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 font-display text-xs tracking-[0.35em] text-[#7a5c45]"
      >
        {eyebrow.toUpperCase()}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-balance font-display text-4xl leading-tight text-[#d4af37] md:text-6xl"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-pretty font-serif text-lg italic leading-relaxed text-[#e7d7b6]/80"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
    </div>
  )
}

export function Section({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`mx-auto w-full max-w-6xl px-6 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  )
}
