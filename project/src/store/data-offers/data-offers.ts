import { Data } from '../../types/state';
import { createReducer } from '@reduxjs/toolkit';
import { setOffers } from '../action';

const initialState : Data = {
  offers: [],
  isDataLoaded: false,
};

const dataOffers = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state,action) => {
      state.offers = action.payload.offers;
      state.isDataLoaded = true;
    });
});


export {dataOffers};
