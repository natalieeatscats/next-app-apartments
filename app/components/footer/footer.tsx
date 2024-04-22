import React from "react";
import styles from "./footer.module.css";
import Logo from "../logo/logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo></Logo>
          <p className={styles.copyright}>© 2021, Все права защищены</p>
        </div>
        <div className={styles.contacts}>
          <ul>
            <li className={styles.address}>г. Москва, Красная площадь д.1</li>
            <li className={styles.phone}>+ 7 495 835 47 11</li>
          </ul>
        </div>
        <div className={styles.hours}>
          Режим работы{" "}
          <ul>
            <li>Пн-Пт: 9:00 - 17:00</li>
            <li>Сб-Вс: 9:00 - 15:00</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
