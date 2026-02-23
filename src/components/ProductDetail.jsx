import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, Maximize2, ShoppingCart, CreditCard, Truck, CheckCircle, X, Share2 } from 'lucide-react'
import ColorExtractor from './ColorExtractor'
import ARPreview from './ARPreview'
import RelatedWorks from './RelatedWorks'
import ArtistBioDetailed from './ArtistBioDetailed'
import ArtworkStatement from './ArtworkStatement'
import ReadMore from './ReadMore'

const ART_SRC = 'https://zigguratss.com/assets/upload/art-1155.jpg'

const THUMBS = [
  { src: ART_SRC, alt: 'Divine Tunes-11 - main' },
  { src: ART_SRC, alt: 'Divine Tunes-11 - alternate' },
  { src: ART_SRC, alt: 'Divine Tunes-11 - room view' },
]

export default function ProductDetail() {
  const [active, setActive] = useState(0)
  const [tab, setTab] = useState('about')
  const [open, setOpen] = useState(false)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    let t
    if (added) t = setTimeout(() => setAdded(false), 1200)
    return () => clearTimeout(t)
  }, [added])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
      {/* Left - Artwork */}
      <div className="space-y-6">
        <div className="relative bg-white rounded-lg overflow-hidden border border-slate-200">
          <motion.img
            src={THUMBS[active].src}
            alt={THUMBS[active].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.45 }}
            className="w-full h-[420px] sm:h-[520px] md:h-[640px] object-cover bg-slate-100 cursor-zoom-in"
            onClick={() => setOpen(true)}
          />

          <div className="absolute top-4 right-4 flex items-center space-x-3">
            <button aria-label="Zoom" onClick={() => setOpen(true)} className="p-2 bg-white rounded-md shadow-sm border border-slate-200">
              <ZoomIn size={18} />
            </button>
            <button aria-label="Fullscreen" onClick={() => setOpen(true)} className="p-2 bg-white rounded-md shadow-sm border border-slate-200">
              <Maximize2 size={18} />
            </button>
          </div>
        </div>

        <div className="flex space-x-3 sm:space-x-4">
          {THUMBS.map((t, i) => (
            <button
              key={t.src}
              onClick={() => setActive(i)}
              className={`w-20 h-14 sm:w-28 sm:h-20 rounded-md overflow-hidden border ${i === active ? 'border-slate-800' : 'border-slate-200'} bg-white`}
              aria-label={`Thumbnail ${i + 1}`}
            >
              <img src={t.src} alt={t.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="relative max-w-6xl w-[92%] h-[84%] bg-white rounded-lg overflow-hidden" initial={{ scale: 0.98 }} animate={{ scale: 1 }} exit={{ scale: 0.98 }}>
                <button onClick={() => setOpen(false)} className="absolute top-4 right-4 z-50 p-2 rounded bg-white/90 border border-slate-200">
                  <X size={18} />
                </button>
                <img src={THUMBS[active].src} alt="fullscreen" className="w-full h-full object-contain bg-white" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4">
          <h4 className="text-sm text-slate-300 mb-2">Palette</h4>
          <ColorExtractor src={THUMBS[active].src} />
        </div>

        <div className="mt-4">
          <ARPreview image={THUMBS[active].src} />
        </div>

        <RelatedWorks />

        <ArtistBioDetailed />
      </div>

      {/* Right - Sticky Sidebar */}
      <aside className="md:sticky md:top-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md bg-white p-6 rounded-xl border border-slate-200 text-slate-900 shadow-deep"
        >
          <h1 className="font-serif text-3xl">Divine Tunes-11</h1>
          <a href="#" className="text-sm text-slate-600 block mt-2 hover:underline">Pradip Sarkar</a>

          <div className="mt-6">
            <div className="text-sm text-slate-500">Price</div>
            <div className="text-2xl font-semibold mt-1">₹1,18,300 <span className="text-sm text-slate-500 font-normal">($1,577.33)</span></div>
            <div className="text-xs text-slate-500 mt-1">Tax included</div>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center space-x-2 text-slate-700"><CheckCircle size={16} /> <span>Certificate of Authenticity Included</span></div>
            <div className="flex items-center space-x-2 text-slate-700"><Truck size={16} /> <span>Free Worldwide Shipping</span></div>
            <div className="flex items-center space-x-2 text-slate-700"><Share2 size={16} /> <span>Share Artwork</span></div>
          </div>

          <div className="mt-6 flex space-x-3">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-lg font-semibold">
              <ShoppingCart size={16} /> Add to Cart
            </button>
            <button className="px-4 py-3 border border-slate-200 rounded-lg text-slate-900 font-semibold bg-white">
              <CreditCard size={16} /> Buy Now
            </button>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <button onClick={() => setTab('about')} className={`text-sm py-2 ${tab === 'about' ? 'font-semibold' : 'text-slate-600'}`}>About the Artwork</button>
              <button onClick={() => setTab('artist')} className={`text-sm py-2 ${tab === 'artist' ? 'font-semibold' : 'text-slate-600'}`}>Artist Bio</button>
              <button onClick={() => setTab('shipping')} className={`text-sm py-2 ${tab === 'shipping' ? 'font-semibold' : 'text-slate-600'}`}>Shipping & Returns</button>
            </div>

            <div className="mt-4 text-sm text-slate-700">
                {tab === 'about' && (
                <div className="space-y-2">
                  <div className="font-semibold">Divine Tunes-11 Painting series</div>
                  <div>WxH: 32.00 x 30.00 inch (81.28 x 76.20 cm)</div>
                  <div>Type of Artwork: Painting</div>
                  <div>Shipped as: Rolled</div>

                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                    <div><span className="font-semibold">Category:</span> Portrait</div>
                    <div><span className="font-semibold">Style:</span> Geometric</div>
                    <div><span className="font-semibold">Techniques:</span> Acrylic</div>
                    <div><span className="font-semibold">Material used:</span> Canvas</div>
                    <div><span className="font-semibold">Size (WxH):</span> 45.72 x 50.80 cm</div>
                    <div><span className="font-semibold">Medium:</span> Acrylic</div>
                    <div><span className="font-semibold">Selling Options:</span> Original</div>
                    <div><span className="font-semibold">Year:</span> 2018</div>
                    <div className="col-span-full"><span className="font-semibold">Delivery:</span> Stretched</div>
                  </div>

                  <ReadMore collapsedHeight={120}>
                    <div className="mt-2">This piece is part of the 'DIVINE TUNES' series — a saga of urge whereby depicted deeds inspire others. Love, affection, innocence, bonding and festivity are the root of the sonata that created this ambiance of expression and effect. Art in itself is the final message.</div>
                  </ReadMore>

                  <ArtworkStatement title="Lady and Butterflies">
                    <ReadMore collapsedHeight={200}>
                      <div className="space-y-3">
                        <motion.button onClick={() => setAdded(true)} whileTap={{ scale: 0.96 }} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-lg font-semibold">
                          <ShoppingCart size={16} /> {added ? 'Added' : 'Add to Cart'}
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.02 }} className="px-4 py-3 border border-slate-200 rounded-lg text-slate-900 font-semibold bg-white">
                          <CreditCard size={16} /> Buy Now
                        </motion.button>
                        <p>To further enhance the connection with nature, I have included three butterflies in the painting. Resplendent in darker shades of purple and pink, they flutter gracefully around the woman’s face. These ethereal creatures symbolize the delicate balance of life and the interconnectedness between all living beings.</p>

                        <p>“Lady and Butterflies” belongs to the series “In Harmony with Nature.” This collection explores the profound connection and interdependence between humans and the natural world. Through my art, I strive to inspire viewers to embrace compassion, appreciate the beauty of nature, and live in harmony with our surroundings.</p>

                        <h5 className="font-semibold">Capturing the Awe-Inspiring Connection</h5>
                        <p>With “Lady and Butterflies”, I aimed to capture the profound and awe-inspiring connection between humans and nature. The woman’s gentle smile and loving gaze reflect her appreciation for the beauty that surrounds her. It is a reminder that we, too, can experience this sense of wonder and unity by embracing our role as caretakers of the earth.</p>

                        <h5 className="font-semibold">Living in Harmony with Nature</h5>
                        <p>Through this artwork, I hope to convey the importance of living in harmony with nature. Our actions, both individually and collectively, reverberate through the delicate balance of ecosystems. By fostering empathy for all creatures, we can mitigate the negative impacts of human activities and strive towards a more sustainable coexistence.</p>

                        <p>In this series, I use symmetrical forms—squares, rectangles, checks, and butterflies—to cover the human figures. These geometric shapes represent the pursuit of perfection and balance, encapsulating the aspirations and struggles we all face as individuals striving for fulfillment.</p>
                      </div>
                    </ReadMore>
                  </ArtworkStatement>
                </div>
              )}

                {tab === 'artist' && (
                  <div className="space-y-2 text-justify">
                    <p className="mb-2"><strong>About The Artist</strong></p>
                    <p className="mb-2">PRADIP was born in Dhanbad, Jharkhand. He is a commerce graduate from Ranchi University and holds a diploma in fine art from the British Institute, Mumbai. Pradip is a gifted artist and a well-known face in the Indian contemporary art world since 1995, with over 70 significant exhibitions.</p>
                    <p className="mb-2">PRADIP SARKAR is an eminent artist of international repute whose geometric abstraction masterpieces adorn many corporate collections in India and abroad and are present in prestigious galleries like Lalit Kala Akademi.</p>
                    <p className="mb-2">Pradip's palette is warm, inviting and vibrant. His brush strokes speak of serenity, soothing hues and characteristic vibrancy that symbolize a frenetic pace and multitude of life's elements. His work focuses on spiritual and cultural aspects of society and reflects his philosophy of life, leaning towards music and harmony. He often composes with geometric boxed forms in layered applications, where his observation becomes the subject of his canvases.</p>
                    <p className="mb-2">Pradip says, "Art is the expression of his own life story... art is divine" — his love for music and harmony shows itself through his works. His paintings are found in collections across Germany, USA, Dubai and India, and in numerous corporate and institutional collections including Lalit Kala Akademi.</p>
                  </div>
                )}

                {tab === 'shipping' && (
                  <div className="space-y-2">
                    <p className="mb-2"><strong>Shipping & Returns</strong></p>
                    <p className="mb-1">Delivery Time: It takes 5–7 working days for domestic shipments, 10–20 working days for international shipments depending upon the country.</p>
                    <p className="mb-1">Delivery Cost: Shipping fee is included in the price of the artwork. Custom duties, octroi and taxes will be borne by the customer.</p>
                    <p className="mb-1">Returns: Return will be accepted within 24 hours of receipt of artwork only if the artwork is found damaged (except commissioned orders).</p>
                    <p className="mt-2">We ship rolled canvas with reinforced tubes for international transit. Framing and insured delivery options are available. Estimated delivery: 10–21 business days. Duties & taxes calculated at checkout.</p>
                  </div>
                )}
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            <div>SKU: ART-1005</div>
            <div>Stock: 1 of 1</div>
          </div>
        </motion.div>
      </aside>
    </div>
  )
}
