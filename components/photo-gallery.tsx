'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

type Photo = { src: string; caption: string; tall?: boolean }

const photos: Photo[] = [
  {
    src: "/images/WhatsApp Image 2026-07-16 at 22.06.28.png",
    caption: "My gorgeous man right there ",
    tall: true,
  },
  {
    src: "/images/WhatsApp Image 2026-07-16 at 22.06.29 (1).png",
    caption: " I'd devour all of that any given day",
  },
  {
    src: "/images/WhatsApp Image 2026-07-16 at 22.06.30.png",
    caption: "We were ranting late night lol...You just look cute AF",
  },
  {
    src: "/images/WhatsApp Image 2026-07-16 at 22.06.31 (1).png",
    caption: "Random calls whilst you were working...It was fun seeing you sleepy haha",
    tall: true,
  },
  {
    src: "/images/WhatsApp Image 2026-07-16 at 22.06.31.png",
    caption: "The things I'd do to you...God",
  },
  {
    src: "/images/WhatsApp Image 2026-07-16 at 22.06.33.png",
    caption: "Gosh the setup and fuckin red light ...It's a nice thing we had goin",
  },
  {
    src: "/images/WhatsApp Image 2026-07-16 at 22.06.34.png",
    caption: "Would've been better without the shirt but I'll take that...and you do be looking fine AF",
    tall: true,
  },
  {
    src: "/images/WhatsApp Image 2026-07-16 at 22.08.53.png",
    caption: "How are you so hot hon",
  },
  {
    src: "/images/Screenshot 2026-07-16 at 9.00.52 PM.png",
    caption: "Definitely my new fav with your biceps popping...You remember the shit I did to you.. don't ya",
  },
];
export function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((a) => (a === null ? a : (a + 1) % photos.length)),
    [],
  )
  const prev = useCallback(
    () => setActive((a) => (a === null ? a : (a - 1 + photos.length) % photos.length)),
    [],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, close, next, prev])

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {photos.map((p, i) => (
          <motion.button
            key={p.src}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className="group relative block w-full overflow-hidden rounded-xl border border-[#d4af37]/15 transition-all duration-300 hover:border-[#d4af37]/60 hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]"
          >
            <Image
              src={p.src || '/placeholder.svg'}
              alt={p.caption}
              width={600}
              height={p.tall ? 800 : 600}
              className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-[#0f0c0a]/90 to-transparent p-4 text-left font-serif text-sm italic text-[#e7d7b6] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {p.caption}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0f0c0a]/95 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-5 top-5 text-[#e7d7b6]/70 transition-colors hover:text-[#d4af37]"
            >
              <X className="h-7 w-7" />
            </button>
            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-[#d4af37]/30 p-2 text-[#e7d7b6]/70 transition-colors hover:text-[#d4af37] md:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[#d4af37]/30 p-2 text-[#e7d7b6]/70 transition-colors hover:text-[#d4af37] md:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.figure
              key={active}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 22 }}
              className="max-h-[85vh] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[active].src || '/placeholder.svg'}
                alt={photos[active].caption}
                width={1000}
                height={1200}
                className="max-h-[78vh] w-auto rounded-xl border border-[#d4af37]/30 object-contain shadow-[0_0_60px_rgba(212,175,55,0.2)]"
              />
              <figcaption className="mt-4 text-center font-serif text-base italic text-[#e7d7b6]/80">
                {photos[active].caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
