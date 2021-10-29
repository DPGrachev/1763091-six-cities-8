import { User } from '../../types/state';
import { Actions } from '../../types/action';
import { ActionType, AuthorizationStatus } from '../../const';

const initialState : User = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userStatus = (state = initialState, action: Actions): User => {
  switch(action.type){
    case ActionType.RequireAuthorization:{
      return {...state,authorizationStatus: action.payload};
    }
    case ActionType.RequireLogout: {
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    }
    default: {
      return state;
    }
  }
};

export {userStatus};
