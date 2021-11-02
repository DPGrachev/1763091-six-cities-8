import {NameSpace} from '../root-reducer';
import { Offer } from '../../types/offer';
import {State} from '../../types/state';
import { getCurrentCity, getCurrentSortOption } from '../main-screen/selectors';
import { createSelector } from 'reselect';
import { SortOption } from '../../const';

const getOffers = (state: State) : Offer[] => state[NameSpace.Data].offers;

const getFavoriteOffers = (state: State) : Offer[] => state[NameSpace.Data].favoriteOffers;

const getOffersInCurrentCity = createSelector(
  getOffers,
  getCurrentCity,
  (offers, currentCity) => offers.filter((offer) => offer.city.name === currentCity),
);

const getSortedOffers = createSelector(
  getCurrentSortOption,
  getOffersInCurrentCity,
  (currentSortOption, offers) => {
    switch(currentSortOption){
      case SortOption.PriceHighToLow: {
        return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
      }
      case SortOption.PriceLowToHigh: {
        return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
      }
      case SortOption.TopRatedFirst: {
        return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
      }
      default: {
        return offers;
      }
    }
  },
);

const getLoadedDataStatus = (state: State) : boolean => state[NameSpace.Data].isDataLoaded;

export {getOffersInCurrentCity, getLoadedDataStatus, getSortedOffers, getFavoriteOffers};
