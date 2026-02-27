import React, { useEffect, useState } from 'react'

function toHex(r, g, b) {
  return (
    '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('').toUpperCase()
  )
}

export default function ColorExtractor({ src, count = 5 }) {
  const [colors, setColors] = useState([])

  useEffect(() => {
    if (!src) return

    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = src

    const fallback = ['#2E2B23', '#C9A96E', '#F2EEDD', '#6B6B6B', '#E8E4DF']

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const w = (canvas.width = Math.min(200, img.width))
        const h = (canvas.height = Math.min(200, img.height))
        ctx.drawImage(img, 0, 0, w, h)
        const data = ctx.getImageData(0, 0, w, h).data
        const map = new Map()
        for (let i = 0; i < data.length; i += 4 * 6) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          const key = `${Math.round(r / 16) * 16}-${Math.round(g / 16) * 16}-${Math.round(b / 16) * 16}`
          map.set(key, (map.get(key) || 0) + 1)
        }
        const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1])
        const result = sorted.slice(0, count).map(([k]) => {
          const [r, g, b] = k.split('-').map(Number)
          return toHex(r, g, b)
        })
        if (result.length) setColors(result)
        else setColors(fallback)
      } catch (e) {
        setColors(fallback)
      }
    }

    img.onerror = () => setColors(fallback)
  }, [src, count])

  return (
    <div className="flex items-center space-x-3">
      {colors.slice(0, count).map((c) => (
        <div key={c} className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full ring-1 ring-slate-200" style={{ backgroundColor: c }} />
          <div className="text-sm text-slate-600">{c}</div>
        </div>
      ))}
    </div>
  )
}
