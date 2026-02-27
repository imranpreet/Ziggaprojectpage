import React, { useState } from 'react'
import ImageGallery from './ImageGallery'
import ProductCard from './ProductCard'

export default function HeroSplit() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div>
        <ImageGallery />
      </div>
      <aside className="relative">
        <div className="sticky top-24">
          <ProductCard />
        </div>
      </aside>
    </section>
  )
}
