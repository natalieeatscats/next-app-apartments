import React from "react";
import styles from "./form-block.module.css";
import Title from "../title/title";
import WithBorder from "../with-border/with-border";
import FormCard from "./form-card/form-card";

const FormBlock = () => {
  return (
    <div className={styles.formBlock}>
      <div className={styles.container}>
        <Title size={2}>
          Пройдите небольшой опрос и узнайте,
          <br />
          как<WithBorder color="primary">избежать рисков</WithBorder>при продаже
          или
          <br />
          покупке квартиры{" "}
        </Title>
        <FormCard />
      </div>
    </div>
  );
};

export default FormBlock;
