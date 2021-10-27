type Review = {
  comment: string,
  date: Date,
  id: number,
  rating: number,
  user: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string
  }
};

type ReviewFromServer = {
  comment: string,
  date: Date,
  id: number,
  rating: number,
  user: {
    'avatar_url': string,
    id: number,
    'is_pro': boolean,
    name: string
  }
};

export type {Review, ReviewFromServer};
