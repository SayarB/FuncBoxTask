import React from "react";
import styles from "./GoToCart.module.css";

function GoToCart({ onClick }) {
  return (
    <div className={styles.gotocart_button} onClick={onClick}>
      <img src="trolley 1.svg" alt="Cart" className={styles.image} />
      <p>Go To Cart</p>
    </div>
  );
}

export default GoToCart;
