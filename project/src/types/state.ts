import { AuthorizationStatus, CityName } from '../const';
import { Offer } from './offer';
import { Review } from './review';
import {RootState} from '../store/root-reducer';

type State = RootState;

type User = {
  authorizationStatus: AuthorizationStatus,
  userEmail: string,
}

type MainScreen = {
  currentCity: CityName,
  currentSortOption: string,
}

type RoomScreen = {
  currentOffer: Offer | null,
  comments: Review[],
  nearbyOffers: Offer[],
}

type DataOffers = {
  offers: Offer[],
  favoriteOffers: Offer[],
  isDataLoaded: boolean,
}

export type {User, MainScreen, RoomScreen, DataOffers, State};
