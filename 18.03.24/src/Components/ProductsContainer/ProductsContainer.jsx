import React, { useContext } from "react";
import { Context } from "../../requests/context";
import ProductsCard from "../ProductsCard/ProductsCard";
import styles from "./ProductsContainer.module.scss"

function ProductsContainer() {
  const { products } = useContext(Context);
  return (
    <div className={styles.container}>
      {products && products.map((el) => <ProductsCard key={el.id} {...el} />)}
    </div>
  );
}

export default ProductsContainer;
