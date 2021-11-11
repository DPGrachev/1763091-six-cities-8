import { ActionType, AuthorizationStatus, CityName } from '../const';
import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

const setCity = createAction(
  ActionType.SetCity,
  (cityName: CityName) => ({
    payload: {
      currentCity: cityName,
    },
  }),
);

const setOffers = createAction(
  ActionType.SetOffers,
  (offers: Offer[]) => ({
    payload: {
      offers,
    },
  }),
);

const updateOffers = createAction(
  ActionType.UpdateOffers,
  (offer: Offer) => ({
    payload: {
      offer,
    },
  }),
);

const setFavoriteOffers = createAction(
  ActionType.SetFavoriteOffers,
  (offers: Offer[]) => ({
    payload: {
      offers,
    },
  }),
);

const updateFavoriteOffers = createAction(
  ActionType.UpdateFavoriteOffers,
  (offer: Offer) => ({
    payload: {
      offer,
    },
  }),
);

const setCurrentOffer = createAction(
  ActionType.SetCurrentOffer,
  (offer: Offer) => ({
    payload: {
      offer,
    },
  }),
);

const setComments = createAction(
  ActionType.SetComments,
  (comments: Review[]) => ({
    payload: {
      comments,
    },
  }),
);

const setUserEmail = createAction(
  ActionType.SetUserEmail,
  (userEmail: string) => ({
    payload: {
      userEmail,
    },
  }),
);

const setNearbyOffers = createAction(
  ActionType.SetNearbyOffers,
  (offers: Offer[]) => ({
    payload: {
      offers,
    },
  }),
);

const setCurrentSortOption = createAction(
  ActionType.SetSortOption,
  (sortOption: string) => ({
    payload: {
      currentSortOption: sortOption,
    },
  }),
);

const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

const requireLogout = createAction(ActionType.RequireLogout);

export {setCity, setOffers, updateOffers, setFavoriteOffers, updateFavoriteOffers, setCurrentOffer, setNearbyOffers, setComments, setCurrentSortOption, requireAuthorization, requireLogout, setUserEmail};
