import React, { useEffect, useContext } from "react";
import Banner from "./Banner/Banner";
import { fetchDataFromApi } from "../../utils/api";
import Category from "../Category/Category";
import Products from "../Products/Products";
import { Context } from "../../utils/Context";


const Home = () => {
  const { products, setProducts, categories, setCategories } =
    useContext(Context);
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
