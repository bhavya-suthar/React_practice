import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const {t} = useTranslation()
  return (
    <h1>{t('Footer')}</h1>
  )
}

export default Footer