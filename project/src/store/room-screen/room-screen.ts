import { RoomScreen } from '../../types/state';
import { createReducer } from '@reduxjs/toolkit';
import { setCurrentOffer, setComments, setNearbyOffers } from '../action';

const initialState : RoomScreen = {
  currentOffer : null,
  comments: [],
  nearbyOffers: [],
};

const roomScreen = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload.offer;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload.comments;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload.offers;
    });
});

export {roomScreen};
