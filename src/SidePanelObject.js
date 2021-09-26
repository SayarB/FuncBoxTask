import React from "react";
import styles from "./SidePanelObject.module.css";
import { products } from "./Products";
function SidePanelObject({ obj, dispatch, add_element, remove_element }) {
  return (
    <div className={styles.plan_obj}>
      <h2>{products[obj.plan]}</h2>
      <div className={styles.buttons}>
        <img
          src="bin.png"
          alt=""
          onClick={() => {
            dispatch(remove_element(obj.plan));
          }}
        />
        <p>{obj.num}</p>
        <img
          src="addButton.jpg"
          alt=""
          onClick={() => {
            dispatch(add_element(obj.plan));
          }}
        />
      </div>
    </div>
  );
}

export default SidePanelObject;
