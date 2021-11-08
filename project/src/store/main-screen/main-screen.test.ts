import { mainScreen } from './main-screen';
import { setCity, setCurrentSortOption } from '../action';
import { CityName, SortOption } from '../../const';

describe('Reducer: mainScreen', () => {
  it('without additional parameters should return initial state', () => {
    expect(mainScreen(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        currentCity: CityName.Paris,
        currentSortOption: SortOption.Popular,
      });
  });

  it('should update curent city by current value', () => {
    const state = {
      currentCity: CityName.Paris,
      currentSortOption: SortOption.Popular,
    };
    expect(mainScreen(state, setCity(CityName.Dusseldorf)))
      .toEqual({
        currentCity: CityName.Dusseldorf,
        currentSortOption: SortOption.Popular,
      });
  });

  it('should update curent sort option by current value', () => {
    const state = {
      currentCity: CityName.Paris,
      currentSortOption: SortOption.Popular,
    };
    expect(mainScreen(state, setCurrentSortOption(SortOption.PriceLowToHigh)))
      .toEqual({
        currentCity: CityName.Paris,
        currentSortOption: SortOption.PriceLowToHigh,
      });
  });
});
