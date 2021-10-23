import { ActionType, SetCity, SetOffers } from '../types/action';

const setCity = (cityName:string) : SetCity => ({
  type: ActionType.SetCity,
  payload: {
    currentCity: cityName,
  },
});

const setOffers = () : SetOffers => ({
  type: ActionType.SetOffers,
});

export {setCity, setOffers};
