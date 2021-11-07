import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { CityName } from '../const';

const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: CityName.Amsterdam,
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Washing machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/1.png', 'img/2.png'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 122,
    rating: 4.8,
    title: 'The First of example offer',
    type: 'apartment',
  },{
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
      },
      name: CityName.Amsterdam,
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 2,
    images: ['img/1.png', 'img/2.png'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 109,
    rating: 4.8,
    title: 'the Second of example offer',
    type: 'apartment',
  },
];

const offersWithFavoriteStatus : Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: CityName.Amsterdam,
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Washing machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/1.png', 'img/2.png'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 122,
    rating: 4.8,
    title: 'The First of example offer',
    type: 'apartment',
  },{
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
      },
      name: CityName.Amsterdam,
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 2,
    images: ['img/1.png', 'img/2.png'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 109,
    rating: 4.8,
    title: 'the Second of example offer',
    type: 'apartment',
  },
];

const offerWithFavoriteStatus : Offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    name: CityName.Amsterdam,
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Washing machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/apartment-01.jpg',
  price: 122,
  rating: 4.8,
  title: 'The First of example offer',
  type: 'apartment',
};

const offerWithoutFavoriteStatus : Offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    name: CityName.Amsterdam,
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Washing machine', 'Dishwasher'],
  host: {
    avatarUrl: 'img/1.png',
    id: 3,
    isPro: true,
    name: 'Angelina',
  },
  id: 1,
  images: ['img/1.png', 'img/2.png'],
  isFavorite: false,
  isPremium: true,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 8,
  },
  maxAdults: 4,
  previewImage: 'img/apartment-01.jpg',
  price: 122,
  rating: 4.8,
  title: 'The First of example offer',
  type: 'apartment',
};

const comments : Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: new Date(),
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },{
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: new Date(),
    id: 2,
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
];

export {offers, offersWithFavoriteStatus, offerWithFavoriteStatus, offerWithoutFavoriteStatus, comments};
