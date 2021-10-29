import {NameSpace} from '../root-reducer';
import { Offer } from '../../types/offer';
import {State} from '../../types/state';
import { getCurrentCity } from '../main-screen/selectors';
import { createSelector } from 'reselect';

const getOffers = (state: State) : Offer[] => state[NameSpace.data].offers;
const getOffersInCurrentCity = createSelector(
  getOffers,
  getCurrentCity,
  (offers, currentCity) => offers.filter((offer) => offer.city.name === currentCity),
);

const getLoadedDataStatus = (state: State) : boolean => state[NameSpace.data].isDataLoaded;

export {getOffersInCurrentCity, getLoadedDataStatus};
