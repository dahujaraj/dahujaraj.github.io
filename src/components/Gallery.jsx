
import React, { useEffect,useState, useMemo, useRef,forwardRef, useImperativeHandle } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { motion, AnimatePresence } from "framer-motion"

const Gallery = forwardRef((props, ref) => {
  const IMAGE_COUNT = 129
  const IMAGE_EXT = 'jpeg'

  const images = useMemo(
    () => Array.from({ length: IMAGE_COUNT }, (_, i) => `/images/${i + 1}.${IMAGE_EXT}`),
    []
  )

  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [range, setRange] = useState({ start: 0, end: IMAGE_COUNT - 1 })

  const openByRange = (start, end) => {
    setRange({ start, end })
    setLightboxIndex(start)
  }

  useImperativeHandle(ref, () => ({ openByRange }))
const scrollRef = useRef(null)
const [activeIndex, setActiveIndex] = useState(0)

const handleScroll = () => {
  const el = scrollRef.current
  if (!el) return
  const index = Math.round(el.scrollLeft / el.clientWidth)
  setActiveIndex(index)
}

useEffect(() => {
  if (lightboxIndex !== null && scrollRef.current) {
    scrollRef.current.scrollTo({
      left: (lightboxIndex - range.start) * window.innerWidth,
      behavior: "instant",
    })
  }
}, [lightboxIndex])
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-black">
      <h2 className="text-center font-display text-3xl sm:text-4xl text-royal mb-10">
        Gallery
      </h2>

      {/* MAIN CAROUSEL */}
      {lightboxIndex === null && (
        <div className="max-w-5xl mx-auto px-4">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            preloadImages={false}
            loop
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  loading="lazy"
                  className="w-full h-64 sm:h-[420px] object-cover rounded-xl cursor-pointer"
                  onClick={() => {
                    setRange({ start: 0, end: images.length - 1 })
                    setLightboxIndex(index)
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* LIGHTBOX (no autoplay, no loop, no observers) */}
 <AnimatePresence>
  {lightboxIndex !== null && (
    <motion.div
      className="fixed inset-0 bg-black z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <button
        className="absolute top-4 right-4 text-white text-3xl z-50"
        onClick={() => setLightboxIndex(null)}
      >
        ×
      </button>

      {/* Left Arrow */}
      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 z-50 text-white text-4xl"
        onClick={() => {
          const el = scrollRef.current
          if (!el) return
          el.scrollBy({ left: -el.clientWidth, behavior: "smooth" })
        }}
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 z-50 text-white text-4xl"
        onClick={() => {
          const el = scrollRef.current
          if (!el) return
          el.scrollBy({ left: el.clientWidth, behavior: "smooth" })
        }}
      >
        ›
      </button>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto h-full snap-x snap-mandatory"
      >
        {images.slice(range.start, range.end + 1).map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full h-full flex items-center justify-center snap-center"
          >
            <motion.img
              src={src}
              loading="lazy"
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  )
})

export default Gallery