import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-royal">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3">
        <div className="font-display text-royal tracking-widest text-sm sm:text-lg">
          City Convention Centre
        </div>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex gap-6 text-sm tracking-wider font-display ">
          {links.map(l => (
            <a key={l.name} href={l.href} className="hover:text-royal transition">
              {l.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-[2px] w-6 bg-royal transition ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-[2px] w-6 bg-royal transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-[2px] w-6 bg-royal transition ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: '100vh', opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    className="sm:hidden fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 text-xl font-display tracking-widest"
  >
    {/* Close Cross */}
    <button
      onClick={() => setOpen(false)}
      className="absolute top-6 right-6 text-royal text-3xl"
    >
      ×
    </button>
            {links.map(l => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hover:text-royal transition"
              >
                {l.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
