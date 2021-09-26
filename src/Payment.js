import React from "react";
import Header from "./Header";
import styles from "./Checkout.module.css";
import InputField from "./InputField";
import OrderSummary from "./OrderSummary";
function Payment() {
  return (
    <div>
      <Header />
      <div className={styles.checkout_container}>
        <div className={styles.shipping_info}>
          <h1>Shipping Address</h1>
          <p style={{ color: "#FF5254", margin: "20px 0px" }}>Saved Address</p>
          <p>
            Sherlock Holmes <br />
            xxxx xxxx xxxx 1234 <br />
            Expiration date: 12/23
          </p>
          <div style={{ display: "flex", placeItems: "center" }}>
            <p style={{ margin: "10px" }}>Enter CVV</p>
            <input type="text" />
          </div>
          <h2 style={{ fontWeight: 600 }}>Add a new Card</h2>
          <InputField label="Name on the Card" />
          <InputField label="Name on the Card" />
          <p style={{ fontSize: "15px" }}>Expiration Date</p>
          <input
            type="text"
            style={{ width: "35px", marginRight: "10px" }}
            placeholder="M M"
          />
          <input
            type="text"
            style={{ width: "35px", marginBottom: "10px" }}
            placeholder="Y Y"
          />

          <p style={{ fontSize: "15px" }}> CVV</p>
          <input type="text" />
          <p style={{ fontSize: "14px" }}>Note: cvv will not be saved </p>
        </div>
        <div className={styles.order_summary}>
          <OrderSummary nextPage="success" buttonText="Place Your Order" couponEntry={false} />
        </div>
      </div>
    </div>
  );
}

export default Payment;
