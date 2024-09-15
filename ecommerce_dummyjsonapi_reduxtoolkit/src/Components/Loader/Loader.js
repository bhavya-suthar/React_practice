import React from 'react'
import './Loader.scss'
// import {loader} from '../../assets/images/loader.svg'
import loaderImg from '../../assets/images/loader.svg'

const Loader = () => {
  return (
    <div className='container'>
        <div className="loader flex justify-center align-center">
            {/* <img src={loader} alt="" /> */}
            <img src={loaderImg} alt="" />
        </div>
    </div>
  )
}

export default Loader