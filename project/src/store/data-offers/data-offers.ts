import { Data } from '../../types/state';
import { Actions } from '../../types/action';
import { ActionType } from '../../const';

const initialState : Data = {
  offers: [],
  isDataLoaded: false,
};

const dataOffers = (state = initialState, action: Actions): Data => {
  switch(action.type){
    case ActionType.SetOffers: {
      return {
        ...state,
        offers: action.payload.offers,
        isDataLoaded: true,
      };
    }
    default: {
      return state;
    }
  }
};

export {dataOffers};
