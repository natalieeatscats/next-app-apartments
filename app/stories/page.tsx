import React from "react";
import { STORIES } from "../mock/stories";
import StoryCard from "../components/story-card/story-card";
import styles from "./page.module.css";
import Title from "../components/title/title";
import WithBorder from "../components/with-border/with-border";

const StoriesPage = () => {
  return (
    <div className={styles.container}>
      <Title size={2}>
        Истории
        <br />
        <WithBorder color="primary">наших пользователей</WithBorder>
      </Title>
      {STORIES.map((story) => (
        <StoryCard key={story.id} content={story} parasToDisplay={1} />
      ))}
    </div>
  );
};

export default StoriesPage;
