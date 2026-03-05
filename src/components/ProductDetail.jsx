import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, Maximize2, ShoppingCart, CreditCard, Truck, CheckCircle, X, Share2, MessageCircle, Package, Clock, MapPin, Shield, RefreshCw, Globe } from 'lucide-react'
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

          <div className="mt-6 flex flex-col sm:flex-row gap-2">
            <button className="flex-[0.8] flex items-center justify-center gap-1.5 px-3 py-3 bg-[#c9a96e] hover:bg-[#a87d4d] text-white rounded-lg font-semibold transition-all text-xs sm:text-sm">
              <ShoppingCart size={15} /> <span>Add to Cart</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-3 border-2 border-[#c9a96e] rounded-lg text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white font-semibold bg-white transition-all text-xs sm:text-sm">
              <MessageCircle size={15} /> <span>Make an Offer</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-3 bg-[#c9a96e] hover:bg-[#a87d4d] text-white rounded-lg font-semibold transition-all text-xs sm:text-sm">
              <CreditCard size={15} /> <span>Buy Now</span>
            </button>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 sm:gap-3 bg-slate-50/50 p-1.5 rounded-xl border border-slate-200 overflow-x-auto">
              <button 
                onClick={() => setTab('about')} 
                className={`
                  relative px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap rounded-lg
                  transition-all duration-300 ease-in-out
                  ${tab === 'about' 
                    ? 'bg-white text-[#c9a96e] shadow-md shadow-[#c9a96e]/10 border border-[#c9a96e]/20' 
                    : 'text-slate-600 hover:text-[#c9a96e] hover:bg-white/50'
                  }
                `}
              >
                <span className="relative z-10">About the Artwork</span>
                {tab === 'about' && (
                  <span className="absolute inset-0 bg-gradient-to-r from-[#c9a96e]/5 via-[#d4af7a]/5 to-[#c9a96e]/5 rounded-lg animate-pulse"></span>
                )}
              </button>
              
              <button 
                onClick={() => setTab('artist')} 
                className={`
                  relative px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap rounded-lg
                  transition-all duration-300 ease-in-out
                  ${tab === 'artist' 
                    ? 'bg-white text-[#c9a96e] shadow-md shadow-[#c9a96e]/10 border border-[#c9a96e]/20' 
                    : 'text-slate-600 hover:text-[#c9a96e] hover:bg-white/50'
                  }
                `}
              >
                <span className="relative z-10">Artist Bio</span>
                {tab === 'artist' && (
                  <span className="absolute inset-0 bg-gradient-to-r from-[#c9a96e]/5 via-[#d4af7a]/5 to-[#c9a96e]/5 rounded-lg animate-pulse"></span>
                )}
              </button>
              
              <button 
                onClick={() => setTab('shipping')} 
                className={`
                  relative px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap rounded-lg
                  transition-all duration-300 ease-in-out
                  ${tab === 'shipping' 
                    ? 'bg-white text-[#c9a96e] shadow-md shadow-[#c9a96e]/10 border border-[#c9a96e]/20' 
                    : 'text-slate-600 hover:text-[#c9a96e] hover:bg-white/50'
                  }
                `}
              >
                <span className="relative z-10">Shipping & Returns</span>
                {tab === 'shipping' && (
                  <span className="absolute inset-0 bg-gradient-to-r from-[#c9a96e]/5 via-[#d4af7a]/5 to-[#c9a96e]/5 rounded-lg animate-pulse"></span>
                )}
              </button>
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
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    {/* Section Header with Gradient */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="relative overflow-hidden flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-[#c9a96e]/10 via-[#c9a96e]/5 to-transparent rounded-2xl border border-[#c9a96e]/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#c9a96e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                          Shipping & Returns Policy
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">Worldwide delivery with care</p>
                      </div>
                      <motion.span 
                        animate={{ 
                          scale: [1, 1.05, 1],
                          boxShadow: [
                            "0 0 0 0 rgba(34, 197, 94, 0)",
                            "0 0 0 4px rgba(34, 197, 94, 0.1)",
                            "0 0 0 0 rgba(34, 197, 94, 0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg"
                      >
                        ✓ Free Shipping Included
                      </motion.span>
                    </motion.div>

                    {/* Delivery Time Section */}
                    <motion.div 
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ 
                        scale: 1.03, 
                        y: -5,
                        boxShadow: "0 20px 40px -10px rgba(201, 169, 110, 0.3)",
                        borderColor: "rgba(201, 169, 110, 0.6)"
                      }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="group relative overflow-hidden flex items-start gap-4 p-6 bg-gradient-to-br from-[#c9a96e]/5 via-white to-[#c9a96e]/10 rounded-2xl border-2 border-[#c9a96e]/20 cursor-pointer shadow-md hover:shadow-2xl"
                    >
                      {/* Animated Background Gradient */}
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.3, 0.2]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#c9a96e]/20 to-[#d4af7a]/20 rounded-full blur-3xl -z-0"
                      ></motion.div>
                      
                      {/* Icon with Pulse Animation */}
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="relative flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#c9a96e] via-[#b8935f] to-[#c9a96e] rounded-2xl flex items-center justify-center shadow-xl"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-[#d4af7a] rounded-2xl opacity-30"
                        ></motion.div>
                        <Clock className="w-7 h-7 text-white relative z-10" />
                      </motion.div>
                      
                      <div className="relative flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <h4 className="font-bold text-slate-900 text-lg">Delivery Timeline</h4>
                          <motion.span 
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="px-2.5 py-1 bg-gradient-to-r from-[#c9a96e] to-[#b8935f] text-white text-[10px] font-bold rounded-full shadow-md"
                          >
                            ⚡ FAST
                          </motion.span>
                        </div>
                        <div className="space-y-2.5">
                          <motion.div 
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-3 bg-white backdrop-blur-sm p-3 rounded-xl shadow-sm border border-[#c9a96e]/30"
                          >
                            <MapPin className="w-5 h-5 text-[#c9a96e] flex-shrink-0" />
                            <div className="flex-1">
                              <span className="font-semibold text-slate-900 text-sm block">Domestic Shipping</span>
                              <p className="text-xs text-slate-600">5-7 business days</p>
                            </div>
                          </motion.div>
                          <motion.div 
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-3 bg-white backdrop-blur-sm p-3 rounded-xl shadow-sm border border-[#c9a96e]/30"
                          >
                            <Globe className="w-5 h-5 text-[#c9a96e] flex-shrink-0" />
                            <div className="flex-1">
                              <span className="font-semibold text-slate-900 text-sm block">International Shipping</span>
                              <p className="text-xs text-slate-600">10-20 business days (varies by country)</p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Delivery Cost Section */}
                    <motion.div 
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      whileHover={{ 
                        scale: 1.03, 
                        y: -5,
                        boxShadow: "0 20px 40px -10px rgba(201, 169, 110, 0.3)",
                        borderColor: "rgba(201, 169, 110, 0.6)"
                      }}
                      className="group relative overflow-hidden flex items-start gap-4 p-6 bg-gradient-to-br from-white via-[#c9a96e]/5 to-white rounded-2xl border-2 border-[#c9a96e]/20 cursor-pointer shadow-md hover:shadow-2xl"
                    >
                      {/* Animated Background */}
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.3, 0.2]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#c9a96e]/20 to-[#d4af7a]/20 rounded-full blur-3xl -z-0"
                      ></motion.div>
                      
                      {/* Icon */}
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="relative flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#c9a96e] via-[#b8935f] to-[#c9a96e] rounded-2xl flex items-center justify-center shadow-xl"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                          className="absolute inset-0 bg-[#d4af7a] rounded-2xl opacity-30"
                        ></motion.div>
                        <Package className="w-7 h-7 text-white relative z-10" />
                      </motion.div>
                      
                      <div className="relative flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <h4 className="font-bold text-slate-900 text-lg">Shipping Cost</h4>
                          <motion.span 
                            animate={{ 
                              scale: [1, 1.1, 1],
                              boxShadow: [
                                "0 0 0 0 rgba(34, 197, 94, 0)",
                                "0 0 0 4px rgba(34, 197, 94, 0.2)",
                                "0 0 0 0 rgba(34, 197, 94, 0)"
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="px-2.5 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-[10px] font-bold rounded-full shadow-md"
                          >
                            🎁 FREE
                          </motion.span>
                        </div>
                        <div className="space-y-2">
                          <motion.div 
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-2 bg-white backdrop-blur-sm p-3 rounded-xl shadow-sm border border-[#c9a96e]/30"
                          >
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-slate-700"><strong className="text-green-700">Free shipping</strong> included in artwork price</p>
                          </motion.div>
                          <motion.div 
                            whileHover={{ x: 5 }}
                            className="flex items-start gap-2 bg-white backdrop-blur-sm p-3 rounded-xl shadow-sm border border-[#c9a96e]/30"
                          >
                            <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-slate-700">Custom duties, octroi & taxes are <strong>customer's responsibility</strong></p>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Returns Policy Section */}
                    <motion.div 
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      whileHover={{ 
                        scale: 1.03, 
                        y: -5,
                        boxShadow: "0 20px 40px -10px rgba(201, 169, 110, 0.3)",
                        borderColor: "rgba(201, 169, 110, 0.6)"
                      }}
                      className="group relative overflow-hidden flex items-start gap-4 p-6 bg-gradient-to-br from-[#c9a96e]/5 via-white to-[#c9a96e]/10 rounded-2xl border-2 border-[#c9a96e]/20 cursor-pointer shadow-md hover:shadow-2xl"
                    >
                      {/* Animated Background */}
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.3, 0.2]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#c9a96e]/20 to-[#d4af7a]/20 rounded-full blur-3xl -z-0"
                      ></motion.div>
                      
                      {/* Rotating Icon */}
                      <motion.div 
                        whileHover={{ rotate: 180, scale: 1.1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="relative flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#c9a96e] via-[#b8935f] to-[#c9a96e] rounded-2xl flex items-center justify-center shadow-xl"
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="absolute inset-0 bg-[#d4af7a] rounded-2xl opacity-30"
                        ></motion.div>
                        <RefreshCw className="w-7 h-7 text-white relative z-10" />
                      </motion.div>
                      
                      <div className="relative flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <h4 className="font-bold text-slate-900 text-lg">Returns Policy</h4>
                          <motion.span 
                            animate={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="px-2.5 py-1 bg-gradient-to-r from-red-600 to-rose-600 text-white text-[10px] font-bold rounded-full shadow-md"
                          >
                            ⏱️ 24H
                          </motion.span>
                        </div>
                        <div className="space-y-2">
                          <motion.p 
                            whileHover={{ x: 5 }}
                            className="text-sm text-slate-700 bg-white backdrop-blur-sm p-3 rounded-xl shadow-sm border border-[#c9a96e]/30"
                          >
                            <strong className="text-[#c9a96e]">24-hour window</strong> from delivery receipt
                          </motion.p>
                          <motion.p 
                            whileHover={{ x: 5 }}
                            className="text-sm text-slate-700 bg-white backdrop-blur-sm p-3 rounded-xl shadow-sm border border-[#c9a96e]/30"
                          >
                            Returns accepted <strong>only if artwork is damaged</strong>
                          </motion.p>
                          <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="mt-2 px-4 py-3 bg-gradient-to-r from-white to-[#c9a96e]/10 backdrop-blur-sm rounded-xl border-2 border-[#c9a96e]/30 shadow-sm"
                          >
                            <p className="text-xs text-slate-700">
                              <span className="text-lg">⚠️</span> <strong className="text-[#c9a96e]">Note:</strong> Commissioned/custom orders are <strong className="text-red-700">non-returnable</strong>
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Premium Protection Section */}
                    <motion.div 
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      whileHover={{ 
                        scale: 1.03, 
                        y: -5,
                        boxShadow: "0 20px 40px -10px rgba(201, 169, 110, 0.3)",
                        borderColor: "rgba(201, 169, 110, 0.6)"
                      }}
                      className="group relative overflow-hidden flex items-start gap-4 p-6 bg-gradient-to-br from-white via-[#c9a96e]/5 to-white rounded-2xl border-2 border-[#c9a96e]/20 cursor-pointer shadow-md hover:shadow-2xl"
                    >
                      {/* Animated Background */}
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.3, 0.2]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                        className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#c9a96e]/20 to-[#d4af7a]/20 rounded-full blur-3xl -z-0"
                      ></motion.div>
                      
                      {/* Shield Icon with Pulse */}
                      <motion.div 
                        whileHover={{ scale: 1.15 }}
                        className="relative flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#c9a96e] via-[#b8935f] to-[#c9a96e] rounded-2xl flex items-center justify-center shadow-xl"
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                          className="absolute inset-0 bg-[#d4af7a] rounded-2xl opacity-30"
                        ></motion.div>
                        <Shield className="w-7 h-7 text-white relative z-10" />
                      </motion.div>
                      
                      <div className="relative flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <h4 className="font-bold text-slate-900 text-lg">Premium Packaging</h4>
                          <motion.span 
                            animate={{ 
                              scale: [1, 1.05, 1],
                              rotate: [0, 3, -3, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="px-2.5 py-1 bg-gradient-to-r from-[#c9a96e] to-[#b8935f] text-white text-[10px] font-bold rounded-full shadow-md"
                          >
                            🛡️ INSURED
                          </motion.span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          <motion.div 
                            whileHover={{ scale: 1.05, x: 3 }}
                            className="flex items-center gap-2 bg-white backdrop-blur-sm p-3 rounded-xl shadow-sm border border-[#c9a96e]/30"
                          >
                            <motion.div 
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="w-2 h-2 bg-gradient-to-r from-[#c9a96e] to-[#d4af7a] rounded-full"
                            ></motion.div>
                            <span className="text-sm text-slate-700 font-medium">Reinforced tube packaging</span>
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.05, x: 3 }}
                            className="flex items-center gap-2 bg-white backdrop-blur-sm p-3 rounded-xl shadow-sm border border-[#c9a96e]/30"
                          >
                            <motion.div 
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                              className="w-2 h-2 bg-gradient-to-r from-[#c9a96e] to-[#d4af7a] rounded-full"
                            ></motion.div>
                            <span className="text-sm text-slate-700 font-medium">Professional framing available</span>
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.05, x: 3 }}
                            className="flex items-center gap-2 bg-white backdrop-blur-sm p-3 rounded-xl shadow-sm border border-[#c9a96e]/30"
                          >
                            <motion.div 
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                              className="w-2 h-2 bg-gradient-to-r from-[#c9a96e] to-[#d4af7a] rounded-full"
                            ></motion.div>
                            <span className="text-sm text-slate-700 font-medium">Insured delivery option</span>
                          </motion.div>
                          <motion.div 
                            whileHover={{ scale: 1.05, x: 3 }}
                            className="flex items-center gap-2 bg-white backdrop-blur-sm p-3 rounded-xl shadow-sm border border-[#c9a96e]/30"
                          >
                            <motion.div 
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                              className="w-2 h-2 bg-gradient-to-r from-[#c9a96e] to-[#d4af7a] rounded-full"
                            ></motion.div>
                            <span className="text-sm text-slate-700 font-medium">Secure bubble wrap</span>
                          </motion.div>
                        </div>
                        <motion.div 
                          whileHover={{ scale: 1.02 }}
                          className="mt-4 px-4 py-3 bg-gradient-to-r from-[#c9a96e]/10 via-white to-[#c9a96e]/10 rounded-xl border-2 border-[#c9a96e]/30 shadow-sm"
                        >
                          <p className="text-xs text-slate-700">
                            <span className="text-lg">💎</span> <strong className="text-[#c9a96e]">Premium Service:</strong> All duties & taxes calculated at checkout
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
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
