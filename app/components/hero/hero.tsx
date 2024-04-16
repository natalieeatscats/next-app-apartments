import React from "react";
import Title from "../title/title";
import WithBorder from "../with-border/with-border";
import styles from "./hero.module.css";
import Button from "../button/button";

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>Запутались в сложных терминах и документах?</p>
          <Title size={1}>
            Узнайте, какие<WithBorder color="white">документы</WithBorder>
            <br />
            подготовить и что учесть
            <br />
            при<WithBorder color="white">продаже и покупке</WithBorder>
            <br />
            квартиры
          </Title>
          <Button color="white">Хочу знать больше</Button>
        </div>
        <div className={styles.image}></div>
      </div>
    </header>
  );
};

export default Hero;
