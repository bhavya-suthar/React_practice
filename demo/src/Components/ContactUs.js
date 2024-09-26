import React from 'react'
import { useTranslation } from 'react-i18next'

const ContactUs = () => {
  const {t} = useTranslation()
  return (
    <>

    <h1>{t('Contact Us')}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, magnam. Harum, cum! Natus tempore iure dolor inventore iusto, repellendus quis officia facilis adipisci quod. Repellat corporis consectetur ducimus totam, voluptatibus ipsa libero architecto quas, molestiae, rem iusto animi laudantium reprehenderit laborum sit aliquam sunt odio autem quis nisi sint. Explicabo?</p>
    </>
  )
}

export default ContactUs