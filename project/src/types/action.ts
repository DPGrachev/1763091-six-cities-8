import { setCity, setOffers, setSortOption, requireAuthorization, requireLogout } from '../store/action';
import { ActionType } from '../const';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';

type SetCity = {
  type: ActionType.SetCity,
  payload: {
    currentCity: string,
  },
};

type SetOffers = {
  type: ActionType.SetOffers,
};

type SetSortOption = {
  type: ActionType.SetSortOption,
  payload: {
    currentSortOption: string,
  },
}

type Actions =
  | ReturnType<typeof setCity>
  | ReturnType<typeof setOffers>
  | ReturnType<typeof setSortOption>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {SetCity, SetOffers, SetSortOption, Actions, ThunkActionResult, ThunkAppDispatch};
