import React, { useState, useMemo, forwardRef, useImperativeHandle } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

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

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-black">
      <h2 className="text-center font-display text-3xl sm:text-4xl text-royal mb-10">
        Gallery
      </h2>

      {/* MAIN CAROUSEL (unmounted when lightbox open) */}
      {lightboxIndex === null && (
        <div className="max-w-5xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            lazy={{ loadPrevNext: true, loadOnTransitionStart: true }}
            preloadImages={false}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  className="w-full h-64 sm:h-[420px] object-cover rounded-xl cursor-pointer"
                  onClick={() => {
                    setRange({ start: 0, end: images.length - 1 })
                    setLightboxIndex(index)
                  }}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            className="absolute top-5 right-5 text-royal text-3xl"
            onClick={() => setLightboxIndex(null)}
          >
            ×
          </button>

          <div className="w-full max-w-6xl px-4">
            <Swiper
              modules={[Navigation]}
            navigation
            initialSlide={lightboxIndex - range.start}
            loop={false}
            allowTouchMove
            className="w-full h-full"
            >
              {images.slice(range.start, range.end + 1).map((src, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={src}
                    className="w-full max-h-[85vh] object-contain rounded-lg"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  )
})

export default Gallery
