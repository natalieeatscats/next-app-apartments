import React from "react";
import Title from "../title/title";
import WithBorder from "../with-border/with-border";
import styles from "./featured.module.css";
import StoryCard from "../story-card/story-card";
import { STORIES } from "@/app/mock/stories";
import StoryCardSmall from "../story-card-small/story-card-small";
import Link from "next/link";

const Featured = () => {
  console.log(STORIES);
  return (
    <div className={styles.container}>
      <Title size={2}>
        Истории<WithBorder color="primary">наших пользователей</WithBorder>
      </Title>
      <StoryCard content={STORIES[0]} parasToDisplay={4}></StoryCard>
      <ul className={styles.list}>
        {STORIES.slice(1, 5).map((story) => (
          <li>
            <StoryCardSmall
              key={story.id}
              content={story}
              parasToDisplay={2}
            ></StoryCardSmall>
          </li>
        ))}
      </ul>
      <p className={styles.cta}>
        Заинтересовались? Прочитайте
        <Link href={"/stories"}>
          <WithBorder color="primary" interactible>
            другие истории,
          </WithBorder>
        </Link>
        a лучше
        <br />
        <Link href={"/login"}>
          <WithBorder color="primary" interactible>
            войдите или зарегистрируйтесь
          </WithBorder>
        </Link>
        и поделитесь своей!
      </p>
    </div>
  );
};

export default Featured;
