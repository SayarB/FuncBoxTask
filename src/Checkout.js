import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import styles from "./Checkout.module.css";
function Checkout() {
  return (
    <div>
      <Header />
      <div className={styles.checkout_container}>
        <div className={styles.shipping_info}>
          <h1>Shipping Address</h1>
          <p style={{ color: "#FF5254", margin: "20px 0px" }}>Saved Address</p>
          <p>
            Sherlock Holmes <br /> 211B, <br /> Baker Street, London,
            <br /> United Kingdom <br /> 929290304
          </p>
          <div className={styles.name_input}>
              <p>First Name</p>
              <input type="text" />
          </div>
        </div>
        <div className={styles.order_summary}></div>
      </div>
    </div>
  );
}

export default Checkout;
