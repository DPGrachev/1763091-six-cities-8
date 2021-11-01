import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import { CityName } from '../../const';

const getCurrentCity = (state: State) : CityName => state[NameSpace.Main].currentCity;

const getCurrentSortOption = (state: State) : string => state[NameSpace.Main].currentSortOption;

export {getCurrentCity, getCurrentSortOption};
