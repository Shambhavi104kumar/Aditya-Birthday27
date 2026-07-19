'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Footprints } from 'lucide-react'
import { useState } from 'react'

type Spot = { x: number; y: number; title: string; memory: string }

const spots: Spot[] = [
  {
    x: 20,
    y: 30,
    title: 'Memory One',
    memory: 'Our late night calls ...video calls too if you remember ...the spicy ones ...One week into us talking and I was traveling with family and I had the room to myself and you told me this horrifying story of this dead woman and god knows how it lead to the Paavam thing towards the end',
  },
  {
    x: 46,
    y: 58,
    title: 'Memory Two',
    memory: 'The first time I came to Chennai to see you and Shit went haywire...but You handled me well and I loved spending that brief time I had with you...We still managed to have a good time',
  },
  {
    x: 68,
    y: 26,
    title: 'Memory Three',
    memory: 'We both got our shirts stained with paneer butter masala',
  },
  {
    x: 80,
    y: 66,
    title: 'Memory Four',
    memory: 'You came to Vellore and broke the Jinx finally!...And a lot of paavam things happened 😉 ',
  },
]

export function MemoriesMap() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <p className="mb-8 text-center font-serif text-base italic text-[#e7d7b6]/70">
        &quot;I solemnly swear that I am up to no good.&quot; — Tap the footprints
        to reveal what&apos;s hidden.
      </p>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#7a5c45]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Image
          src="/images/marauders-map.svg"
          alt="An aged parchment map with faint winding corridors and ink lines"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f0c0a]/20" />

        {spots.map((s, i) => (
          <div
            key={i}
            className="absolute"
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
          >
            <motion.button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              aria-label={`Reveal ${s.title}`}
              className="relative -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            >
              <span className="absolute inset-0 -z-10 rounded-full bg-[#d4af37]/40 blur-md" />
              <Footprints className="h-7 w-7 text-[#5a1e2c] drop-shadow-[0_0_6px_rgba(212,175,55,0.7)]" />
            </motion.button>

            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.9 }}
                  className="absolute left-1/2 top-6 z-20 w-52 -translate-x-1/2 rounded-lg border border-[#d4af37]/40 bg-[#1a1512]/95 p-4 text-center shadow-[0_0_30px_rgba(212,175,55,0.25)] backdrop-blur"
                >
                  <p className="mb-1 font-display text-sm tracking-widest text-[#d4af37]">
                    {s.title}
                  </p>
                  <p className="font-serif text-sm italic leading-relaxed text-[#e7d7b6]/85">
                    {s.memory}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
