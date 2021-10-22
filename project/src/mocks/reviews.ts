import { Review } from '../types/review';

const reviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: new Date('2019-05-08T14:13:56.569Z'),
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'I don`t wanna see that again',
    date: new Date('2019-05-08T14:13:56.569Z'),
    id: 2,
    rating: 1,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: false,
      name: 'Jasica',
    },
  },
  {
    comment: 'Very-very scary place',
    date: new Date('2019-05-08T14:13:56.569Z'),
    id: 3,
    rating: 2,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Vlad',
    },
  },
  {
    comment: 'Amazing! I love this room',
    date: new Date('2019-05-08T14:13:56.569Z'),
    id: 4,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: false,
      name: 'Sara',
    },
  },
];

export {reviews};
