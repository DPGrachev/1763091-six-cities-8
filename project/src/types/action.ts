import { Offer } from './offer';

const enum ActionType {
  SetCity = 'main-screen/set-city',
  SetOffers = 'main-screen/set-offers'
}

type SetCity = {
  type: ActionType.SetCity,
  city: string,
};

type SetOffers = {
  type: ActionType.SetOffers,
  offers: Offer[],
};

type Actions = SetCity | SetOffers

export type {SetCity, SetOffers, Actions};
export {ActionType};
