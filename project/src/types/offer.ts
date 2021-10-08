type Location = {
  'latitude': number,
  'longitude': number,
  'zoom': number
}

type Offer = {
  'bedrooms': number,
  'city': {
    'location': Location,
    'name': string
  },
  'description': string,
  'goods': string[],
  'host': {
    'avatar_url': string,
    'id': number,
    'is_pro': boolean,
    'name': string
  },
  'id': number,
  'images': string[],
  'isFavorite': boolean,
  'isPremium': boolean,
  'location': Location,
  'maxAdults': number,
  'previewImage': string,
  'price': number,
  'rating': number,
  'title': string,
  'type': string
}

export type {Offer};
