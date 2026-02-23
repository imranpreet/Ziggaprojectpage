import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CTAButtons from './CTAButtons'

export default function ProductCard({ title, artist, image, price, href = '#', verified = false }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <article className="relative bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 card-hover">
        <button onClick={() => setOpen(true)} className="block w-full h-36 sm:h-40 md:h-44 overflow-hidden relative">
          <img loading="lazy" src={image} alt={title} className="w-full h-full object-cover transform transition-transform hover:scale-105" />
          {price && (
            <div className="absolute top-3 right-3 price-badge">{price}</div>
          )}
        </button>

        <div className="p-3">
          <h4 className="font-serif text-sm text-slate-900 line-clamp-2">{title}</h4>
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs muted-text">{artist}</p>
            {verified && <span className="text-xs px-2 py-0.5 bg-white/80 text-[#b88f3a] rounded">Verified</span>}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <button onClick={() => setOpen(true)} className="text-xs px-3 py-2 bg-slate-900 text-white rounded-md">Quick View</button>
            <button className="text-xs px-3 py-2 border border-slate-200 rounded-md text-slate-900">Add</button>
          </div>
        </div>
      </article>

      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="relative max-w-4xl w-[96%] md:w-[92%] h-full md:h-auto bg-white rounded-none md:rounded-lg overflow-auto md:overflow-hidden" initial={{ scale: 0.98 }} animate={{ scale: 1 }} exit={{ scale: 0.98 }}>
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 z-50 p-2 rounded bg-white/90 border border-slate-200">✕</button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="w-full h-64 md:h-96 bg-slate-100 flex items-center justify-center">
                <img src={image} alt={title} className="max-h-72 md:max-h-96 max-w-full object-contain bg-white" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-slate-900">{title}</h3>
                <p className="text-sm muted-text mt-2">{artist}</p>
                {price && <div className="mt-4 text-2xl font-semibold text-slate-900">{price}</div>}
                <div className="mt-6">
                  <CTAButtons />
                </div>
                <div className="mt-6 text-sm text-slate-700">
                  <p>Short description or details about the artwork can go here. Replace with real data when available.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
