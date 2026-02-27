import React from 'react';
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import CollageGallery from './CollageGallery'

const sample = [
  { id: 1, title: 'Tune Of Bengal — 4', artist: 'Sekhar Roy', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200&auto=format', price: '₹45,000' },
  { id: 2, title: 'Ocean Of Dreams', artist: 'Uttam Bhattacharya', image: 'https://images.unsplash.com/photo-1551913902-c92207136625?q=80&w=1200&auto=format', price: '₹38,000' },
  { id: 3, title: 'Eternal Grace', artist: 'Priyanka Bardhan', image: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?q=80&w=1200&auto=format', price: '₹55,000' },
  { id: 4, title: 'Inner Peace 6', artist: 'Monalisa Sarkar Mitra', image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1200&auto=format', price: '₹29,500' },
]

const container = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function FeaturedArtworks() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container">
        <h3 className="section-title">Featured Artworks</h3>
        <div className="section-sub">Hand-picked works from our collection</div>

        <CollageGallery image={sample[0].image} thumbCount={6} />

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="masonry">
          {sample.map((a, i) => {
            const variant = i % 2 === 0 ? 'tall' : 'short'
            return (
              <motion.div key={a.id} variants={item} className="masonry-item enter-soft">
                <ProductCard title={a.title} artist={a.artist} image={a.image} price={a.price} href="#" variant={variant} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
