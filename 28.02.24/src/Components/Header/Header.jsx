import React from "react";
import styles from "../Header/Header.module.scss";
import headerImg from "../../img/header.jpeg";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_container}>
          <div className={styles.header_container_container_discount}>
            <p>Get 20% OFF When You Book A Spa Day For Your Animal Today!</p>
          </div>

          <div className={styles.header_container_img}>
            <img src={headerImg} alt="" />
            <div className={styles.header_container_content}>
              <div className={styles.header_container_content_content_title}>
                <h1>
                  Your dog running <br /> amok in the dirt?
                </h1>
                <h2>
                  Book your doggy <br />
                  spa day!
                </h2>
                <div>
                  <button>Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
