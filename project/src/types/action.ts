import { ActionType } from '../const';

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

type Actions = SetCity | SetOffers | SetSortOption

export type {SetCity, SetOffers, SetSortOption, Actions};
