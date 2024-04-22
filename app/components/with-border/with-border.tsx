import React from "react";
import styles from "./with-border.module.css";

type Props = {
  children: React.ReactNode;
  color: string;
  interactible?: boolean;
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

const WithBorder = ({ children, color, interactible }: Props) => {
  return (
    <span className={`${interactible && styles.interactible}`}>
      <span className={`${styles.border} ${getBorderColor(color)}`}>
        {children}
      </span>
    </span>
  );
};

export default WithBorder;
