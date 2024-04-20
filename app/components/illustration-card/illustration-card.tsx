import React from "react";
import styles from "./illustration-card.module.css";
import Image from "next/image";

type Props = {
  image: string;
};

const Illustration = ({ image }: Props) => {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        alt={""}
        height={400}
        width={400}
        quality={100}
      ></Image>
    </div>
  );
};

export default Illustration;
