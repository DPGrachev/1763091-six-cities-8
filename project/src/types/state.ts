import { AuthorizationStatus } from '../const';
import { Offer } from './offer';

type State = {
  currentCity: string,
  offers: Offer[],
  currentSortOption: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}

export type {State};
