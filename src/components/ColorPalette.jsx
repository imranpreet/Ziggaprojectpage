import React from 'react'

export default function ColorPalette({ colors = [] }) {
  return (
    <div className="flex items-center space-x-3">
      {colors.map((c) => (
          <div key={c} className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full ring-1 ring-slate-200" style={{ backgroundColor: c }} />
            <div className="text-sm text-slate-600">{c.toUpperCase()}</div>
        </div>
      ))}
    </div>
  )
}
