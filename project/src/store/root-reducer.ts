import { combineReducers } from 'redux';
import { dataOffers } from './data-offers/data-offers';
import { mainScreen } from './main-screen/main-screen';
import { roomScreen } from './room-screen/room-screen';
import { userStatus } from './user-status/user-status';

const enum NameSpace {
  data = 'DATA',
  main = 'MAIN',
  room = 'ROOM',
  user = 'USER',
}

const rootReducer = combineReducers({
  [NameSpace.data]: dataOffers,
  [NameSpace.main]: mainScreen,
  [NameSpace.room]: roomScreen,
  [NameSpace.user]: userStatus,
});

type RootState = ReturnType<typeof rootReducer>;

export {rootReducer};
export type {RootState};
