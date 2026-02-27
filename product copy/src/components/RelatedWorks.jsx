import React from 'react'

const ART_SRC = 'https://zigguratss.com/assets/upload/art-1155.jpg'

const WORKS = [
  { title: 'Divine Tunes-09', src: ART_SRC },
  { title: 'Divine Tunes-10', src: ART_SRC },
  { title: 'Divine Tunes-12', src: ART_SRC },
]

export default function RelatedWorks() {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-extrabold mb-4 text-slate-900">Related Works</h3>
      <div className="flex space-x-4">
        {WORKS.map((w) => (
          <div key={w.title} className="w-44 bg-white rounded-lg overflow-hidden border border-slate-200">
            <img src={w.src} alt={w.title} className="w-full h-28 object-cover" />
            <div className="p-3 text-sm text-slate-900">{w.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
