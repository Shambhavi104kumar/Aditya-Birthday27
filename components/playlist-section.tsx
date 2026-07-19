'use client'

import { motion } from 'framer-motion'
import { Play, Music2 } from 'lucide-react'

// Replace this with your actual playlist link
const PLAYLIST_URL =
  'https://youtube.com/playlist?list=PLM4dZCJ4ioDQ&si=2lz43YIXn2ow2INd'

export default function PlaylistSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-yellow-700/30 bg-[#1a1512] p-10 text-center shadow-2xl"
        >
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-yellow-500/10 p-5">
              <Music2 className="h-12 w-12 text-yellow-400" />
            </div>
          </div>

          <h2 className="text-4xl font-serif text-yellow-300 mb-4">
            Songs for You
          </h2>

          <p className="text-stone-300 max-w-2xl mx-auto mb-8">
            All these songs have made me cry and sleepy as well ...Thought you might need more songs to fall asleep to ...since your Original Sleepy song hits different because of the Paavam things we did haha
          </p>

          <motion.a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 px-8 py-4 text-black font-semibold shadow-lg transition-all hover:shadow-yellow-500/30"
          >
            <Play className="h-5 w-5 fill-current" />
            Open Playlist
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}