import React from 'react'
import './ProductSinglePage.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncProductSingle,getProductSingle,getSingleProductStatus } from '../../store/ProductSlice'
import { STATUS } from '../../utils/status'
import Loader from '../../Components/Loader/Loader'
import { formatPrice } from '../../utils/helpers'

const ProductSinglePage = () => {
  const {id} = useParams
  console.log("🚀 ~ ProductSinglePage ~ id:", id)
  const dispatch = useDispatch()
  const product = useSelector(getProductSingle)

  return (
    <div>ProductSinglePage</div>
  )
}

export default ProductSinglePage