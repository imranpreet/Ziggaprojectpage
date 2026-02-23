import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import productController from '../controllers/productController'
import { useAuth } from '../stores/authStore'
import ReadMore from './ReadMore'

function LensOverlay({ pos }) {
  return (
    <div className="lens-overlay">
      <div className="lens-dot" style={{ left: pos.x + 'px', top: pos.y + 'px', opacity: pos.x ? 1 : 0 }} />
    </div>
  )
}

export default function ProductPageLuxury({ productId = 'art-1155' }) {
  const [product, setProduct] = useState(null)
  const [tab, setTab] = useState('story')
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const { loggedIn } = useAuth()

  useEffect(() => {
    let mounted = true
    productController.getProduct(productId).then((p) => mounted && setProduct(p)).catch(() => {})
    return () => (mounted = false)
  }, [productId])

  function handleMouse(e) {
    const r = heroRef.current?.getBoundingClientRect()
    if (!r) return setPos({ x: 0, y: 0 })
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
  }

  if (!product) return <div className="container py-12">Loading…</div>

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Hero stage */}
        <div className="lg:col-span-8 relative" onMouseMove={handleMouse} ref={heroRef}>
          <div className="relative bg-black rounded-lg overflow-hidden" style={{ minHeight: 420 }}>
            <img src={product.images?.[0]} alt={product.title} className="w-full h-[48vh] md:h-[68vh] object-cover" />

            <div style={{ position: 'absolute', right: 18, top: 18 }}>
              <div className="meta-badge">ਕੁਦਰਤੀ</div>
            </div>

            <LensOverlay pos={pos} />
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
            <h1 className="font-serif text-3xl">{product.title}</h1>
            <div className="text-sm muted-text mt-1">by {product.artist}</div>
          </motion.div>
        </div>

        {/* Action bar / floating */}
        <div className="lg:col-span-4">
          <div className="glass-card p-5 rounded-xl shadow-deep">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm muted-text">Price</div>
                <div className="text-xl font-semibold">{product.price}</div>
              </div>
              <div>
                {loggedIn && (
                  <button aria-label="Wishlist" className="px-3 py-2 rounded-full bg-white/30">❤</button>
                )}
              </div>
            </div>

            <div className="mt-4">
              <button className="w-full shimmer bg-[#065F46] text-white px-4 py-3 rounded-lg font-semibold">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="mt-8 bento-grid">
        <motion.div layout className="glass-card p-6 rounded-xl">
          <h3 className="font-semibold mb-2">The Story</h3>
          <ReadMore collapsedHeight={120} className="muted-text">{product.story}</ReadMore>
        </motion.div>

        <motion.div layout className="glass-card p-6 rounded-xl">
          <h3 className="font-semibold mb-2">Specs</h3>
          <div className="text-sm">Size: {product.specs?.size}</div>
          <div className="text-sm">Material: {product.specs?.material}</div>
        </motion.div>

        <motion.div layout className="glass-card p-6 rounded-xl">
          <h3 className="font-semibold mb-2">Scent / Vibe</h3>
          <svg viewBox="0 0 300 120" className="w-full h-24">
            <motion.path d="M10 80 C 80 10, 220 10, 290 80" stroke="#065F46" strokeWidth="3" fill="none" className="scent-path" />
            <motion.circle cx="40" cy="70" r="6" fill="#FDF2F8" />
            <motion.circle cx="150" cy="40" r="6" fill="#c9a96e" />
            <motion.circle cx="260" cy="70" r="6" fill="#065F46" />
          </svg>
        </motion.div>
      </div>

      {/* Tabbed content with AnimatePresence */}
      <div className="mt-8">
        <div className="flex gap-4">
          {['story', 'shipping', 'details'].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-3 py-2 rounded ${tab === t ? 'bg-[#065F46] text-white' : 'bg-white/10'}`}>
              {t}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <AnimatePresence mode="wait">
            {tab === 'story' && (
              <motion.div key="story" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="glass-card p-6 rounded-xl">
                <h4 className="font-semibold">Story</h4>
                <ReadMore collapsedHeight={160} className="muted-text mt-2">{product.story}</ReadMore>
              </motion.div>
            )}

            {tab === 'shipping' && (
              <motion.div key="shipping" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="glass-card p-6 rounded-xl">
                <h4 className="font-semibold">Shipping & Returns</h4>
                <p className="muted-text mt-2">Standard delivery 5–10 business days.</p>
              </motion.div>
            )}

            {tab === 'details' && (
              <motion.div key="details" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="glass-card p-6 rounded-xl">
                <h4 className="font-semibold">Details</h4>
                <pre className="text-sm muted-text mt-2">{JSON.stringify(product.specs, null, 2)}</pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
