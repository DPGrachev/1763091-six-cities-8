import { Offer, OfferFromServer } from '../types/offer';
import { Review, ReviewFromServer } from '../types/review';

const ONE_STAR_RATING_PERCENT = 20;

const getRatingInStars = (rating: number): string => `${ONE_STAR_RATING_PERCENT*rating}%`;

const adaptOfferToServer = (offer: Offer): OfferFromServer =>
  ({
    bedrooms: offer.bedrooms,
    city: {
      location: {
        latitude: offer.city.location.latitude,
        longitude: offer.city.location.longitude,
        zoom: offer.city.location.zoom,
      },
      name: offer.city.name,
    },
    description: offer.description,
    goods: offer.goods,
    host: {
      'avatar_url': offer.host.avatarUrl,
      id: offer.host.id,
      'is_pro': offer.host.isPro,
      name: offer.host.name,
    },
    id: offer.id,
    images: offer.images,
    'is_favorite': offer.isFavorite,
    'is_premium': offer.isPremium,
    location: {
      latitude: offer.location.latitude,
      longitude: offer.location.longitude,
      zoom: offer.location.zoom,
    },
    'max_adults': offer.maxAdults,
    'preview_image': offer.previewImage,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: offer.type,
  });

const adaptReviewToServer = (review: Review): ReviewFromServer =>
  ({
    comment: review.comment,
    date: review.date,
    id: review.id,
    rating: review.rating,
    user: {
      'avatar_url': review.user.avatarUrl,
      id: review.user.id,
      'is_pro': review.user.isPro,
      name: review.user.name,
    },
  });

export {getRatingInStars, adaptOfferToServer,adaptReviewToServer};
