import { StoryData } from "@/app/types";
import React from "react";
import Title from "../title/title";
import styles from "./story-card-small.module.css";
import WithBorder from "../with-border/with-border";
import Button from "../button/button";
import { makeStories } from "@/app/mock/stories";
import Link from "next/link";

type Props = {
  content: StoryData;
  parasToDisplay: number;
};

const StoryCardSmall = ({ content, parasToDisplay }: Props) => {
  const { title, author, date } = content;
  return (
    <div className={styles.container}>
      <div>
        <Title size={6}>
          <span className={styles.date}>{date}</span>
          {author.slice(0, 15)}
          {author.length > 15 && "..."}
        </Title>
        <Title size={5}>
          {title.slice(0, 35)}
          {title.length > 35 && "..."}
        </Title>
      </div>
      <Link href={`/stories/${content.id}`} className={styles.link}>
        <WithBorder color="primary" interactible>
          Читать
        </WithBorder>
      </Link>
    </div>
  );
};

export default StoryCardSmall;
