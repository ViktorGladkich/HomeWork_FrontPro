import React from "react";
import styles from "../Main/Main.module.scss";
import trendingImg from "../../img/tranding.svg";
import dogCollars1Img from "../../img/Dog_Collars/il_340x270 1.svg";
import dogCollars2Img from "../../img/Dog_Collars/il_1588xN 1.svg";
import dogCollars3Img from "../../img/Dog_Collars/il_1588xN 2.svg";
import animalCarry1 from "../../img/Animal_Carry/3304288-center-1 1.svg";
import animalCarry2 from "../../img/Animal_Carry/fa017fcd-8612-4254-9605-1f8530938644_2 1.svg";
import animalCarry3 from "../../img/Animal_Carry/Pet-Carrier-Backpack-Bubble-Arc-Clear-Window-Cats-and-Puppies-Airline-Approved-Designed-for-Travel-Hiking.jpg_Q90 1.svg";

function Main() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.main_trending}>
          <h1>Trending Spa Package</h1>
          <div className={styles.main_trending_trending_content}>
            <div className="trending_content_img">
              <img src={trendingImg} alt="" />
            </div>

            <div className={styles.main_trending_trending_content_title}>
              <h2>
                Doggy Facial and Fur <br />
                Cleanse Treatment <br />
                $269
              </h2>
              <p>
                Dogs receive a facial with our vegan, cruelty free face products
                and <br />
                cleansing of any dirt left hiding in their beautiful fur <br />
                (comes with a take home face products and animal treats).
              </p>

              <div
                className={styles.main_trending_trending_content_title_button}
              >
                <button>See More Spa Packages</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.main_products}>
          <h3>Dog Collars</h3>
          <div className={styles.main_products_container}>
            <div className={styles.main_products_card}>
              <img src={dogCollars1Img} alt="" />
              <div className={styles.main_products_title}>
                <p>Leather Dog Collars with Gold Name Tag</p>
                <p>Luxe Animal Spa</p>
                <h5>CA $325.00</h5>
              </div>
            </div>

            <div className="products_card">
              <img src={dogCollars2Img} alt="" />
              <div className={styles.main_products_title}>
                <p>Leather Dog Collars with Gold Name Tag</p>
                <p>Luxe Animal Spa</p>
                <h5>CA $325.00</h5>
              </div>
            </div>

            <div className={styles.products_card}>
              <img src={dogCollars3Img} alt="" />
              <div className={styles.main_products_title}>
                <p>Leather Dog Collars with Gold Name Tag</p>
                <p>Luxe Animal Spa</p>
                <h5>CA $325.00</h5>
              </div>
            </div>
          </div>

          <div className={styles.main_products_button}>
            <button>See More Dog Collars</button>
          </div>

          <h4>Animal Carry Ons</h4>

          <div className={styles.main_products_container}>
            <div className={styles.main_products_card}>
              <img src={animalCarry1} alt="" className={styles.borderColor} />
              <div className={styles.main_products_title}>
                <p>Leather Dog Collars with Gold Name Tag</p>
                <p>Luxe Animal Spa</p>
                <h5>CA $125.00</h5>
              </div>
            </div>

            <div className="products_card">
              <img src={animalCarry2} alt="" className={styles.borderColor} />
              <div className={styles.main_products_title}>
                <p>Leather Dog Collars with Gold Name Tag</p>
                <p>Luxe Animal Spa</p>
                <h5>CA $135.00</h5>
              </div>
            </div>

            <div className={styles.products_card}>
              <img src={animalCarry3} alt="" className={styles.borderColor} />
              <div className={styles.main_products_title}>
                <p>Leather Dog Collars with Gold Name Tag</p>
                <p>Luxe Animal Spa</p>
                <h5>CA $95.00</h5>
              </div>
            </div>
          </div>

          <div className={styles.main_products_button}>
            <button>See More Carry Ons</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
