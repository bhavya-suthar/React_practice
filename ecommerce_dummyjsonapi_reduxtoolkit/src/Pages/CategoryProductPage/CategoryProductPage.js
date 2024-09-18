import React, { useEffect } from 'react'
import "./CategoryProductPage.scss"
import ProductLIst from '../../Components/ProductList/ProductLIst'
import Loader from '../../Components/Loader/Loader'
import { getAllProductCategory,fetchAsyncProductsCategory,getCategoryProductStatus } from '../../store/CategorySlice'
import { STATUS } from '../../utils/status'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const CategoryProductPage = () => {
  const dispatch = useDispatch()
  const {category} = useParams()
  console.log("🚀 ~ CategoryProductPage ~ category:", category)
  const categoryProducts = useSelector(getAllProductCategory)
  console.log("🚀 ~ CategoryProductPage ~ categoryProducts:", categoryProducts)
  const categoryProductStatus = useSelector(getCategoryProductStatus)
  console.log("🚀 ~ CategoryProductPage ~ categoryProductStatus:", categoryProductStatus)

  useEffect(()=>{
    dispatch(fetchAsyncProductsCategory(category))
  },[dispatch,category])

  return (
    <div className='cat-products py-5 bg-whitesmoke'>
      <div className="container">
        <div className="cat-products-content">
          <div className="title-md">
            <h3>See Our <span className="text-capitalize">{category.replace("-"," ")}</span></h3>
          </div>
          {categoryProductStatus === STATUS.LOADING ? <Loader/> : <ProductLIst products={categoryProducts}/>}
        </div>
      </div>
    </div>
  )
}

export default CategoryProductPage