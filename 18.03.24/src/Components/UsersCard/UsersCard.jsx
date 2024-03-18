import React from "react";
import styles from "./UsersCard.module.scss"

function UsersCard({ image, firstName, lastName }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={`${firstName} ${lastName}`} />
      <h1>{`${firstName} ${lastName}`}</h1>
    </div>
  );
}

export default UsersCard;
