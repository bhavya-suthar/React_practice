import React from "react";
import { useTranslation } from "react-i18next";

const Aboutus = () => {
  const {t} = useTranslation()
  return (
    <>
      <h1>{t('About Us')}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
        dolores voluptatum ullam quam, explicabo aut illo eos. Nobis, modi quod
        quam exercitationem excepturi quidem qui voluptate atque facere quaerat
        culpa consequatur sunt quibusdam voluptatem deserunt alias consectetur
        distinctio, mollitia, voluptates molestiae saepe ut nihil! Distinctio
        aliquam temporibus libero expedita corrupti rerum deleniti at similique
        praesentium, alias iste non adipisci iure voluptatem possimus placeat
        eveniet dignissimos? Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Eius beatae harum modi incidunt vel quisquam quasi. Odio ut magnam
        ab.
      </p>
    </>
  );
};

export default Aboutus;
