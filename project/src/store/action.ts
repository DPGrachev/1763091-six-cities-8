import { ActionType, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';

const setCity = (cityName:string) => ({
  type: ActionType.SetCity,
  payload: {
    currentCity: cityName,
  },
} as const);

const setOffers = (offers: Offer[]) => ({
  type: ActionType.SetOffers,
  payload: {
    offers: offers,
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

export {setCity, setOffers, setSortOption, requireAuthorization, requireLogout};
