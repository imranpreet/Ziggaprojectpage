import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, Maximize2, ShoppingCart, CreditCard, Truck, CheckCircle, X, Share2 } from 'lucide-react'
import ColorExtractor from './ColorExtractor'
import ARPreview from './ARPreview'
import RelatedWorks from './RelatedWorks'
import ArtistBioDetailed from './ArtistBioDetailed'
import ArtworkStatement from './ArtworkStatement'
import ReadMore from './ReadMore'
import ArtistCardMini from './ArtistCardMini'

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
    <div className="relative">
      {/* Left Side Text - DIVINE */}
      <div className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-10 h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {['D', 'I', 'V', 'I', 'N', 'E'].map((letter, idx) => (
            <span key={idx} className="text-9xl font-extrabold leading-none" style={{ fontFamily: 'serif', color: '#b8935f' }}>
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* Right Side Text - TUNES */}
      <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-10 h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {['T', 'U', 'N', 'E', 'S'].map((letter, idx) => (
            <span key={idx} className="text-9xl font-extrabold leading-none" style={{ fontFamily: 'serif', color: '#b8935f' }}>
              {letter}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start px-4 md:px-6 lg:px-0">
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

          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center space-x-2 sm:space-x-3">
            <button aria-label="Zoom" onClick={() => setOpen(true)} className="p-1.5 sm:p-2 bg-white rounded-md shadow-sm border-2 border-[#c9a96e] hover:bg-[#c9a96e] hover:border-[#a87d4d] transition-all">
              <ZoomIn size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
            <button aria-label="Fullscreen" onClick={() => setOpen(true)} className="p-1.5 sm:p-2 bg-white rounded-md shadow-sm border-2 border-[#c9a96e] hover:bg-[#c9a96e] hover:border-[#a87d4d] transition-all">
              <Maximize2 size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
        </div>

        <div className="flex space-x-2 sm:space-x-3 md:space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {THUMBS.map((t, i) => (
            <button
              key={`${t.src}-${i}`}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 md:w-28 md:h-20 rounded-md overflow-hidden border-2 ${i === active ? 'border-[#c9a96e]' : 'border-slate-200'} bg-white hover:border-[#c9a96e] transition-all`}
              aria-label={`Thumbnail ${i + 1}`}
            >
              <img src={t.src} alt={t.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="relative max-w-6xl w-[95%] sm:w-[92%] h-[80%] sm:h-[84%] bg-white rounded-lg overflow-hidden" initial={{ scale: 0.98 }} animate={{ scale: 1 }} exit={{ scale: 0.98 }}>
                <button onClick={() => setOpen(false)} className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-1.5 sm:p-2 rounded bg-white/90 border-2 border-[#c9a96e] hover:bg-[#c9a96e] hover:border-[#a87d4d] transition-all">
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

        {/* Artist Section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h3 
            className="text-4xl md:text-5xl font-serif font-extrabold text-slate-900 mb-8 flex items-center gap-4 group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span 
              className="h-1 bg-gradient-to-r from-slate-900 via-emerald-600 to-teal-600 group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-500 rounded-full shadow-lg"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ width: 80, height: 6 }}
            ></motion.span>
            <motion.span 
              className="group-hover:text-emerald-600 transition-colors duration-300"
              whileHover={{ scale: 1.05, x: 10 }}
            >
              The Artist
            </motion.span>
          </motion.h3>
          <ArtistCardMini name="Pradip Sarkar" image="https://res.cloudinary.com/dp2e8mfvm/image/upload/v1753511549/kwcnlfdzx5kebvxrr1gz.jpg" location="Mumbai, India" />
        </motion.div>
      </div>

      {/* Right - Sticky Sidebar */}
      <aside className="md:sticky md:top-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-white p-4 sm:p-6 rounded-xl border border-slate-200 text-slate-900 shadow-deep"
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Divine Tunes-11</h1>
          <a href="#" className="text-sm text-slate-600 block mt-2 hover:underline">Pradip Sarkar</a>

          <div className="mt-6">
            <div className="text-sm text-slate-500">Price</div>
            <div className="text-xl sm:text-2xl font-semibold mt-1">₹1,18,300 <span className="text-xs sm:text-sm text-slate-500 font-normal">($1,577.33)</span></div>
            <div className="text-xs text-slate-500 mt-1">Tax included</div>
          </div>

          <div className="mt-4 space-y-2 text-xs sm:text-sm">
            <div className="flex items-center space-x-2 text-slate-700"><CheckCircle size={14} className="sm:w-4 sm:h-4 flex-shrink-0" /> <span>Certificate of Authenticity Included</span></div>
            <div className="flex items-center space-x-2 text-slate-700"><Truck size={14} className="sm:w-4 sm:h-4 flex-shrink-0" /> <span>Free Worldwide Shipping</span></div>
            <div className="flex items-center space-x-2 text-slate-700"><Share2 size={14} className="sm:w-4 sm:h-4 flex-shrink-0" /> <span>Share Artwork</span></div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#c9a96e] hover:bg-[#a87d4d] text-white rounded-lg font-semibold transition-all text-sm sm:text-base">
              <ShoppingCart size={16} /> <span>Add to Cart</span>
            </button>
            <button className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#c9a96e] rounded-lg text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white font-semibold bg-white transition-all text-sm sm:text-base">
              <CreditCard size={16} /> <span>Buy Now</span>
            </button>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 sm:gap-3 border-b border-slate-100 pb-4 overflow-x-auto">
              <button onClick={() => setTab('about')} className={`text-xs sm:text-sm py-2 whitespace-nowrap transition-colors ${tab === 'about' ? 'font-semibold text-[#c9a96e]' : 'text-slate-600 hover:text-[#c9a96e]'}`}>About the Artwork</button>
              <button onClick={() => setTab('artist')} className={`text-xs sm:text-sm py-2 whitespace-nowrap transition-colors ${tab === 'artist' ? 'font-semibold text-[#c9a96e]' : 'text-slate-600 hover:text-[#c9a96e]'}`}>Artist Bio</button>
              <button onClick={() => setTab('shipping')} className={`text-xs sm:text-sm py-2 whitespace-nowrap transition-colors ${tab === 'shipping' ? 'font-semibold text-[#c9a96e]' : 'text-slate-600 hover:text-[#c9a96e]'}`}>Shipping & Returns</button>
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

                  <div className="mt-2">This piece is part of the 'DIVINE TUNES' series — a saga of urge whereby depicted deeds inspire others. Love, affection, innocence, bonding and festivity are the root of the sonata that created this ambiance of expression and effect. Art in itself is the final message.</div>

                  <ArtworkStatement title="Lady and Butterflies" defaultOpen={true}>
                    <div className="space-y-3">
                      <motion.button onClick={() => setAdded(true)} whileTap={{ scale: 0.96 }} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#c9a96e] hover:bg-[#a87d4d] text-white rounded-lg font-semibold transition-all text-sm sm:text-base">
                        <ShoppingCart size={16} /> <span>{added ? 'Added' : 'Add to Cart'}</span>
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.02 }} className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#c9a96e] rounded-lg text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white font-semibold bg-white transition-all text-sm sm:text-base">
                        <CreditCard size={16} /> <span>Buy Now</span>
                      </motion.button>
                      <p>To further enhance the connection with nature, I have included three butterflies in the painting. Resplendent in darker shades of purple and pink, they flutter gracefully around the woman’s face. These ethereal creatures symbolize the delicate balance of life and the interconnectedness between all living beings.</p>

                      <p>“Lady and Butterflies” belongs to the series “In Harmony with Nature.” This collection explores the profound connection and interdependence between humans and the natural world. Through my art, I strive to inspire viewers to embrace compassion, appreciate the beauty of nature, and live in harmony with our surroundings.</p>

                      <h5 className="font-extrabold text-xl">Capturing the Awe-Inspiring Connection</h5>
                      <p>With “Lady and Butterflies”, I aimed to capture the profound and awe-inspiring connection between humans and nature. The woman’s gentle smile and loving gaze reflect her appreciation for the beauty that surrounds her. It is a reminder that we, too, can experience this sense of wonder and unity by embracing our role as caretakers of the earth.</p>

                      <h5 className="font-extrabold text-xl">Living in Harmony with Nature</h5>
                      <p>Through this artwork, I hope to convey the importance of living in harmony with nature. Our actions, both individually and collectively, reverberate through the delicate balance of ecosystems. By fostering empathy for all creatures, we can mitigate the negative impacts of human activities and strive towards a more sustainable coexistence.</p>

                      <p>In this series, I use symmetrical forms—squares, rectangles, checks, and butterflies—to cover the human figures. These geometric shapes represent the pursuit of perfection and balance, encapsulating the aspirations and struggles we all face as individuals striving for fulfillment.</p>
                    </div>
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
    </div>
  )
}
