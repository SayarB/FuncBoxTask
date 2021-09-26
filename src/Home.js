import React, { useState } from "react";
import Header from "./Header";
import GoToCart from "./GoToCart";
import styles from "./Home.module.css";
import SubscriptionCards from "./SubscriptionCards";
import { useSelector, useDispatch } from "react-redux";
import { add_element, remove_element } from "./features/cart/CartSlice";
import CartSidePanel from "./CartSidePanel";

function Home() {
  const cart = useSelector((state) => state.cart.cart_elements);
  const dispatch = useDispatch();
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (plan_id) => {
    dispatch(add_element(plan_id));
  };
  return (
    <div className={styles.home}>
      <div
        className={styles.overlay}
        style={{
          display: cartOpen ? "initial" : "none",
          opacity: cartOpen ? "100%" : "0%",
        }}
        onClick={() => {
          setCartOpen(false);
        }}
      ></div>

      <CartSidePanel
        isOpen={cartOpen}
        cart_elements={cart}
        dispatch={dispatch}
        add_element={add_element}
        remove_element={remove_element}
      />

      <Header />
      <GoToCart
        onClick={() => {
          setCartOpen(true);
        }}
      />
      <div>
        <div className={styles.hero_container}>
          <img src="hero-image.png" alt="" className={styles.hero_image} />
          <div className={styles.hero_text_container}>
            <div className={styles.hero_text}>
              <img src="box.png" alt="" className={styles.bg_image} />
              <p>
                FuncBox is a box full of surprises which will teach you
                educational concepts and coding with a revolutionary twist.
              </p>
              <p>
                <span className={styles.bullet_points}>{">"}</span> Perfect for
                age-group 6-12 years. <br />
                <span className={styles.bullet_points}>{">"}</span> Build your
                own fun games. <br />
                <span className={styles.bullet_points}>{">"}</span> Learn to
                code and explore. <br />
                <span className={styles.bullet_points}>{">"}</span> Share your
                game with your friends.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className={styles.info_band}>
        <div className={styles.band_text_container}>
          <img src="delivery-truck1.png" alt="" />
          <p>Free Shipping</p>
        </div>
        <div className={styles.band_text_container}>
          <img src="noexp.png" alt="" />
          <p>No experience necessary</p>
        </div>
        <div className={styles.band_text_container}>
          <img src="pause.png" alt="" />
          <p>Cancel Anytime</p>
        </div>
      </div>
      <div className={styles.plans_section}>
        <h1>Plans</h1>
        <div className={styles.plan_cards}>
          <SubscriptionCards
            color="#F05D6A"
            head="Basic"
            plan_id={0}
            addToCart={addToCart}
            info={
              <>
                • FuncBox Binder
                <br />
                • 3 mathematical apps
                <br />
                • 3 scientific apps
                <br />
                • 3 game apps
                <br />
                • Stickers
                <br />
                • Kickstart guide
                <br />
                • Interactive website
                <br />
              </>
            }
          />
          <SubscriptionCards
            color="#FFD27B"
            head="Standard"
            plan_id={1}
            addToCart={addToCart}
            info={
              <>
                • FuncBox Binder <br />
                • 5 mathematical apps <br />
                • 5 scientific apps <br />
                • 5 game apps <br />
                • Stickers <br />
                • Mini fun deck <br />
                • Kickstart guide <br />
                • Interactive website <br />
              </>
            }
          />
          <SubscriptionCards
            color="#36BFA5"
            head="Premium"
            plan_id={2}
            addToCart={addToCart}
            info={
              <>
                • FuncBox Binder <br />
                • 8 mathematical apps <br />
                • 8 scientific apps <br />
                • 8 game apps <br />
                • 2 Surprise goodies <br />
                • Mystery toy <br />
                • Stickers <br />
                • Mini fun deck <br />
                • Kickstart guide <br />
                • Interactive website <br />
              </>
            }
          />
          <img src="baby_jombee.png" alt="" className={styles.baby_jombee} />
          <img src="angry_birds.png" alt="" className={styles.angry_birds} />
        </div>
      </div>
      <div className={styles.onetimegift_band}>
        <img src="box5.png" alt="" />
        <p>Searching for a one-time gift or corporate? You're in luck »</p>
      </div>
      <div className={styles.faq_section}>
        <h1>Frequently Asked Questions</h1>
        <p>
          What age is Funcbox for? <br />
          Funcbox is designed for kids 6-12 years in age.
          <br />
          What age is Funcbox for? <br />
          Funcbox is designed for kids 6-12 years in age.
          <br />
          What age is Funcbox for? <br />
          Funcbox is designed for kids 6-12 years in age.
          <br />
          What age is Funcbox for? <br />
          Funcbox is designed for kids 6-12 years in age.
          <br />
        </p>
      </div>
      <div className={styles.for_school_section}>
        <h1>For Schools</h1>
        <div className={styles.for_school_info}>
          <img src="for_school.png" alt="" className={styles.bag_image} />

          <div className={styles.for_school_text}>
            <p>
              Yay! FuncBox brings special discount for all the School Tie-ups.
              FuncBox can be easily incorporated in all the school grades. To
              make your students outperform and help your institute gain an edge
              over the others contact our team NOW!
            </p>
          </div>
        </div>
      </div>
      <footer>
        <img src="footer.png" alt="" />
      </footer>
    </div>
  );
}

export default Home;
