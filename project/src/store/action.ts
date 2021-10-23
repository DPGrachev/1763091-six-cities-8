import { SetCity, SetOffers, SetSortOption } from '../types/action';
import { ActionType } from '../const';

const setCity = (cityName:string) : SetCity => ({
  type: ActionType.SetCity,
  payload: {
    currentCity: cityName,
  },
});

const setOffers = () : SetOffers => ({
  type: ActionType.SetOffers,
});

const setSortOption = (sortOption: string) : SetSortOption => ({
  type: ActionType.SetSortOption,
  payload: {
    currentSortOption: sortOption,
  },
});

export {setCity, setOffers, setSortOption};
