import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useCartStore from '../stores/cartStore'
import productController from '../controllers/productController'

const spring = { type: 'spring', stiffness: 50, damping: 20 }

function FlyingPortal() {
  const fly = useCartStore((s) => s.fly)
  const ref = useRef()

  useEffect(() => {
    if (!fly.active || !fly.from || !fly.to) return
    const img = document.createElement('img')
    img.src = fly.img
    img.className = 'fly-img'
    const portal = document.createElement('div')
    portal.className = 'fly-portal'
    portal.style.left = '0px'; portal.style.top = '0px'
    portal.appendChild(img)
    document.body.appendChild(portal)

    const start = fly.from
    const end = fly.to
    img.style.position = 'absolute'
    img.style.left = start.x + 'px'
    img.style.top = start.y + 'px'
    img.style.width = start.w + 'px'
    img.style.height = start.h + 'px'

    // animate via requestAnimationFrame-ish using CSS transitions
    requestAnimationFrame(() => {
      img.style.transition = 'all 720ms cubic-bezier(.2,.8,.2,1)'
      img.style.left = end.x + 'px'
      img.style.top = end.y + 'px'
      img.style.width = '28px'
      img.style.height = '28px'
      img.style.opacity = '0.92'
      img.style.transform = 'translateZ(0)'
    })

    const cleanup = () => { portal.remove(); }
    const t = setTimeout(cleanup, 820)
    return () => { clearTimeout(t); if (portal.parentNode) portal.remove() }
  }, [fly.active])

  return null
}

export default function HighEndProductExperience({ productId = 'art-1155' }) {
  const [product, setProduct] = useState(null)
  const imageRef = useRef()
  const wrapperRef = useRef()
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const cart = useCartStore()

  useEffect(() => {
    let mounted = true
    productController.getProduct(productId).then((p) => mounted && setProduct(p)).catch(() => {})
    return () => (mounted = false)
  }, [productId])

  // parallax mouse handler
  useEffect(() => {
    const node = wrapperRef.current
    if (!node) return
    let raf = null
    function onMove(e) {
      const r = node.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      const ry = px * 6 // rotateY
      const rx = -py * 6 // rotateX
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setTilt({ rx, ry }))
    }
    function onLeave() { if (raf) cancelAnimationFrame(raf); setTilt({ rx: 0, ry: 0 }) }
    node.addEventListener('mousemove', onMove)
    node.addEventListener('mouseleave', onLeave)
    return () => { node.removeEventListener('mousemove', onMove); node.removeEventListener('mouseleave', onLeave); if (raf) cancelAnimationFrame(raf) }
  }, [])

  // radar in-view observer
  const radarRef = useRef()
  useEffect(() => {
    const el = radarRef.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) el.classList.add('visible') })
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  if (!product) return <div className="container py-12">Loading…</div>

  function handleAdd(e) {
    // micro-interaction and flying item trigger
    const img = imageRef.current
    const from = img.getBoundingClientRect()
    const cartIcon = document.getElementById('nav-cart')
    const toRect = cartIcon ? cartIcon.getBoundingClientRect() : { x: window.innerWidth - 60, y: 12, width: 28, height: 28 }
    cart.addToCart(product)
    cart.triggerFly({ img: product.images?.[0], from: { x: from.left, y: from.top, w: from.width, h: from.height }, to: { x: toRect.left + toRect.width/2, y: toRect.top + toRect.height/2 } })
    // simple button animation handled in DOM via classes
    const btn = e.currentTarget
    btn.classList.add('btn-loading')
    setTimeout(() => { btn.classList.remove('btn-loading'); btn.classList.add('btn-done') }, 520)
    setTimeout(() => btn.classList.remove('btn-done'), 1400)
  }

  return (
    <div className="container py-10">
      <div className="melting-navbar p-4 mb-6 rounded-b-lg">
        <div className="flex items-center justify-between">
          <div className="text-sm">Nature‑Tech Gallery</div>
          <div id="nav-cart" className="text-sm">Cart • {cart.items.length}</div>
        </div>
      </div>

      <div className="relative parallax-stage">
        <div className="editorial-title">{product.title}</div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div ref={wrapperRef} className="parallax-inner rounded-2xl overflow-hidden" style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}>
              <motion.div transition={spring} className="relative bg-black rounded-2xl">
                <img ref={imageRef} src={product.images?.[0]} alt={product.title} className="w-full h-[62vh] md:h-[78vh] object-cover" />
                <div style={{ position: 'absolute', left: 18, bottom: 18 }}>
                  <span className="local-harvest">ਅਸਲੀ ਹਾਰਵੈਸਟ</span>
                </div>
              </motion.div>
            </div>
          </div>

          <aside className="lg:col-span-4 sticky top-28">
            <div className="glass-card p-6 rounded-2xl">
              <h2 className="font-serif text-2xl mb-1">{product.title}</h2>
              <div className="muted-text mb-3">by {product.artist}</div>

              <div className="lifecycle mb-4">
                {['seed','bloom','harvest'].map((s, i) => (
                  <div key={s} className={`step ${product.stage === s ? 'active' : ''}`}>
                    <div className="dot" />
                    <div className="label">{s === 'seed'? 'Seed' : s === 'bloom' ? 'Bloom' : 'Harvest'}</div>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <button onClick={handleAdd} className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#047857] to-[#065F46] text-white flex items-center justify-center gap-3">
                  <span className="leaf">🍃</span>
                  <span>Add to Cart</span>
                  <span className="check">✓</span>
                </button>
              </div>

              <div className="mt-2">
                <div className="text-sm muted-text mb-2">Scent / Origin</div>
                <svg ref={radarRef} width="160" height="120" viewBox="0 0 160 120">
                  <polygon className="radar" points="80,10 120,40 100,90 60,90 40,40" />
                </svg>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <FlyingPortal />
    </div>
  )
}
