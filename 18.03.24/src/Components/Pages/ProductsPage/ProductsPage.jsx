import React, { useEffect, useState } from "react";

import ProductsContainer from "../../ProductsContainer/ProductsContainer";
import { BurgerArrow } from "react-burger-icons";
import styles from "./ProductsPage.module.scss";
import { getAllProducts } from "../../../requests/products";
import { Context } from "../../../requests/context";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    getAllProducts(setProducts);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={styles.productsContainer}>
        <Context.Provider value={{ products }}>
          <ProductsContainer />
        </Context.Provider>
      </div>
      <div className={styles.buttonScroll}>
        <button
          onClick={() => {
            setIsClosed(!isClosed);
            scrollTop();
          }}
          style={{
            width: "50px",
            height: "50px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <BurgerArrow isClosed={isClosed} className={styles.icon} />
        </button>
      </div>
    </>
  );
}

export default ProductsPage;
