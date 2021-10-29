import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

const getComments = (state: State) : Review[] => state[NameSpace.room].comments;

const getCurrentOffer = (state: State) : Offer|null => state[NameSpace.room].currentOffer;

const getNearbyOffers = (state: State) : Offer[] => state[NameSpace.room].nearbyOffers;

export {getComments, getCurrentOffer, getNearbyOffers};
