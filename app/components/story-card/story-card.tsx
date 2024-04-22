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
};

const StoryCard = ({ content, parasToDisplay }: Props) => {
  const { title, text, author, date } = content;
  const paragraphs = text.split("\n");
  return (
    <div className={styles.container}>
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
      <Button color="primary">Читать далее</Button>
    </div>
  );
};

export default StoryCard;
