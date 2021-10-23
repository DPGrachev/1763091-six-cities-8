const enum ActionType {
  SetCity = 'main-screen/set-city',
  SetOffers = 'main-screen/set-offers'
}

type SetCity = {
  type: ActionType.SetCity,
  payload: {
    currentCity: string,
  },
};

type SetOffers = {
  type: ActionType.SetOffers,
};

type Actions = SetCity | SetOffers

export type {SetCity, SetOffers, Actions};
export {ActionType};
