import { MainScreen} from '../../types/state';
import { CityName, SortOption } from '../../const';
import { createReducer } from '@reduxjs/toolkit';
import { setCity, setCurrentSortOption } from '../action';

const initialState : MainScreen = {
  currentCity: CityName.Paris,
  currentSortOption: SortOption.Popular,
};

const mainScreen = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, acton) => {
      state.currentCity = acton.payload.currentCity;
    })
    .addCase(setCurrentSortOption, (state, action) => {
      state.currentSortOption = action.payload.currentSortOption;
    });
});

export {mainScreen};
