import React,{useState} from 'react'
import InstagramEmbed from './InstagramEmbed'



export default function Contact(){
  
    const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
  e.preventDefault()
  const form = e.target

  const formData = new FormData(form)
  const encoded = new URLSearchParams(formData).toString()

  await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encoded,
  })

  alert("Form submitted successfully")
  form.reset()
}
  return(<section id="contact" className="py-16 sm:py-24 bg-[#120f0c]">
    <h2 className="font-display text-3xl sm:text-4xl text-royal mb-6 text-center">
Contact Us      </h2>

    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-1">

<form
  name="event-enquiry"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
          action="/"

>
  <input type="hidden" name="form-name" value="event-enquiry" />
  <input type="hidden" name="bot-field" />

  <input name="fullName" placeholder="Full Name" className="col-span-1 p-3 bg-black border border-royal rounded" required />
  <input type="tel" name="phone" placeholder="Phone Number" className="col-span-1 p-3 bg-black border border-royal rounded" required />

  <input type="email" name="email" placeholder="Email Address" className="col-span-1 p-3 bg-black border border-royal rounded" required />
  <select name="eventType" className="col-span-1 p-3 bg-black border border-royal rounded">
    <option>Event Type</option>
    <option>Wedding</option>
    <option>Corporate Meeting</option>
    <option>Birthday / Social</option>
    <option>Exhibition</option>
    <option>Other</option>
  </select>

  <input type="number" name="guestCount" placeholder="Estimated Guest Count" className="col-span-1 p-3 bg-black border border-royal rounded" />
  <select name="venue" className="col-span-1 p-3 bg-black border border-royal rounded">
    <option>Preferred Venue</option>
    <option>Grand Ballroom</option>
    <option>Emerald Hall</option>
    <option>Crystal Hall</option>
    <option>The Gardens</option>
    <option>Poolside</option>
    <option>Terrace Lounge</option>
  </select>

  <input type="date" name="eventDate" className="col-span-1 p-3 bg-black border border-royal rounded" />

  <select name="catering" className="col-span-1 p-3 bg-black border border-royal rounded">
    <option>Catering Preference</option>
    <option>Pure Veg</option>
    <option>Non-Veg</option>
    <option>Both</option>
  </select>

  <div className="col-span-2 text-sm space-y-2">
    <p className="text-royal">Room Requirements</p>
    <label className="mr-4"><input type="checkbox" name="rooms" value="Deluxe" /> Deluxe Rooms</label>
    <label><input type="checkbox" name="rooms" value="Suite" /> Suite Room</label>
  </div>

  <select name="decoration" className="col-span-1 p-3 bg-black border border-royal rounded">
    <option>Decoration Required?</option>
    <option>Yes</option>
    <option>No</option>
  </select>

  <input name="decorationDetails" placeholder="If yes, decoration details" className="col-span-1 p-3 bg-black border border-royal rounded" />

  <textarea name="otherRequirements" placeholder="Any other requirements" className="col-span-2 p-3 bg-black border border-royal rounded" />

  <textarea name="message" placeholder="Message / Special Requests" rows="4" className="col-span-2 p-3 bg-black border border-royal rounded" />

  <button
    type="submit"
    className="col-span-2 bg-royal text-black px-8 py-3 rounded hover:opacity-90 transition"
  >
    Request a Site Visit / Get a Quote
  </button>
</form>
 {/* <div className="col-span-2 pt-6 border-t border-royal text-center text-base sm:text-lg font-medium space-y-2">
  <p>📧 dahujaraj@gmail.com</p>
  <p>📞 +91 9837374160</p>
  <a href="https://www.instagram.com/city_convention_centre/" target="_blank">Instagram</a>
  <p> City Convention Centre, Kailashpur, Saharanpur Dehradun Highway.
</p>
</div> */}
<div className="col-span-2 flex justify-center pt-6 border-t border-royal">
  <div className="mt-12 flex flex-col items-center text-center space-y-4 max-w-xl w-full">

 <h4 className="font-display text-2xl sm:text-4xl text-royal mb-6 text-center">
Contact Details </h4>
  <p className="text-lg sm:text-xl font-medium">
    📧 <a href="mailto:dahujaraj@gmail.com" className="hover:text-royal transition">
      dahujaraj@gmail.com
    </a>
  </p>

  <p className="text-lg sm:text-xl font-medium">
    📞 <a href="tel:+919837374160" className="hover:text-royal transition">
     +91 9837374160
    </a>
  </p>
  <p className="text-lg sm:text-xl font-medium">
    📞 <a href="tel:+919259149003" className="hover:text-royal transition">
     +91 9259149003
    </a>
  </p>
  <div className="flex justify-center gap-6 mt-4">

    {/* Instagram */}
    <a
      href="https://www.instagram.com/city_convention_centre/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hover:text-royal transition"
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm4.5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.75-2.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
      </svg>
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/p/City-Convention-Centre-100089080194131/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="hover:text-royal transition"
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14.3 6h2.2v3h-2c-.8 0-1 .4-1 1v2.4h3l-.5 3h-2.5v7A10 10 0 0 0 22 12z"/>
      </svg>
    </a>

  </div>

  {/* Google Maps */}
  <p className="mt-4 text-base sm:text-lg">
    📍 <a
      href="https://maps.app.goo.gl/H4VaQ83U7VRyHCny6"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-royal transition"
    >
      City Convention Centre, Dehradun Rd, KailashPur, Saharanpur
    </a>
  </p>

</div>
</div>
 {submitted && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#111] border border-royal p-8 rounded-xl text-center">
            <h3 className="text-royal text-xl mb-2">Thank You</h3>
            <p>Your enquiry has been submitted successfully.</p>
            <button
              className="mt-4 text-royal underline"
              onClick={() => setSubmitted(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
</div></section>)}