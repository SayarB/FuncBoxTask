import React from "react";
import { useHistory } from "react-router";
import styles from "./Success.module.css";
function Success() {
  const history = useHistory();
  setTimeout(() => {
    history.push("/");
  }, 5000);

  return (
    <div className={styles.container}>
      <div className={styles.congrats}>
        <img src="animation.gif" alt="" />
        <h1>Congratulaitons!</h1>
      </div>
      <img src="truck.png" alt="" className={styles.truck} />
    </div>
  );
}

export default Success;
