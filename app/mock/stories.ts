import { StoryData } from '../types';
import { faker } from '@faker-js/faker';

export const makeStories = (num: number) => {
  const stories: StoryData[] = [];
  for (let i = 0; i < num; i++) {
    const story: StoryData = {
      id: i,
      title: faker.lorem.sentence({ min: 3, max: 5 }),
      text: faker.lorem.paragraphs({ min: 5, max: 10 }, '\n'),
      author: faker.person.fullName(),
      date: faker.date.recent({ days: 30 }).toLocaleDateString('ru-RU'),
    };
    stories.push(story);
  }
  console.log(stories);
  return stories;
};

// export const STORIES: StoryData[] = [
//   {
//     id: 0,
//     title: 'Как я квартиру в Пушкино москвичу продавала',
//     text: faker.lorem.paragraphs({ min: 5, max: 10 }, '\n'),
//     author: faker.person.fullName(),
//     date: faker.date.recent({ days: 30 }).toLocaleDateString('ru-RU'),
//   },
//   {
//     id: 1,
//     title: 'Не покупают квартиру? Нужно всего лишь...',
//     text: faker.lorem.paragraphs({ min: 5, max: 10 }, '\n'),
//     author: faker.person.fullName(),
//     date: faker.date.recent({ days: 30 }).toLocaleDateString('ru-RU'),
//   },
//   {
//     id: 2,
//     title: 'Квартира - это что? Это как?',
//     text: faker.lorem.paragraphs({ min: 5, max: 10 }, '\n'),
//     author: faker.person.fullName(),
//     date: faker.date.recent({ days: 30 }).toLocaleDateString('ru-RU'),
//   },
// ];

export const STORIES = makeStories(10);
