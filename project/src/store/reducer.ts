import { State } from '../types/state';
import { Actions } from '../types/action';
import { offers } from '../mocks/offers';
import { CityName, SortOption, ActionType } from '../const';

const getOffersInCurrentCity = (cityName:string) => offers.slice().filter((offer) => offer.city.name === cityName);

const initialState : State = {
  currentCity: CityName.Paris,
  offers: getOffersInCurrentCity(CityName.Paris),
  currentSortOption: SortOption.Popular,
};

const reducer = (state : State = initialState, action: Actions): State => {
  switch(action.type){
    case ActionType.SetCity: {
      return {...state, currentCity: action.payload.currentCity};
    }
    case ActionType.SetOffers: {
      return {...state, offers: getOffersInCurrentCity(state.currentCity)};
    }
    case ActionType.SetSortOption: {
      return {...state, currentSortOption: action.payload.currentSortOption};
    }
    default: {
      return state;
    }
  }
};

export {reducer};
