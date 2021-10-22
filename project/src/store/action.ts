import { ActionType, SetCity, SetOffers } from '../types/action';
import { Offer } from '../types/offer';

const setCity = (cityName:string) : SetCity => ({
  type: ActionType.SetCity,
  city: cityName,
});

const setOffers = (offers: Offer[]) : SetOffers => ({
  type: ActionType.SetOffers,
  offers: offers,
});

export {setCity, setOffers};
