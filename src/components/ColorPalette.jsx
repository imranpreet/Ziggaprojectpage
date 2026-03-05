import React, { useState } from 'react'
import { Check } from 'lucide-react'

export default function ColorPalette({ colors = [] }) {
  const [selected, setSelected] = useState(null)
  const [copied, setCopied] = useState(false)

  const handleColorClick = (color) => {
    setSelected(color)
    navigator.clipboard.writeText(color)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      <div className="flex items-center space-x-3 flex-wrap gap-y-2">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => handleColorClick(c)}
            className="flex items-center space-x-2 hover:bg-slate-50 p-1 rounded transition-all group cursor-pointer"
            title="Click to copy color code"
          >
            <div 
              className={`w-8 h-8 rounded-full ring-2 transition-all ${
                selected === c ? 'ring-[#c9a96e] scale-110' : 'ring-slate-200 group-hover:ring-slate-300'
              } relative`}
              style={{ backgroundColor: c }}
            >
              {selected === c && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white drop-shadow-lg" strokeWidth={3} />
                </div>
              )}
            </div>
            <div className="text-sm text-slate-600 group-hover:text-slate-900 font-mono">
              {c.toUpperCase()}
            </div>
          </button>
        ))}
      </div>
      {copied && (
        <div className="mt-2 text-xs text-green-600 font-medium">
          ✓ Color code copied to clipboard!
        </div>
      )}
    </div>
  )
}
