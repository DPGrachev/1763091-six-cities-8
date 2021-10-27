import { State } from '../types/state';
import { Actions } from '../types/action';
import { CityName, SortOption, ActionType, AuthorizationStatus } from '../const';

const initialState : State = {
  currentCity: CityName.Paris,
  offers: [],
  currentSortOption: SortOption.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state : State = initialState, action: Actions): State => {
  switch(action.type){
    case ActionType.SetCity: {
      return {...state, currentCity: action.payload.currentCity};
    }
    case ActionType.SetOffers: {
      return {...state, offers: action.payload.offers};
    }
    case ActionType.SetSortOption: {
      return {...state, currentSortOption: action.payload.currentSortOption};
    }
    case ActionType.RequireAuthorization:{
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    }
    case ActionType.RequireLogout: {
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    }
    default: {
      return state;
    }
  }
};

export {reducer};
