import { userStatus } from './user-status';
import { AuthorizationStatus } from '../../const';
import { requireAuthorization, requireLogout } from '../action';

describe('Reducer: userStatus', () => {
  it('without additional parameters should return initial state', () => {
    expect(userStatus(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown});
  });

  it('should update authorization status by a given status', () => {
    const state = {authorizationStatus: AuthorizationStatus.Unknown};
    expect(userStatus(state, requireAuthorization(AuthorizationStatus.Auth)))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth});
  });

  it('should update authorization status for No authorization', () => {
    const state = {authorizationStatus: AuthorizationStatus.Unknown};
    expect(userStatus(state, requireLogout()))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth});
  });
});
