import { AuthorizationStatus } from '../const';
import { Offer } from './offer';
import { Review } from './review';

type State = {
  currentCity: string,
  offers: Offer[],
  currentOffer: Offer | null,
  comments: Review[],
  nearbyOffers: Offer[],
  currentSortOption: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}

export type {State};
