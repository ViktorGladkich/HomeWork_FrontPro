import React from "react";
import styles from "./ProductsCard.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function ProductsCard({ id, images, title, description, price }) {
  return (
    <div className={styles.card}>
      {/* <img src={thumbnail} alt="" /> */}
      <Carousel showThumbs={false}>
        {images.map((el) => (
          <div>
            <img src={el} />
          </div>
        ))}
      </Carousel>
      <h1>{title}</h1>
      <p>{description}</p>
      <h4>{price}$</h4>
    </div>
  );
}

export default ProductsCard;
