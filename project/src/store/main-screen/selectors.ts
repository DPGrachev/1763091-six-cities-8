import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

const getCurrentCity = (state: State) : string => state[NameSpace.main].currentCity;

const getCurrentSortOption = (state: State) : string => state[NameSpace.main].currentSortOption;

export {getCurrentCity, getCurrentSortOption};
