import React from "react";
import styles from "./CartSidePanel.module.css";
import SidePanelObject from "./SidePanelObject";
import { useHistory } from "react-router";
function CartSidePanel({
  isOpen,
  cart_elements,
  dispatch,
  add_element,
  remove_element,
}) {
  const history = useHistory();

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
  return (
    <div
      className={styles.cart_side_panel}
      style={{ transform: isOpen ? "translate(0,0)" : "translate(300px,0)" }}
    >
      <h1>Cart</h1>
      {formattedCart.map((obj, i) => (
        <SidePanelObject
          obj={obj}
          key={"plan" + i}
          dispatch={dispatch}
          add_element={add_element}
          remove_element={remove_element}
        />
      ))}
      <button
        className={
          styles.proceed_to_pay_button + " " + (formattedCart.length === 0)
            ? styles.disabled
            : ""
        }
        onClick={() => {
          history.push("/checkout");
        }}
      >
        Proceed To Pay
      </button>
    </div>
  );
}

export default CartSidePanel;
