import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const ART_SRC = 'https://zigguratss.com/assets/upload/art-1155.jpg'

const VIEWS = [
  { id: 'modern', title: 'Modern Living Room', src: ART_SRC },
  { id: 'minimal', title: 'Minimalist Office', src: ART_SRC },
  { id: 'studio', title: 'Dark Studio', src: ART_SRC },
]

export default function ARPreview({ image }) {
  const [i, setI] = useState(0)

  return (
    <div className="mt-6 bg-white rounded-lg p-4 border border-slate-200">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">AR Preview Mockup</h3>
        <div className="flex items-center space-x-2 text-sm text-slate-600">
          {VIEWS.map((v, idx) => (
            <button key={v.id} onClick={() => setI(idx)} className={`px-2 py-1 rounded ${i === idx ? 'bg-slate-900 text-white' : 'bg-white'}`}>
              {v.title.split(' ')[0]
                }
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }} className="w-full h-56 rounded overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center">
            <img src={VIEWS[i].src} alt={VIEWS[i].title} className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
