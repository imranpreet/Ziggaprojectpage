import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Sparkles, Award } from 'lucide-react'

export default function ArtistCardMini({ name = 'Pradip Sarkar', image = '', location = 'Mumbai, India' }) {
  const params = new URLSearchParams({ name, image, location })
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group bg-gradient-to-br from-white via-slate-50 to-white p-8 rounded-3xl border-2 border-slate-200 shadow-xl hover:shadow-2xl hover:border-amber-200 transition-all duration-500 overflow-hidden cursor-pointer"
    >
      {/* Animated gradient overlays - More visible */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-200 via-yellow-100 to-transparent opacity-50 rounded-full blur-3xl group-hover:opacity-90 group-hover:scale-125 transition-all duration-700"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-amber-200 to-transparent opacity-40 rounded-full blur-2xl group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"></div>
      
      {/* Shimmer effect on hover - More prominent */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
      
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
      
      <div className="relative flex items-start gap-6">
        {/* Artist Image - Square with animations */}
        <motion.div 
          className="relative flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {/* Animated gradient ring - More visible */}
          <div className="absolute -inset-3 bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
          
          <div className="relative w-36 h-36 rounded-2xl overflow-hidden ring-4 ring-white shadow-2xl group-hover:ring-amber-200">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2" 
            />
            {/* Overlay gradient on image - More visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Animated Badge - More prominent */}
          <motion.div 
            className="absolute -bottom-3 -right-3 bg-gradient-to-r from-amber-600 to-yellow-600 p-2.5 rounded-xl shadow-2xl"
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2
            }}
            whileHover={{ scale: 1.2, rotate: 180 }}
          >
            <Sparkles className="w-5 h-5 text-white drop-shadow-lg" />
          </motion.div>
        </motion.div>
        
        {/* Artist Info */}
        <div className="flex-1 min-w-0">
          <motion.h4 
            className="text-2xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-amber-600 group-hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            whileHover={{ x: 5 }}
          >
            {name}
          </motion.h4>
          
          <motion.div 
            className="flex items-center gap-2 text-slate-600 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <MapPin className="w-5 h-5 text-amber-600 group-hover:scale-125 transition-transform" />
            </motion.div>
            <span className="text-sm font-semibold">{location}</span>
          </motion.div>
          
          <motion.div
            className="flex items-center gap-2 mb-4 bg-amber-50 px-3 py-2 rounded-lg group-hover:bg-amber-100 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Award className="w-5 h-5 text-amber-600" />
            </motion.div>
            <span className="text-sm text-slate-700 font-bold">70+ International Exhibitions</span>
          </motion.div>
          
          <motion.p 
            className="text-sm text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Contemporary artist specializing in geometric abstraction
          </motion.p>
          
          {/* Action Button with enhanced animations */}
          <motion.button 
            onClick={() => { window.location.href = `/artist?${params.toString()}` }} 
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-600 via-yellow-500 to-yellow-600 text-white rounded-xl text-sm font-bold shadow-xl hover:shadow-2xl hover:from-amber-700 hover:via-yellow-600 hover:to-yellow-700 transition-all duration-300 group/btn relative overflow-hidden border-2 border-transparent hover:border-white"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            {/* Button shimmer effect - More visible */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
            
            {/* Pulsing background */}
            <motion.span 
              className="absolute inset-0 bg-white/20 rounded-xl"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <span className="relative font-bold text-base">Explore Profile</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 relative group-hover/btn:translate-x-2 transition-transform duration-300" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
