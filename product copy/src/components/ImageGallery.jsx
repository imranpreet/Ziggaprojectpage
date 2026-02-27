import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Magnifier from './Magnifier'
import ColorPalette from './ColorPalette'

const ART_SRC = 'https://zigguratss.com/assets/upload/art-1155.jpg'

const IMAGES = [
  { src: ART_SRC, alt: 'Divine Tunes-11 - view 1' },
  { src: ART_SRC, alt: 'Divine Tunes-11 - view 2' },
  { src: ART_SRC, alt: 'Divine Tunes-11 - view 3' },
]

export default function ImageGallery() {
  const [index, setIndex] = useState(0)

  return (
    <div className="space-y-6">
      <div className="relative w-full h-[560px] bg-black/20 rounded-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${IMAGES[index].src}-${index}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <Magnifier src={IMAGES[index].src} alt={IMAGES[index].alt} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center space-x-4">
        {IMAGES.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            onClick={() => setIndex(i)}
            className={`w-20 h-14 rounded-md overflow-hidden ring-1 ring-white/10 ${i === index ? 'ring-2 ring-gold-500' : ''}`}
            aria-label={`Thumbnail ${i + 1}`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      <ColorPalette colors={["#2E2B23", "#C9A96E", "#F2EEDD", "#6B6B6B"]} />
    </div>
  )
}
