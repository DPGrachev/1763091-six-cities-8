import { roomScreen } from './room-screen';
import { setCurrentOffer, setComments, setNearbyOffers } from '../action';
import {offers, offerWithFavoriteStatus, comments} from '../../utils/mocks';

describe('Reducer: roomScreen', () => {
  it('without additional parameters should return initial state', () => {
    expect(roomScreen(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        currentOffer : null,
        comments: [],
        nearbyOffers: [],
      });
  });

  it('should update curent offer by load offer', () => {
    const state = {
      currentOffer : null,
      comments: [],
      nearbyOffers: [],
    };
    expect(roomScreen(state, setCurrentOffer(offerWithFavoriteStatus)))
      .toEqual({
        currentOffer : offerWithFavoriteStatus,
        comments: [],
        nearbyOffers: [],
      });
  });

  it('should update comments by load offer comments', () => {
    const state = {
      currentOffer : null,
      comments: [],
      nearbyOffers: [],
    };
    expect(roomScreen(state, setComments(comments)))
      .toEqual({
        currentOffer : null,
        comments: comments,
        nearbyOffers: [],
      });
  });

  it('should update nearby offers by load nearby offers', () => {
    const state = {
      currentOffer : null,
      comments: [],
      nearbyOffers: [],
    };
    expect(roomScreen(state, setNearbyOffers(offers)))
      .toEqual({
        currentOffer : null,
        comments: [],
        nearbyOffers: offers,
      });
  });
});
