import React from 'react'
import ProductDetail from './ProductDetail'
import ArtistSaga from './ArtistSaga'
import TrustBar from './TrustBar'

export default function ProductPage() {
  return (
    <div className="min-h-screen w-full bg-gallery-bg text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white rounded-md shadow-sm">
        <ProductDetail />
        <div className="mt-12 sm:mt-16">
          <TrustBar />
        </div>
        <div className="mt-20 sm:mt-28">
          <ArtistSaga />
        </div>
      </div>
    </div>
  )
}
