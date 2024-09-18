import React, { useEffect } from "react";
import "./SearchPage.scss";
import Loader from "../../Components/Loader/Loader";
import { STATUS } from "../../utils/status";
import ProductLIst from "../../Components/ProductList/ProductLIst";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearch,
  fetchAsyncSearchProduct,
  getSearchProducts,
  getSearchProductsStatus,
} from "../../store/SearchSlice";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const searchProducts = useSelector(getSearchProducts);
  // console.log("🚀 ~ SearchPage ~ searchProducts:", searchProducts)
  const searchProductsStatus = useSelector(getSearchProductsStatus);
  console.log("🚀 ~ SearchPage ~ searchProductsStatus:", searchProductsStatus);

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchAsyncSearchProduct(searchTerm));
    }
    dispatch(clearSearch());
  }, [dispatch, searchTerm]);

  if (searchProducts.length === 0) {
    return (
      <div className="container" style={{minHeight:"65vh"}}>
        <div className="fw-5 text-danger py-5">
          <h2>No Product Found</h2>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="search-content bg-whitesmoke">
        <div className="container">
          <div className="py-5">
            <div className="title-md">
              <h3>Search results:</h3>
            </div>
            <br />
            {searchProductsStatus === STATUS.LOADING ? (
              <Loader />
            ) : (
              <ProductLIst products={searchProducts} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
