import React from "react";
import styles from "./phone.module.css";
import Link from "next/link";

const Phone = () => {
  return (
    <Link href="tel:84958354711" className={styles.phone}>
      + 7 495 835 47 11
    </Link>
  );
};

export default Phone;
