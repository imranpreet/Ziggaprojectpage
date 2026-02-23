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
    <section ref={ref} className="mt-6 bg-white p-6 rounded-lg border border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1 flex flex-col items-center md:sticky md:top-28 self-start">
          <img src="https://res.cloudinary.com/dp2e8mfvm/image/upload/v1753511549/kwcnlfdzx5kebvxrr1gz.jpg" alt="Pradip Sarkar" className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-xl ring-4 ring-white/90 border border-slate-200 hover:scale-105 transition-transform" />
          <div className="mt-4 text-center">
            <div className="font-semibold text-lg text-slate-900">Pradip Sarkar</div>
            <div className="text-sm text-slate-600">Geometric Abstraction</div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h2 className="section-title">Artist Saga</h2>
          <div className="section-sub">A short overview of the artist's themes and practice</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.12 } },
                }}
                className="p-4 rounded-lg border border-slate-100 bg-white"
              >
                <div className="text-lg font-semibold text-slate-900">{it.title}</div>
                <div className="mt-2 text-slate-700 text-sm">{it.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold text-lg text-slate-900">Shipping & Returns</h3>

          <div className="mt-3">
            <ReadMore collapsedHeight={86} className="text-sm text-slate-700 space-y-3">
              <div>
                <strong>Delivery Time:</strong> It takes 5–7 working days for domestic shipments, 10–20 working days for international shipments depending upon the country.
              </div>

              <div>
                <strong>Delivery Cost:</strong> Only Shipping fee is included in the price of the Artwork. Custom Duties, Octroi and Taxes will be borne by the Customer.
              </div>

              <div>
                <strong>Returns:</strong> Return will be accepted within 24 hours of receipt of artwork, only if artwork is found damaged (except order made on commission).
              </div>
            </ReadMore>
          </div>

        <div className="mt-6">
          <h4 className="font-semibold text-base text-slate-900">OTHER ARTWORKS FROM PRADIP SARKAR</h4>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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

        <div className="mt-6">
          <h4 className="font-semibold text-base text-slate-900">ARTWORKS FROM OTHER ARTIST'S</h4>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
      </div>
    </section>
  )
}
