import React from "react";
import styles from "./with-border.module.css";

type Props = {
  children: React.ReactNode;
  color: string;
};

const getBorderColor = (color: string) => {
  switch (color) {
    case "primary":
      return styles.borderPrimary;
    case "white":
      return styles.borderWhite;
    default:
      return styles.borderPrimary;
  }
};

const WithBorder = ({ children, color }: Props) => {
  return (
    <span className={styles.container}>
      <span className={`${styles.border} ${getBorderColor(color)}`}></span>
      {children}
    </span>
  );
};

export default WithBorder;
