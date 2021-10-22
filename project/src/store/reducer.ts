import { State } from '../types/state';
import { Actions, ActionType } from '../types/action';
import { offers } from '../mocks/offers';
import { CitiesNames } from '../const';

const initialState : State = {
  city: CitiesNames.Amsterdam,
  offers: offers,
};

const reducer = (state : State = initialState, action: Actions): State => {
  switch(action.type){
    case ActionType.SetCity: {
      return {...state, city: action.city};
    }
    case ActionType.SetOffers: {
      return {...state, offers: action.offers};
    }
    default: {
      return state;
    }
  }
};

export {reducer};
