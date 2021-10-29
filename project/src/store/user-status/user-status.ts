import { User } from '../../types/state';
import { AuthorizationStatus } from '../../const';
import { createReducer } from '@reduxjs/toolkit';
import { requireAuthorization, requireLogout } from '../action';

const initialState : User = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userStatus = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});

export {userStatus};
