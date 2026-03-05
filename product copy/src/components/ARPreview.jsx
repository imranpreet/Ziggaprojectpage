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
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-900">AR Preview Mockup</h3>
        <div className="flex items-center gap-2 text-xs">
          {VIEWS.map((v, idx) => (
            <button 
              key={v.id} 
              onClick={() => setI(idx)} 
              className={`px-3 py-1.5 rounded-md font-medium transition-all duration-200 ${
                i === idx 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {v.title.split(' ')[0]}
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
