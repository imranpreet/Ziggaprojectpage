import React from 'react'
import { motion } from 'framer-motion'
import ReadMore from './ReadMore'

const sectionVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ArtistBioDetailed() {
  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={sectionVariants} className="mt-10 bg-white p-6 rounded-lg border border-slate-200">
      <h3 className="font-serif text-2xl text-slate-900 mb-4">About The Artist</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <figure className="md:col-span-1 flex flex-col items-center md:sticky md:top-28 self-start">
          <img src="https://res.cloudinary.com/dp2e8mfvm/image/upload/v1753511549/kwcnlfdzx5kebvxrr1gz.jpg" alt="Pradip Sarkar" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover ring-4 ring-white/90 border border-slate-200 shadow-xl hover:scale-105 transition-transform" />

          <figcaption className="mt-4 text-center">
            <p className="font-semibold text-lg text-slate-900">Pradip Sarkar</p>
            <p className="text-sm text-slate-600">Mumbai, India</p>
            <p className="mt-2 text-xs text-slate-500">Geometric abstraction · Contemporary</p>
          </figcaption>
        </figure>

        <div className="md:col-span-2 prose prose-slate max-w-prose text-slate-700">
          <ReadMore collapsedHeight={220}>
            <p><strong>Zigguratss</strong></p>
            <p><strong>Pradip Sarkar</strong> — Mumbai, India</p>

            <p>PRADIP was born in Dhanbad state of Jharkhand, India. He is a commerce graduate from Ranchi University and holds a diploma in fine art from the British Institute, Mumbai. Pradip is a gifted artist and a well-known face in the Indian contemporary art world since 1995, with over 70 exhibitions at significant venues.</p>

            <p>PRADIP SARKAR is an eminent artist of international repute whose geometric abstraction masterpieces adorn many corporate houses in India and abroad and whose works are included in numerous prestigious collections such as Lalit Kala Akademi.</p>

            <p>Pradip's palette is warm, inviting and vibrantly expressive; his brush strokes speak of serenity and a characteristic dynamism that reflects a frenetic pace and the multitude of life's elements. Working with themes of contemporary life, he focuses on spiritual and cultural aspects of society. His work typically reflects his philosophy of life, his learning, and his leanings towards music and harmony; observation becomes the subject of his canvases as he composes layered geometric boxed forms.</p>

            <p>Pradip says, “Art is the expression of my life story; it allows me to share what I have learned through experience and observation.” For him, art is divine — his love for music and harmony reveals itself in his works.</p>

            <p>He believes music is an agreeable harmony for the honour of God and a permissible delight of the soul. Mostly his work is figurative abstraction, saturated with many shades and illuminated palettes within intricate geometric boxed and paper-curving forms. His works are in collections across Germany, the USA, Dubai and India, and in many corporate and institutional collections including Lalit Kala Akademi and IIT/ISM Dhanbad. Pradip presently lives and works in Mumbai, Maharashtra, India.</p>

            <p>Meanwhile he has been bestowed with many prizes and titles of honour. His recent series titled <em>DIVINE TUNES</em> is a saga of urgency and emotion; love, affection, innocence, bonding and festivity lie at the root of these sonatas. His imagery blends vedic meditation and precepts of self-control, connecting the individual soul with the universal spirit.</p>

            <p>Pradip firmly believes every human is a unique creation — the spiritual domain surrounding humanity is his source of inspiration. The voices, emotions, joys and sorrows of people drive his work and provide a continued impetus for creation. Ultimately, art itself is the final message.</p>
          </ReadMore>
        </div>
      </div>
    </motion.section>
  )
}
