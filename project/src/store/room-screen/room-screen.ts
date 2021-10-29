import { RoomScreen } from '../../types/state';
import { Actions } from '../../types/action';
import { ActionType } from '../../const';

const initialState : RoomScreen = {
  currentOffer : null,
  comments: [],
  nearbyOffers: [],
};

const roomScreen = (state = initialState, action: Actions): RoomScreen => {
  switch(action.type){
    case ActionType.SetCurrentOffer: {
      return {...state, currentOffer: action.payload.offer};
    }
    case ActionType.SetComments: {
      return {...state, comments: action.payload.comments};
    }
    case ActionType.SetNearbyOffers: {
      return {...state, nearbyOffers: action.payload.offers};
    }
    default: {
      return state;
    }
  }
};

export {roomScreen};
