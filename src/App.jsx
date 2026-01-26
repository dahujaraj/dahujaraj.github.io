import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Events from './components/Events'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonials from "./components/Testimonials"

import { useRef } from 'react'
export default function App(){
     const galleryRef = useRef(null)

  const openGallery = (start,end) => {
    galleryRef.current.openByRange(start, end)
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })
  }

    
    return(<div className="font-body"><Header/><Hero/><About/><Gallery ref={galleryRef} /><Events openGallery={openGallery} /><Testimonials /> <Contact/><Footer/></div>)}