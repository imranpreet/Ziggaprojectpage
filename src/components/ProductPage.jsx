import React from 'react'
import ProductDetail from './ProductDetail'
import ArtistSaga from './ArtistSaga'
import TrustBar from './TrustBar'

export default function ProductPage() {
  return (
    <div className="min-h-screen w-full bg-gallery-bg text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white rounded-md shadow-sm">
        <ProductDetail />
        <div className="mt-16">
          <TrustBar />
        </div>
        <div className="mt-28">
          <ArtistSaga />
        </div>
      </div>
    </div>
  )
}
