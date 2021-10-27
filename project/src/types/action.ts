import { setCity, setOffers, setCurrentOffer, setNearbyOffers, setComments, setSortOption, requireAuthorization, requireLogout } from '../store/action';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';

type Actions =
  | ReturnType<typeof setCity>
  | ReturnType<typeof setOffers>
  | ReturnType<typeof setSortOption>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof setNearbyOffers>
  | ReturnType<typeof setComments>
  | ReturnType<typeof setCurrentOffer>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {Actions, ThunkActionResult, ThunkAppDispatch};
