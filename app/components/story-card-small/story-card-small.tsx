import { StoryData } from "@/app/types";
import React from "react";
import Title from "../title/title";
import styles from "./story-card-small.module.css";
import WithBorder from "../with-border/with-border";
import Button from "../button/button";
import { makeStories } from "@/app/mock/stories";

type Props = {
  content: StoryData;
  parasToDisplay: number;
};

const StoryCardSmall = ({ content, parasToDisplay }: Props) => {
  const { title, author, date } = content;
  console.log(makeStories(10));
  return (
    <div className={styles.container}>
      <div>
        <Title size={6}>
          <span className={styles.date}>{date}</span>
          {author.slice(0, 10)}
          {author.length > 10 && "..."}
        </Title>
        <Title size={5}>{title}</Title>
      </div>
      <Button color="primary">Читать</Button>
    </div>
  );
};

export default StoryCardSmall;
