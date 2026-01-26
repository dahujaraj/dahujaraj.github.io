export default function Testimonials() {
  const testimonials = [
    {
      name: "Mahesh Goel",
      text: `✨ An Evening at The Green Pearl – Where Beauty Meets Excellence ✨

Attending the program at The Green Pearl, nestled beside the stunning Aquariune Swimming Pool at City Convention, Dehradun Road, Saharanpur, was truly a delightful experience.

The venue radiates elegance and serenity—lush green surroundings, tastefully designed spaces, and a beautifully maintained ambience that instantly elevates any gathering. The soothing blend of nature and modern architecture creates a perfect setting for music, celebrations, and meaningful moments.

From the immaculate arrangements to the warm, welcoming atmosphere, every corner reflects class, refinement, and attention to detail. It is a place where good vibes flow effortlessly, conversations feel richer, and memories are made naturally.

Indeed, The Green Pearl stands out as a venue of exceptional beauty and excellence—perfect for celebrations that deserve nothing but the best ✨🥂🎶`,
    },
    {
      name: "Raj Khanna",
      text: "An excellent venue for parties and functions! The banquet hall is well designed, the party lawns are huge and very well kept, and the swimming pool adds a resort-like charm. The ambience is pleasant and lively at the same time, making it perfect for weddings, receptions, and family events. Highly recommended for memorable celebrations.",
    },
    {
      name: "Navjote Cheema",
      text: "Very spacious mansion like resort  beautifully maintained. Exquisite decor of Halls. Tastefully designed rooms with all facilities in perfect working condition. Lush green lawns with intricate pottery and plants. Had a comfortable stay and enjoyed variety of food and drinks.",
    },{
        name:"Sangita Chugh",
        text:"Had an opportunity to attend wedding reception  and was awestruck by the beauty and ambience of the resort like Palace . Easily accessible, spacious lawns, excellent hospitality, delicious and yummy food, ample parking space, clean and well planned rooms and washrooms and much more.Want to visit again ."
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-black">
      <h2 className="text-center font-display text-3xl sm:text-4xl text-royal mb-12">
        What Our Visitors Say
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#111] border border-royal/30 rounded-xl p-6 shadow-lg hover:shadow-2xl transition"
          >  <div aria-label="5 star rating" class=" text-royal text-xl">
  ★★★★★
</div>
            <p className="text-gray-300 italic leading-relaxed mb-4">
              “{t.text}”
            </p>
            <div className="mt-4">
              <p className="text-royal font-semibold">{t.name}</p>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
