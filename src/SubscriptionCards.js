import React from "react";
import styles from "./SubscriptionCards.module.css";
function SubscriptionCards() {
  return (
    <div className={styles.sub_card_container}>
      <div className={styles.sub_card}>
        <div className={styles.background_div}></div>
        <div className={styles.foreground_div}></div>
      </div>
    </div>
  );
}

export default SubscriptionCards;
