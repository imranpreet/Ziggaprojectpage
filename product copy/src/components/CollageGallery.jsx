import React from 'react'
import { motion } from 'framer-motion'

export default function CollageGallery({ image = '' , thumbCount = 6 }) {
  const thumbs = new Array(thumbCount).fill(image)

  return (
    <section className="collage container py-8">
      <div className="collage-inner">
        <motion.div className="collage-main glass-card" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          <div className="collage-main-img">
            <img src={image} alt="Main" />
          </div>
        </motion.div>

        <div className="collage-thumbs">
          {thumbs.map((src, i) => (
            <motion.button key={i} className="collage-thumb glass-card" whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 220 }}>
              <img src={src} alt={`Thumb ${i + 1}`} />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
