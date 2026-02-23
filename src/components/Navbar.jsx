import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/artworks', label: 'Artworks' },
  { href: '/about', label: 'About' },
  { href: '/product', label: 'Product' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`w-full py-4 transition-all duration-300 z-50 ${scrolled ? 'backdrop-blur-md bg-white/6 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between">
        <a href="/" className="font-serif text-lg sm:text-xl text-gallery-dark tracking-[0.08em]">Zigguratss</a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-sans text-sm text-gallery-muted hover:text-gallery-accent transition-colors">
              {l.label}
            </a>
          ))}
          <a href="/signup" className="px-4 py-2 bg-gallery-accent text-gallery-dark text-sm font-semibold rounded-md ml-2">Join</a>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="w-10 h-10 flex items-center justify-center rounded-md border border-white/10 bg-white/3 backdrop-blur-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <motion.path
                animate={open ? { d: 'M6 18L18 6M6 6l12 12' } : { d: 'M4 7h16M4 12h16M4 17h16' }}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="absolute top-16 left-1/2 -translate-x-1/2 w-11/12 max-w-md bg-white/5 backdrop-blur-lg rounded-xl shadow-xl p-6"
            >
              <div className="flex flex-col gap-4">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-sans text-base text-gallery-dark hover:text-gallery-accent">
                    {l.label}
                  </a>
                ))}
                <a href="/signup" onClick={() => setOpen(false)} className="mt-2 inline-block px-4 py-2 bg-gallery-accent text-gallery-dark text-sm font-semibold rounded-md">Join</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
