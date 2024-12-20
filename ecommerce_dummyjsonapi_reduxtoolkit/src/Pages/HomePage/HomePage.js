import React, { useEffect } from "react";
import "./HomePage.scss";
import HeaderSlider from "../../Components/Slider/HeaderSlider";
import { getAllCategories } from "../../store/CategorySlice";
import ProductList from "../../Components/ProductList/ProductLIst";
import {
  getAllProducts,
  fetchAsyncProducts,
  getSingleProductStatus,
  getAllProductStatus,
} from "../../store/ProductSlice";
import Loader from "../../Components/Loader/Loader";
import { STATUS } from "../../utils/status";
import { useDispatch, useSelector } from "react-redux";
import ProductLIst from "../../Components/ProductList/ProductLIst";

const HomePage = () => {
  const dispatch = useDispatch()
  const categories = useSelector(getAllCategories)
  console.log("🚀 ~ HomePage ~ categories:", categories)

  useEffect(()=>{
    dispatch(fetchAsyncProducts(95))
  },[])

  const products = useSelector(getAllProducts)
  console.log("🚀 ~ HomePage ~ products:", products)
  const productStatus = useSelector(getAllProductStatus)

  //randomizing the products in the list
  // const tempProducts = [];
  // if(products.length > 0){
  //   let randomIndex = Math.floor(Math.random() * products.length)

  //   while(tempProducts.includes(products[randomIndex])){
  //     randomIndex = Math.floor(Math.random() * products.length)
  //   }
  //   tempProducts[i] = products[randomIndex];
  // }


  const tempProducts = [];
  if (products.length > 0) {
    while (tempProducts.length < products.length) {
      let randomIndex = Math.floor(Math.random() * products.length);
      if (!tempProducts.includes(products[randomIndex])) {
        tempProducts.push(products[randomIndex]);
      }
    }
  }

  let catProductsOne = products.filter(product => product.category === categories[0]);
  let catProductsTwo = products.filter(product => product.category === categories[1]);
  let catProductsThree = products.filter(product => product.category === categories[2]);
  let catProductsFour = products.filter(product => product.category === categories[3]);


  return (
    <main>
      <div className="slider-wrapper">
        <HeaderSlider />
      </div>
      <div className="main-content bg-whitesmoke">
        <div className="container">
          <div className="categories py-5">
            <div className="categories-item">
              <div className="title-md">
                <h3>See Our Products</h3>
              </div>
              {productStatus === STATUS.LOADING ?<Loader/>:<ProductLIst products = {tempProducts}/>}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[0]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader/>:<ProductLIst products={catProductsOne}/>}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[1]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader/>:<ProductLIst products={catProductsTwo}/>}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[2]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader/>:<ProductLIst products={catProductsThree}/>}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[3]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader/>:<ProductLIst products={catProductsFour}/>}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
