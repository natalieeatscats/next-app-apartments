import React from "react";
import styles from "./button.module.css";

type Props = {
  children: React.ReactNode;
  color: string;
};

const getButtonColor = (color: string) => {
  switch (color) {
    case "primary":
      return styles.buttonPrimary;
    case "white":
      return styles.buttonWhite;
    default:
      return styles.buttonPrimary;
  }
};

const Button = ({ children, color }: Props) => {
  return (
    <button className={`${styles.button} ${getButtonColor(color)}`}>
      {children}
    </button>
  );
};

export default Button;
