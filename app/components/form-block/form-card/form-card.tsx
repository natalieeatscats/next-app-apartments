import React from "react";
import styles from "./form-card.module.css";
import Title from "../../title/title";
import Button from "../../button/button";

const FormCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.illustration}>
        <div></div>
      </div>
      <div className={styles.content}>
        <span className={styles.timer}>
          Время прохождения опроса <span>3 минуты</span>
        </span>
        <Title size={3}>
          Хочу безопасно и легко
          <br />
          продать или купить квартиру
        </Title>
        <Button color="primary">Начать</Button>
        <p className={styles.desc}>
          После завершения опроса вы получите
          <br />
          PDF файл, содержащий:
        </p>
        <ul className={styles.list}>
          <li>1. Список документов, необходимых в вашем конкретном случае.</li>
          <li>2. Разъяснение сложных терминов «на пальцах».</li>
          <li>3. Оценку возможных рисков.</li>
        </ul>
      </div>
    </div>
  );
};

export default FormCard;
