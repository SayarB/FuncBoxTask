import React, { useState } from "react";
import styles from "./SubscriptionCards.module.css";
function SubscriptionCards({ color, head, info }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.sub_card_container}>
      <div
        className={styles.sub_card}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div
          className={styles.background_div}
          style={{ top: isOpen ? "280px" : "40px" }}
        ></div>
        <div className={styles.info_card} style={{ backgroundColor: color }}>
          <h2>{head}</h2>
          <br />
          <p>{info}</p>
        </div>

        <div
          className={styles.foreground_div}
          style={{ top: isOpen ? "330px" : "40px" }}
        ></div>
      </div>
    </div>
  );
}

export default SubscriptionCards;
