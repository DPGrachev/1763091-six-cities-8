import { MainScreen} from '../../types/state';
import { Actions } from '../../types/action';
import { CityName, SortOption, ActionType } from '../../const';

const initialState : MainScreen = {
  currentCity: CityName.Paris,
  currentSortOption: SortOption.Popular,
};

const mainScreen = (state = initialState, action: Actions): MainScreen => {
  switch(action.type){
    case ActionType.SetCity: {
      return {...state, currentCity: action.payload.currentCity};
    }
    case ActionType.SetSortOption: {
      return {...state, currentSortOption: action.payload.currentSortOption};
    }
    default: {
      return state;
    }
  }
};

export {mainScreen};
