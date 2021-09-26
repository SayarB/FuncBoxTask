import React, { useState } from "react";
import styles from "./SubscriptionCards.module.css";
function SubscriptionCards({ color, head, info }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.sub_card_container}
      style={{ height: isOpen ? "700px" : "450px" }}
    >
      <div
        className={styles.sub_card}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div
          className={styles.background_div}
          style={{ top: isOpen ? "380px" : "40px" }}
        ></div>
        <div
          className={styles.info_card}
          style={{
            backgroundColor: color,
            height: isOpen ? "400px" : "100px",
          }}
        >
          <h2>{head}</h2>
          <br />
          <p>{info}</p>
        </div>

        <div
          className={styles.foreground_div}
          style={{ top: isOpen ? "380px" : "40px" }}
        >
          <p>Monthly a/month</p>
          <p>Quarterly a/month</p>
          <p>Half-yearly a/month</p>
          <p>Yearly a/month</p>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionCards;
