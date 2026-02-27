import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, Palette, MapPin } from 'lucide-react'

function useQuery() {
  return new URLSearchParams(window.location.search)
}

const artworks = [
  {
    id: 1,
    title: "DIVINE TUNES-1",
    image: "https://res.cloudinary.com/dp2e8mfvm/image/upload/v1753511549/kwcnlfdzx5kebvxrr1gz.jpg",
    year: "2023",
    medium: "Acrylic on Canvas",
    size: "48 x 36 inches"
  },
  {
    id: 2,
    title: "DIVINE TUNES-2",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=600&fit=crop",
    year: "2023",
    medium: "Mixed Media",
    size: "48 x 36 inches"
  },
  {
    id: 3,
    title: "DIVINE TUNES-3",
    image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=800&h=600&fit=crop",
    year: "2022",
    medium: "Acrylic on Canvas",
    size: "60 x 40 inches"
  },
  {
    id: 4,
    title: "DIVINE TUNES-4",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=600&fit=crop",
    year: "2023",
    medium: "Oil on Canvas",
    size: "48 x 36 inches"
  },
  {
    id: 5,
    title: "DIVINE TUNES-5",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    year: "2022",
    medium: "Acrylic on Canvas",
    size: "52 x 40 inches"
  },
  {
    id: 6,
    title: "DIVINE TUNES-6",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop",
    year: "2023",
    medium: "Mixed Media",
    size: "48 x 36 inches"
  },
  {
    id: 7,
    title: "DIVINE TUNES-7",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&h=600&fit=crop",
    year: "2022",
    medium: "Acrylic on Canvas",
    size: "48 x 36 inches"
  },
  {
    id: 8,
    title: "DIVINE TUNES-8",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
    year: "2023",
    medium: "Oil on Canvas",
    size: "60 x 48 inches"
  }
]

export default function ArtistPage() {
  const q = useQuery()
  const name = q.get('name') || 'Pradip Sarkar'
  const image = q.get('image') || 'https://res.cloudinary.com/dp2e8mfvm/image/upload/v1753511549/kwcnlfdzx5kebvxrr1gz.jpg'
  const location = q.get('location') || 'Mumbai, India'
  const [selectedArtwork, setSelectedArtwork] = useState(null)

  return (
    <div className="artist-page min-h-screen bg-gallery-bg py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => window.history.back()} 
          className="mb-8 flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-slate-700 hover:text-slate-900 font-medium border border-slate-200"
        >
          ← Back
        </motion.button>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Artist Image */}
            <div className="lg:col-span-2 bg-gradient-to-br from-red-50 to-orange-50 p-8 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl blur-3xl"></div>
                <img 
                  src={image} 
                  alt={name} 
                  className="relative w-full max-w-md h-auto aspect-square rounded-2xl object-cover ring-8 ring-white shadow-2xl hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>

            {/* Artist Info */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="font-serif text-5xl md:text-6xl text-slate-900 mb-3 font-extrabold">{name}</h1>
                <div className="flex items-center gap-2 text-slate-600 mb-6">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{location}</span>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700">Geometric Abstraction</span>
                  <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700">Contemporary Art</span>
                  <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700">70+ Exhibitions</span>
                </div>

                <p className="text-slate-700 leading-relaxed text-lg">
                  PRADIP was born in Dhanbad state of Jharkhand, India. He is a commerce graduate from Ranchi University and holds a diploma in fine art from the British Institute, Mumbai. Pradip is a gifted artist and a well-known face in the Indian contemporary art world since 1995, with over 70 exhibitions at significant venues.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Artist Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Main Biography */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-slate-700" />
              <h2 className="font-serif text-3xl font-extrabold text-slate-900">Biography</h2>
            </div>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>PRADIP SARKAR</strong> is an eminent artist of international repute whose geometric abstraction masterpieces adorn many corporate houses in India and abroad and whose works are included in numerous prestigious collections such as Lalit Kala Akademi.
              </p>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                Pradip's palette is warm, inviting and vibrantly expressive; his brush strokes speak of serenity and a characteristic dynamism that reflects a frenetic pace and the multitude of life's elements. Working with themes of contemporary life, he focuses on spiritual and cultural aspects of society. His work typically reflects his philosophy of life, his learning, and his leanings towards music and harmony; observation becomes the subject of his canvases as he composes layered geometric boxed forms.
              </p>
              
              <blockquote className="border-l-4 border-slate-900 pl-6 my-6 italic text-slate-800">
                "Art is the expression of my life story; it allows me to share what I have learned through experience and observation."
              </blockquote>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                For him, art is divine — his love for music and harmony reveals itself in his works. He believes music is an agreeable harmony for the honour of God and a permissible delight of the soul. Mostly his work is figurative abstraction, saturated with many shades and illuminated palettes within intricate geometric boxed and paper-curving forms.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                His works are in collections across Germany, the USA, Dubai and India, and in many corporate and institutional collections including Lalit Kala Akademi and IIT/ISM Dhanbad. Pradip presently lives and works in Mumbai, Maharashtra, India.
              </p>
            </div>
          </motion.div>

          {/* Sidebar - Awards & Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Awards */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-amber-600" />
                <h3 className="font-serif text-2xl font-extrabold text-slate-900">Awards & Honors</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-slate-700 text-sm leading-relaxed pb-3 border-b border-slate-100">
                  Lalit Kala Akademi Recognition
                </li>
                <li className="text-slate-700 text-sm leading-relaxed pb-3 border-b border-slate-100">
                  International Contemporary Artist Award
                </li>
                <li className="text-slate-700 text-sm leading-relaxed">
                  Multiple prestigious titles and honors
                </li>
              </ul>
            </div>

            {/* Collections */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-6 h-6 text-purple-600" />
                <h3 className="font-serif text-2xl font-extrabold text-slate-900">Collections</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-slate-700 text-sm leading-relaxed pb-3 border-b border-slate-100">
                  Lalit Kala Akademi, India
                </li>
                <li className="text-slate-700 text-sm leading-relaxed pb-3 border-b border-slate-100">
                  IIT/ISM Dhanbad
                </li>
                <li className="text-slate-700 text-sm leading-relaxed pb-3 border-b border-slate-100">
                  Corporate Collections: Germany, USA, Dubai
                </li>
                <li className="text-slate-700 text-sm leading-relaxed">
                  Private Collections Worldwide
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Featured Series - Divine Tunes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">DIVINE TUNES Series</h2>
          <p className="text-slate-700 leading-relaxed mb-8 max-w-4xl">
            His recent series titled <em className="font-semibold">DIVINE TUNES</em> is a saga of urgency and emotion; love, affection, innocence, bonding and festivity lie at the root of these sonatas. His imagery blends vedic meditation and precepts of self-control, connecting the individual soul with the universal spirit.
          </p>

          {/* Artworks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artworks.map((artwork, index) => (
              <motion.div 
                key={artwork.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-slate-900 mb-1">{artwork.title}</h4>
                  <p className="text-xs text-slate-600 mb-1">{artwork.year}</p>
                  <p className="text-xs text-slate-500 mb-1">{artwork.medium}</p>
                  <p className="text-xs text-slate-500">{artwork.size}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Artist Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center border border-slate-200"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Artist's Philosophy</h2>
          <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mx-auto">
            "Pradip firmly believes every human is a unique creation — the spiritual domain surrounding humanity is his source of inspiration. The voices, emotions, joys and sorrows of people drive his work and provide a continued impetus for creation. Ultimately, art itself is the final message."
          </p>
        </motion.div>

      </div>
      
      {/* Artwork Modal */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <img 
                src={selectedArtwork.image} 
                alt={selectedArtwork.title} 
                className="w-full h-full object-cover"
              />
              <div className="p-8">
                <h3 className="font-serif text-3xl font-bold text-slate-900 mb-4">{selectedArtwork.title}</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-slate-700"><strong>Year:</strong> {selectedArtwork.year}</p>
                  <p className="text-slate-700"><strong>Medium:</strong> {selectedArtwork.medium}</p>
                  <p className="text-slate-700"><strong>Size:</strong> {selectedArtwork.size}</p>
                </div>
                <button 
                  onClick={() => setSelectedArtwork(null)}
                  className="w-full px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
