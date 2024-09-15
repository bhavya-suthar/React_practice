import React from 'react'
import './HomePage.scss'
import HeaderSlider from '../../Components/Slider/HeaderSlider'

const HomePage = () => {
  return (
    <main>
      <div className="slider-wrapper">
        <HeaderSlider/>
      </div>
      <div className="main-content bg-whitesmoke">
        <div className="container">
          <div className="categories py-5">
            <div className="categories-item">
              <div className="title-md">
                <h3>See Our Products</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage