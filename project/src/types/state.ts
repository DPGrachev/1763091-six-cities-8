import { AuthorizationStatus } from '../const';
import { Offer } from './offer';
import { Review } from './review';
import {RootState} from '../store/root-reducer';

type State = RootState;

type User = {
  authorizationStatus: AuthorizationStatus,
}

type MainScreen = {
  currentCity: string,
  currentSortOption: string,
}

type RoomScreen = {
  currentOffer: Offer | null,
  comments: Review[],
  nearbyOffers: Offer[],
}

type DataOffers = {
  offers: Offer[],
  isDataLoaded: boolean,
}

export type {User, MainScreen, RoomScreen, DataOffers, State};
