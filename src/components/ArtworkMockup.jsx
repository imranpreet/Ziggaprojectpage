import React from 'react'

// Component to show artwork in different display settings
export default function ArtworkMockup({ artworkSrc, type = 'wall' }) {
  
  const mockups = {
    wall: {
      background: 'linear-gradient(135deg, #e0e7ff 0%, #cffafe 100%)',
      containerClass: 'relative w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-6',
      frameClass: 'relative bg-white p-1 sm:p-2 md:p-3 shadow-2xl border-2 sm:border-4 border-white',
      artworkClass: 'w-full h-full object-cover',
      label: 'Wall Mounted',
      labelColor: 'bg-blue-100 text-blue-700'
    },
    table: {
      background: 'linear-gradient(135deg, #fef3c7 0%, #fecaca 100%)',
      containerClass: 'relative w-full h-full flex items-end justify-center pb-3 sm:pb-6 md:pb-8',
      frameClass: 'relative bg-white p-1 sm:p-2 md:p-3 shadow-xl border-2 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-300',
      artworkClass: 'w-full h-full object-cover',
      label: 'Table Display',
      labelColor: 'bg-amber-100 text-amber-700'
    },
    studio: {
      background: 'linear-gradient(135deg, #ddd6fe 0%, #fbcfe8 100%)',
      containerClass: 'relative w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-6',
      frameClass: 'relative bg-white p-1 sm:p-2 md:p-3 shadow-2xl border-2 sm:border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300',
      artworkClass: 'w-full h-full object-cover',
      label: 'Studio Setup',
      labelColor: 'bg-purple-100 text-purple-700'
    }
  }

  const currentMockup = mockups[type] || mockups.wall

  return (
    <div 
      className="relative w-full h-full rounded-lg overflow-hidden"
      style={{ background: currentMockup.background }}
    >
      <div className={currentMockup.containerClass}>
        <div className={currentMockup.frameClass}>
          <img 
            src={artworkSrc} 
            alt={`Artwork - ${currentMockup.label}`}
            className={currentMockup.artworkClass}
          />
        </div>
      </div>
      
      {/* Label Badge */}
      <div className={`absolute top-1 right-1 sm:top-2 sm:right-2 ${currentMockup.labelColor} backdrop-blur-sm px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md text-[10px] sm:text-xs font-medium shadow-sm`}>
        {currentMockup.label}
      </div>
    </div>
  )}