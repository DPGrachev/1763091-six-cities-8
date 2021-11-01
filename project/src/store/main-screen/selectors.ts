import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

const getCurrentCity = (state: State) : string => state[NameSpace.Main].currentCity;

const getCurrentSortOption = (state: State) : string => state[NameSpace.Main].currentSortOption;

export {getCurrentCity, getCurrentSortOption};
