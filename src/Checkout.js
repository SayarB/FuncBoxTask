import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import styles from "./Checkout.module.css";
import InputField from "./InputField";
import ShippingInput from "./ShippingInput";
import BillingInput from "./BillingInput";
import OrderSummary from "./OrderSummary";
function Checkout() {
  const [shippingInfo, setShippingInfo] = useState(null);
  const [billingInfo, setBillingInfo] = useState(null);
  const getShippingData = (data) => {
    console.log(data);
    setShippingInfo(data);
  };
  const getBillingData = (data) => {
    console.log(data);
    setBillingInfo(data);
  };
  return (
    <div>
      <Header />
      <div className={styles.checkout_container}>
        <div className={styles.shipping_info}>
          <ShippingInput getData={getShippingData} />
          <BillingInput getData={getBillingData}></BillingInput>
        </div>
        <div className={styles.order_summary}>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
