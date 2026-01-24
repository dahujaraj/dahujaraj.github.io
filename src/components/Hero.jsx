import React ,{useState} from 'react'
import { motion } from 'framer-motion'
export default function Hero(){
    
     const [muted, setMuted] = useState(true);


    
    return(
        
    <section id="home" className="relative h-screen">
        
        <video autoPlay   muted={muted}  loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/hero.mp4" type="video/mp4"/></video>x
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4 text-center">
            <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1}}>
                <h1 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-widest">City Convention Centre</h1>
                <p className="mt-3 text-royal text-sm sm:text-lg">A Royal Destination for Timeless Celebrations</p></motion.div>
                </div>
                 {/* Mute / Unmute Icon */}
      <button
        onClick={() => setMuted(!muted)}
        className="absolute bottom-6 right-6 bg-black/60 p-3 rounded-full backdrop-blur hover:scale-105 transition"
        aria-label="Toggle sound"
      >
        {muted ? (
          // Muted icon
          <svg className="w-6 h-6 text-royal" viewBox="0 0 24 24" fill="currentColor">
  <path d="M3 10v4h4l5 5V5L7 10H3z"/>
  <path d="M14.5 12c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03z"/>
  <path d="M17 12c0 2.5-1.5 4.71-3.67 5.66l-.83-1.44C14.1 15.36 15 13.78 15 12s-.9-3.36-2.5-4.22l.83-1.44C15.5 7.29 17 9.5 17 12z"/>
  <line
    x1="2"
    y1="2"
    x2="22"
    y2="22"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  />
</svg>



        ) : (
          // Sound on icon
         <svg className="w-6 h-6 text-royal" viewBox="0 0 24 24" fill="currentColor">
  <path d="M3 10v4h4l5 5V5L7 10H3z"/>
  <path d="M14.5 12c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03z"/>
  <path d="M17 12c0 2.5-1.5 4.71-3.67 5.66l-.83-1.44C14.1 15.36 15 13.78 15 12s-.9-3.36-2.5-4.22l.83-1.44C15.5 7.29 17 9.5 17 12z"/>
</svg>
        )}
      </button>
                </section>)}