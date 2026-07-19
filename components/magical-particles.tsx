'use client'

import { useEffect, useMemo, useState } from 'react'

type Particle = {
  left: number
  top: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function MagicalParticles() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 40 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.5 + 0.2,
    }))
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Deep vignette + fog */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(90,30,44,0.12),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[linear-gradient(to_top,rgba(15,12,10,0.9),transparent)]" />

      {mounted &&
        particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#d4af37] blur-[0.5px]"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              boxShadow: '0 0 6px 1px rgba(212,175,55,0.6)',
              animation: `floatSoft ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
    </div>
  )
}
