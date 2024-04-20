import Image from "next/image";
import Navigation from "./components/nav/nav";
import Hero from "./components/hero/hero";
import Illustration from "./components/illustration-card/illustration-card";
import styles from "./page.module.css";
import FormBlock from "./components/form-block/form-block";
import Title from "./components/title/title";
import Featured from "./components/featured/featured";

export default function Home() {
  return (
    <>
      <Hero />
      <div className={styles.illustrationsContainer}>
        {Array(3)
          .fill("")
          .map((_, i) => (
            <Illustration
              image={`/img/ponder-${i + 1}.png`}
              key={`illustration-${i + 1}`}
            />
          ))}
      </div>
      <FormBlock />
      <Featured />
    </>
  );
}
