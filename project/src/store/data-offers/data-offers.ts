import { DataOffers } from '../../types/state';
import { createReducer } from '@reduxjs/toolkit';
import { setFavoriteOffers, setOffers } from '../action';

const initialState : DataOffers = {
  offers: [],
  favoriteOffers: [],
  isDataLoaded: false,
};

const dataOffers = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state,action) => {
      state.offers = action.payload.offers;
      state.isDataLoaded = true;
    })
    .addCase(setFavoriteOffers,(state,action) => {
      state.favoriteOffers = action.payload.offers;
    });
});


export {dataOffers};
