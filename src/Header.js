import React from "react";
import { useHistory } from "react-router";
import styles from "./Header.module.css";
function Header() {
  const history = useHistory();
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img
            onClick={() => {
              history.push("/");
            }}
            src="funcbox-logo.svg"
            alt="logo"
            className={styles.logo_image}
          />
          <img
            src="FuncBoxText.png"
            alt="FuncBox"
            className={styles.logo_text}
          />
        </div>
        <div className={styles.nav_link}>
          <img src="home-icon.svg" alt="" />
          <p>Home</p>
        </div>
        <div className={styles.nav_link}>
          <img src="about-icon.svg" alt="" />
          <p>About</p>
        </div>
        <div className={styles.nav_link}>
          <img src="shop-icon.svg" alt="" />
          <p>Shop</p>
        </div>
        <div className={styles.nav_link}>
          <img src="login-icon.svg" alt="" />
          <p>Login/Sign Up</p>
        </div>
      </nav>
    </div>
  );
}

export default Header;
