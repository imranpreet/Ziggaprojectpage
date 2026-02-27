import React from 'react'
import ReadMore from './ReadMore'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProductCard from './ProductCard'

const items = [
  { title: 'Vedic Meditation', body: 'A contemplative practice informing rhythm and form.' },
  { title: 'Geometric Harmony', body: 'Compositions that reconcile order with organic texture.' },
  { title: 'Materiality', body: 'Acrylic layers reveal brushwork and tactile presence.' },
]

export default function ArtistSaga() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  React.useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  return (
    <section ref={ref} className="mt-6 bg-gradient-to-br from-white via-slate-50/50 to-white p-8 rounded-2xl border-2 border-slate-200 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Artist Image Section */}
        <div className="md:col-span-1 flex flex-col items-center md:sticky md:top-28 self-start">
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Animated gradient ring */}
            <div className="absolute -inset-3 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 animate-pulse transition-all duration-500"></div>
            
            <img 
              src="https://res.cloudinary.com/dp2e8mfvm/image/upload/v1753511549/kwcnlfdzx5kebvxrr1gz.jpg" 
              alt="Pradip Sarkar" 
              className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl ring-4 ring-white border-2 border-slate-200 group-hover:scale-105 transition-transform duration-500" 
            />
            
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 bg-gradient-to-r from-slate-700 to-slate-900 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Featured Artist
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="font-bold text-xl text-slate-900">Pradip Sarkar</div>
            <div className="text-sm text-slate-600 font-medium mt-1">Geometric Abstraction</div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="md:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Artist Saga
            </h2>
            <div className="text-slate-600 text-sm">A short overview of the artist's themes and practice</div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.15, type: "spring" } },
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group p-5 rounded-xl border-2 border-slate-200 bg-white hover:border-slate-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors mb-2">
                    {it.title}
                  </div>
                  <div className="text-slate-600 text-sm leading-relaxed">{it.body}</div>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-slate-100 to-transparent rounded-bl-3xl opacity-50"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Shipping & Returns Section */}
      <motion.div 
        className="mt-10 pt-8 border-t-2 border-slate-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-gradient-to-b from-slate-700 to-slate-400 rounded-full"></span>
          Shipping & Returns
        </h3>

        <div className="mt-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
          <ReadMore collapsedHeight={86} className="text-sm text-slate-700 space-y-4">
            <div className="flex gap-3">
              <span className="text-slate-900 font-semibold min-w-fit">Delivery Time:</span>
              <span>It takes 5–7 working days for domestic shipments, 10–20 working days for international shipments depending upon the country.</span>
            </div>

            <div className="flex gap-3">
              <span className="text-slate-900 font-semibold min-w-fit">Delivery Cost:</span>
              <span>Only Shipping fee is included in the price of the Artwork. Custom Duties, Octroi and Taxes will be borne by the Customer.</span>
            </div>

            <div className="flex gap-3">
              <span className="text-slate-900 font-semibold min-w-fit">Returns:</span>
              <span>Return will be accepted within 24 hours of receipt of artwork, only if artwork is found damaged (except order made on commission).</span>
            </div>
          </ReadMore>
        </div>

        {/* Other Artworks Section */}
        <div className="mt-10">
          <h4 className="font-extrabold text-2xl text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-slate-900 to-slate-400"></span>
            OTHER ARTWORKS FROM PRADIP SARKAR
          </h4>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { id: 1, title: 'Divine Tunes-11', artist: 'Pradip Sarkar', image: 'https://zigguratss.com/assets/upload/art-1155.jpg', price: '₹1,18,300' },
              { id: 2, title: 'Divine Tunes-09', artist: 'Pradip Sarkar', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200&auto=format', price: '₹98,000' },
              { id: 3, title: 'Divine Tunes-05', artist: 'Pradip Sarkar', image: 'https://images.unsplash.com/photo-1551913902-c92207136625?q=80&w=1200&auto=format', price: '₹75,000' },
              { id: 4, title: 'Divine Tunes-02', artist: 'Pradip Sarkar', image: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?q=80&w=1200&auto=format', price: '₹62,500' },
            ].map((p) => (
              <ProductCard key={p.id} title={p.title} artist={p.artist} image={p.image} price={p.price} href="#" verified={true} />
            ))}
          </div>
        </div>

        {/* Other Artists Section */}
        <div className="mt-10">
          <h4 className="font-extrabold text-2xl text-slate-900 mb-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-slate-900 to-slate-400"></span>
            ARTWORKS FROM OTHER ARTIST'S
          </h4>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { id: 'o1', title: 'Tune Of Bengal — 4', artist: 'Sekhar Roy', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200&auto=format', price: '₹45,000' },
              { id: 'o2', title: 'Ocean Of Dreams', artist: 'Uttam Bhattacharya', image: 'https://images.unsplash.com/photo-1551913902-c92207136625?q=80&w=1200&auto=format', price: '₹38,000' },
              { id: 'o3', title: 'Eternal Grace', artist: 'Priyanka Bardhan', image: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?q=80&w=1200&auto=format', price: '₹55,000' },
              { id: 'o4', title: 'Inner Peace 6', artist: 'Monalisa Sarkar Mitra', image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1200&auto=format', price: '₹29,500' },
            ].map((p) => (
              <ProductCard key={p.id} title={p.title} artist={p.artist} image={p.image} price={p.price} href="#" />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
