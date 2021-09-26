import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import InputField from "./InputField";
import Payment from "./Payment";
import { products } from "./Products";
function OrderSummary({ buttonText, couponEntry, nextPage }) {
  const history = useHistory();
  const [coupon, setCoupon] = useState("");
  const cart_elements = useSelector((state) => state.cart.cart_elements);

  const calculateNumber = () => {
    var formatted_cart = [];
    var copy_arr = [...cart_elements];
    copy_arr.sort();
    var i = 0;
    while (i < copy_arr.length) {
      const current = copy_arr[i];
      var num = 0;
      while (i < copy_arr.length && copy_arr[i] === current) {
        num++;
        i++;
      }
      formatted_cart.push({ plan: current, num: num });
    }
    return formatted_cart;
  };

  const formattedCart = calculateNumber();
  const subTotal = () => {
    var ans = 0;
    formattedCart.forEach((ele) => {
      ans += ele.num * 420.0;
    });
    return ans;
  };
  return (
    <div>
      <h1>Order Summary</h1>
      <br />
      <table style={{ borderBottom: "1px solid", width: "100%" }}>
        {formattedCart.map((ele) => (
          <tr>
            <td style={{ width: "100%" }}>
              {products[ele.plan]} X {ele.num}
            </td>
            <td>{ele.num * 420.0}</td>
          </tr>
        ))}
      </table>
      <table style={{ width: "100%" }}>
        <tr>
          <td style={{ width: "100%" }}>
            <p>Total</p>
          </td>
          <td>
            <p>{subTotal()}</p>
          </td>
        </tr>
      </table>
      <button
        style={{
          width: "100%",
          fontSize: "15px",
          border: "none",
          height: "30px",
          backgroundColor: "#F3EF93",
          cursor: "pointer",
          marginBottom: "20px",
        }}
        onClick={() => {
          history.push("/" + nextPage);
        }}
      >
        {buttonText}
      </button>

      {couponEntry && (
        <InputField
          label="Enter Gift cards, Voucher & Promotional 
codes "
          value={coupon}
          onChange={(e) => {
            setCoupon(e.target.value);
          }}
        />
      )}
    </div>
  );
}

export default OrderSummary;
