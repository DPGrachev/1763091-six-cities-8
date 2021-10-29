import {NameSpace} from '../root-reducer';
import { Offer } from '../../types/offer';
import {State} from '../../types/state';

const getOffers = (state: State) : Offer[] => state[NameSpace.data].offers;

const getLoadedDataStatus = (state: State) : boolean => state[NameSpace.data].isDataLoaded;

export {getOffers, getLoadedDataStatus};
