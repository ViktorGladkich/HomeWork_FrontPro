import React from "react";
import logo from "../../img/spaLogo 2 (2).svg";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import styles from "../Navbar/Navbar.module.scss";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <div className={styles.navbar_container_logo}>
            <div className="navbar_logo_img">
              <img src={logo} alt="" />
            </div>
            <p className={styles.navbar_container_logo_text}>
              <span>Luxe Animal Spa</span>
            </p>
          </div>

          <ul className={styles.navbar_container_content}>
            <li className={styles.navbar_container_content_title}>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Spa Services</a>
            </li>
            <li>
              <a href="#">Book Appointment</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>

          <div className={styles.navbar_container_icon}>
            <span>
              <i>
                <CiSearch />
              </i>
            </span>
            <span className={styles.bagIconContainer}>
              <i>
                <RiShoppingBag3Line />
              </i>
              <span className={styles.bagIconCounter}>3</span>
            </span>
            <span>
              <i>
                <FaRegUser />
              </i>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
