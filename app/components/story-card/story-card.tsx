import { StoryData } from "@/app/types";
import React from "react";
import Title from "../title/title";
import styles from "./story-card.module.css";
import WithBorder from "../with-border/with-border";
import Button from "../button/button";
import Link from "next/link";

type Props = {
  content: StoryData;
  parasToDisplay: number;
  big?: boolean;
};

const StoryCard = ({ content, parasToDisplay, big }: Props) => {
  const { title, text, author, date } = content;
  const paragraphs = text.split("\n");
  return (
    <div className={`${styles.container} ${big && styles.big}`}>
      <div>
        <Title size={4}>
          <span className={styles.date}>{date}</span>
          <Link href={`/user/${author}`}>
            <WithBorder color="primary" interactible>
              {author}
            </WithBorder>
          </Link>
        </Title>
        <Title size={3}>{title}</Title>
        <div className={styles.paragraphs}>
          {paragraphs.slice(0, parasToDisplay).map((paragraph, index) => (
            <p
              key={index}
              style={{
                opacity: (parasToDisplay - index) / parasToDisplay,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <Link href={`/stories/${content.id}`}>
        <Button color="primary">Читать далее</Button>
      </Link>
    </div>
  );
};

export default StoryCard;
