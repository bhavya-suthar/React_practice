import React from 'react'
import { useTranslation } from 'react-i18next'

const Faq = () => {
  const {t} = useTranslation()
  return (
    <>

    <h1>{t('FAQs')}</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus incidunt inventore, eos distinctio accusamus placeat illum exercitationem adipisci animi non atque nemo tempore maiores voluptas molestias laborum ea at quae dolores ipsa fuga. Consequuntur nisi amet ex atque cupiditate porro.</p>
    </>
  )
}

export default Faq