import React from 'react'
export default function Events({ openGallery }) { return (<section id="events" className="py-16 sm:py-24 max-w-6xl mx-auto px-4">
    
    
  <h3 className="font-display text-2xl sm:text-3xl text-royal mt-16 text-center">
  Where Celebrations Turn Into Cherished Legacies
</h3>

<p className="mt-6 text-center max-w-4xl mx-auto leading-relaxed text-sm sm:text-lg">
  At <strong>City Convention Centre</strong>, we believe that truly exceptional events are
  defined by seamless planning and flawless execution. Whether you are hosting a majestic
  wedding, a prestigious corporate gala, or an intimate private celebration, we offer the
  perfect harmony of refined elegance and practical luxury to bring your vision to life.
</p>

<h3 className="font-display text-2xl text-royal mt-12">
  Why Choose Us
</h3>

<ul className="mt-6 space-y-4 list-disc pl-6 text-sm sm:text-lg leading-relaxed">
  <li>
    <strong>A Proven Track Record:</strong> With over three years of successful operations and
    hundreds of premium events hosted, City Convention Centre has established itself as a
    trusted name in excellence. Our experience ensures your special occasion is handled with
    the highest level of professionalism and care.
  </li>

  <li>
    <strong>Ample On-Site Parking:</strong> Guest convenience is paramount. Our expansive,
    secure on-site parking within the premises guarantees a smooth and stress-free arrival
    experience for all your invitees.
  </li>

  <li>
    <strong>Prime Location & Elegant Design:</strong> Strategically located and thoughtfully
    designed with contemporary aesthetics, our venue offers a versatile and sophisticated
    backdrop, easily adaptable to a wide range of themes and event formats.
  </li>

  <li>
    <strong>Exceptional Service:</strong> From advanced audiovisual support to world-class
    hospitality, our dedicated team is committed to delivering impeccable service and
    flawless coordination at every stage of your event.
  </li>
</ul>

<h3 className="font-display text-2xl text-royal mt-12 text-center">
  Host Your Next Event With Us
</h3>

<p className="mt-4 text-center max-w-4xl mx-auto leading-relaxed text-sm sm:text-lg">
  Join the many distinguished clients who have chosen City Convention Centre as the city’s
  premier destination for celebrations. We do not merely host events — we curate experiences
  that leave a lasting impression and become cherished memories for a lifetime.
</p><br/> <br/>
    
    {/* <h2 className="font-display text-3xl sm:text-4xl text-royal mb-6">Events</h2> */}
    
    
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <button
          onClick={() => openGallery(69,78)}
          className="border border-royal p-6 rounded-lg hover:bg-royal hover:text-black transition font-display tracking-wide"
        >
          Green Pearl
        </button>

        <button
          onClick={() => openGallery(81,99)}
          className="border border-royal p-6 rounded-lg hover:bg-royal hover:text-black transition font-display tracking-wide"
        >
          Aquamarine Pool And Deck
        </button>

        <button
          onClick={() => openGallery(79,80)}
          className="border border-royal p-6 rounded-lg hover:bg-royal hover:text-black transition font-display tracking-wide"
        >
Rooms        </button>
      </div></section>) }