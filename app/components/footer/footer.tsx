import React from "react";
import styles from "./footer.module.css";
import Logo from "../logo/logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Logo></Logo>
      </div>
    </footer>
  );
};

export default Footer;
