import { combineReducers } from 'redux';
import { dataOffers } from './data-offers/data-offers';
import { mainScreen } from './main-screen/main-screen';
import { roomScreen } from './room-screen/room-screen';
import { userStatus } from './user-status/user-status';

const enum NameSpace {
  Data = 'DATA',
  Main = 'MAIN',
  Room = 'ROOM',
  User = 'USER',
}

const rootReducer = combineReducers({
  [NameSpace.Data]: dataOffers,
  [NameSpace.Main]: mainScreen,
  [NameSpace.Room]: roomScreen,
  [NameSpace.User]: userStatus,
});

type RootState = ReturnType<typeof rootReducer>;

export {NameSpace, rootReducer};
export type {RootState};
