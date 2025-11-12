import React, { useRef } from 'react'
import HeroContact from '../sections/contact/HeroContact'
import ContactForm from '../sections/contact/ContactForm'
import MapEmbed from '../sections/contact/MapEmbed'
import FAQ from '../sections/contact/FAQ'

const Contact = () => {
  const formRef = useRef(null);

  const screllForm = () => {
    formRef.current?.scrollIntoView({behavior: "smooth"});
  }
   
  return (
    <>
      <HeroContact screllForm={screllForm} />
      <ContactForm formRef={formRef} />
      <MapEmbed />
      <FAQ />
    </>
  )
}

export default Contact
