import React, { useRef, useState } from 'react'

export default function Magnifier({ src, alt }) {
  const containerRef = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0, show: false })

  function handleMove(e) {
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setPos({ x, y, show: true })
  }

  function handleLeave() {
    setPos((s) => ({ ...s, show: false }))
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="w-full h-full relative"
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />

      {pos.show && (
        <div
          aria-hidden
          className="pointer-events-none absolute w-48 h-48 rounded-full border border-white/20 overflow-hidden"
          style={{ left: `calc(${pos.x}% - 6rem)`, top: `calc(${pos.y}% - 6rem)`, backdropFilter: 'none' }}
        >
          <img
            src={src}
            alt="zoom"
            className="absolute w-[200%] h-[200%] object-cover"
            style={{ left: `-${pos.x}%`, top: `-${pos.y}%`, transform: 'translate( -25%, -25% )' }}
          />
        </div>
      )}
    </div>
  )
}
