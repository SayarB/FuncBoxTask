import React from "react";
import Header from "./Header";
import GoToCart from "./GoToCart";
import styles from "./Home.module.css";
import SubscriptionCards from "./SubscriptionCards";
function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <GoToCart />
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
    </div>
  );
}

export default Home;
