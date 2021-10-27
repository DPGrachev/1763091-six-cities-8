const ONE_STAR_RATING_PERCENT = 20;

const getRatingInStars = (rating: number): string => `${ONE_STAR_RATING_PERCENT*rating}%`;

export {getRatingInStars};
