import { ActionType, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

const setCity = (cityName:string) => ({
  type: ActionType.SetCity,
  payload: {
    currentCity: cityName,
  },
} as const);

const setOffers = (offers: Offer[]) => ({
  type: ActionType.SetOffers,
  payload: {
    offers,
  },
} as const);

const setCurrentOffer = (offer: Offer) => ({
  type: ActionType.SetCurrentOffer,
  payload: {
    offer,
  },
} as const);

const setComments = (comments: Review[]) => ({
  type: ActionType.SetComments,
  payload: {
    comments,
  },
} as const);

const setNearbyOffers = (offers: Offer[]) => ({
  type: ActionType.SetNearbyOffers,
  payload: {
    offers,
  },
} as const);

const setSortOption = (sortOption: string) => ({
  type: ActionType.SetSortOption,
  payload: {
    currentSortOption: sortOption,
  },
} as const);

const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export {setCity, setOffers, setCurrentOffer, setNearbyOffers, setComments, setSortOption, requireAuthorization, requireLogout};
