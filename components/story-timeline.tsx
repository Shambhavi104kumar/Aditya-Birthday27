'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'

const milestones = [
  {
    title: 'The Day We Met',
    text: 'Two strangers, one impossibly ordinary moment that turned out to be the beginning of everything.',
  },
  {
    title: 'Our Favourite Memories',
    text: 'The small adventures, the inside jokes, the places that will always feel like ours.',
  },
  {
    title: 'Our Endless Conversations',
    text: 'Hours that dissolved into minutes, words that never seemed to run out.',
  },
  {
    title: 'Every Laugh',
    text: 'The kind that made my cheeks ache and my worries disappear entirely.',
  },
  {
    title: 'Every Late-Night Call',
    text: 'Voices in the dark, keeping each other company across the quiet hours.',
  },
  {
    title: 'Every "I Miss You"',
    text: 'The distance only proved how much closer my heart wanted to be.',
  },
]

export function StoryTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl px-6 py-16 md:py-24">
      {/* Center line */}
      <div className="absolute bottom-0 left-6 top-16 w-px bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent md:left-1/2 md:top-24" />

      <ul className="space-y-14">
        {milestones.map((m, i) => {
          const leftSide = i % 2 === 0
          return (
            <li key={m.title} className="relative">
              <Reveal
                index={i}
                className={`md:flex ${leftSide ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Node */}
                <motion.span
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  className="absolute left-6 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[#d4af37] shadow-[0_0_12px_3px_rgba(212,175,55,0.6)] md:left-1/2"
                />
                <div
                  className={`parchment ml-12 rounded-lg border border-[#7a5c45]/30 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)] md:ml-0 md:w-[45%] ${
                    leftSide ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                  }`}
                >
                  <p className="mb-1 font-display text-xs tracking-[0.25em] text-[#5a1e2c]">
                    CHAPTER {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mb-2 font-display text-xl text-[#2a2018]">
                    {m.title}
                  </h3>
                  <p className="font-serif text-[15px] italic leading-relaxed text-[#3a2e24]">
                    {m.text}
                  </p>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
