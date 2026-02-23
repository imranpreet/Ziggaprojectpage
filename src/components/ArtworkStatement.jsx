import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ArtworkStatement({ title = 'Lady and Butterflies', children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
        <button onClick={() => setOpen((s) => !s)} className="text-sm text-slate-600 underline">
          {open ? 'Hide' : 'Read Full'}
        </button>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="overflow-hidden mt-3 text-slate-700"
      >
        {children}
      </motion.div>
    </div>
  )
}
