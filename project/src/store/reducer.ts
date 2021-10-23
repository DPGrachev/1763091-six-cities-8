import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';
import { offers } from '../mocks/offers';
import { CitiesNames } from '../const';

const getOffersInCurrentCity = (cityName:string) => offers.slice().filter((offer) => offer.city.name === cityName);

const initialState : State = {
  currentCity: CitiesNames.Paris,
  offers: getOffersInCurrentCity(CitiesNames.Paris),
};

const reducer = (state : State = initialState, action: Actions): State => {
  switch(action.type){
    case ActionType.SetCity: {
      return {...state, currentCity: action.payload.currentCity};
    }
    case ActionType.SetOffers: {
      return {...state, offers: getOffersInCurrentCity(state.currentCity)};
    }
    default: {
      return state;
    }
  }
};

export {reducer};
