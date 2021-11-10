import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import OffersList from './offers-list';
import { offers } from '../../utils/mocks';
import { AuthorizationStatus } from '../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: OffersList', () => {
  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.Auth},
  });
  it('should render correctly if this is not room screen', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <OffersList offers={offers}/>
        </Router>
      </Provider>);

    expect(container.querySelector('.near-places__list')).not.toBeInTheDocument();
    expect(container.querySelector('.cities__places-list')).toBeInTheDocument();
  });

  it('should render correctly if this is room screen', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <OffersList offers={offers} isRoomScreenOffersList/>
        </Router>
      </Provider>);

    expect(container.querySelector('.near-places__list')).toBeInTheDocument();
    expect(container.querySelector('.cities__places-list')).not.toBeInTheDocument();
  });
});
