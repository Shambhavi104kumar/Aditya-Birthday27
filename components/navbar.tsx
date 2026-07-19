'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Sparkles, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/letter', label: 'The Letter' },
  { href: '/award', label: 'Triwizard' },
  { href: '/memories', label: "Marauder's" },
  { href: '/playlist', label: 'Playlist' },
  { href: '/owl-post', label: 'Owl Post' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d4af37]/10 bg-[#0f0c0a]/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg tracking-wide text-[#d4af37]"
          onClick={() => setOpen(false)}
        >
          <Sparkles className="h-4 w-4" />
          <span>Aditya&apos;s Chronicle</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative rounded-full px-3 py-1.5 font-serif text-sm tracking-wide transition-colors ${
                    active
                      ? 'text-[#d4af37]'
                      : 'text-[#e7d7b6]/70 hover:text-[#e7d7b6]'
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-[#d4af37]"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="text-[#d4af37] lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#d4af37]/10 bg-[#0f0c0a]/95 px-5 lg:hidden"
          >
            {links.map((l) => {
              const active = pathname === l.href
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-[#d4af37]/5 py-3 font-serif text-base ${
                      active ? 'text-[#d4af37]' : 'text-[#e7d7b6]/80'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
