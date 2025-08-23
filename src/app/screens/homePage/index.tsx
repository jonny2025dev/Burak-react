import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advaertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";  
import { setPopularDishes } from "./slice";
import { Product } from "../../../lib/data/types/product";
import { ProductCollection } from "../../../lib/data/enums/product.enum";
import ProductService from "../../services/ProductService";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes (data)), 
});

export default function HomePage() {
  const { setPopularDishes } = actionDispatch (useDispatch ());

  useEffect(() => {
    // Backend server data fetch => Data
    const product = new ProductService();
    product
      .getProducts({
        page: 1, 
        limit: 4, 
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
         console.log("data passed here:", data);
         setPopularDishes(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
