import React from 'react'
import { useTranslation } from 'react-i18next'

const Faq = () => {
  const {t} = useTranslation()
  return (
    <>

    <h1>{t('FAQs')}</h1>
    <p>{t('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, nihil. Error expedita repellat quisquam repudiandae excepturi, veritatis id! Repellat minus sed est obcaecati veritatis unde dolores cumque ut sint numquam possimus eveniet, rem tempore quae adipisci ratione, asperiores voluptatem alias id similique deserunt pariatur explicabo aperiam soluta. Ab dolorum expedita explicabo exercitationem, neque iste architecto! Repudiandae ipsam quaerat veritatis! Exercitationem, voluptatibus eveniet perferendis non adipisci veniam assumenda mollitia? Voluptate voluptates voluptatibus quia esse quo nam autem quas amet labore perspiciatis, laudantium repudiandae, innecessitatibus reprehenderit vitae ea consectetur sapiente assumenda repellendus, corporis hic! Inventore natus commodi in, doloremque velfacere!')}</p>
    </>
  )
}

export default Faq