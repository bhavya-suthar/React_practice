import React from 'react'
import { useTranslation } from 'react-i18next'

const Privacy_policy = () => {
  const {t}=useTranslation()
  return (
    <>

    <h1>{t('Privacy Policy')}</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cum nulla, cumque deserunt quae, officia quis, doloremque nobis eum debitis labore tenetur earum. Voluptas corporis possimus laudantium sint voluptatum ut adipisci voluptatibus! Nihil tempore deserunt id quaerat ducimus hic, recusandae libero autem perspiciatis blanditiis consectetur quod, omnis voluptatem error corporis.</p>
    </>
  )
}

export default Privacy_policy