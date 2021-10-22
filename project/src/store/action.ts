import { ActionType, SetCity, SetOffers } from '../types/action';

const setCity = (cityName:string) : SetCity => ({
  type: ActionType.SetCity,
  currentCity: cityName,
});

const setOffers = () : SetOffers => ({
  type: ActionType.SetOffers,
});

export {setCity, setOffers};
