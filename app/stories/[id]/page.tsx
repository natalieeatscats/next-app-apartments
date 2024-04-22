import Title from "@/app/components/title/title";
import { STORIES } from "@/app/mock/stories";
import React from "react";
import styles from "./page.module.css";
import WithBorder from "@/app/components/with-border/with-border";

const StoryPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const content = STORIES.find((story) => story.id === Number(id));
  if (!content) {
    return <div>404</div>;
  }
  const { title, text, author, date } = content;
  const paras = text.split("\n");
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title size={2}>{title}</Title>
        <br />
        <Title size={3}>
          <WithBorder color="primary" interactible>
            {author}
          </WithBorder>
        </Title>
        <Title size={4}>{date}</Title>
      </div>
      {paras.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  );
};

export default StoryPage;
