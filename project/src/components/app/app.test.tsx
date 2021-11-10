import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus, AppRoute, CityName, SortOption} from '../../const';
import App from './app';
import { offers, comments, offerWithFavoriteStatus } from '../../utils/mocks';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {State} from '../../types/state';
import {Action} from 'redux';

const onFakeUnauthorized = jest.fn();
const onFakeNotFound = jest.fn();
const api = createAPI(onFakeUnauthorized(),onFakeNotFound());
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const store  = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
  },
  DATA: {
    offers: offers,
    favoriteOffers: offers,
    isDataLoaded: true,
  },
  MAIN: {
    currentCity: CityName.Paris,
    currentSortOption: SortOption.Popular,
  },
  ROOM: {
    currentOffer : offerWithFavoriteStatus,
    comments: comments,
    nearbyOffers: offers,
  },
});

const history = createMemoryHistory();
const fakeApp = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('Application Routing', () => {
  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeApp);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    const storeForAuthScreen  = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
      DATA: {
        isDataLoaded: true,
      },
    });

    history.push(AppRoute.Login);
    render(
      <Provider store={storeForAuthScreen}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>);

    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
  });

  it('should render "FavoritesScreen" when user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);
    const {container} = render(fakeApp);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(container.querySelector('.favorites__list')).toBeInTheDocument();
  });

  it('should render "RoomScreen" when user navigate to "/offer/:id"', () => {
    history.push(AppRoute.Room);
    const {container} = render(fakeApp);

    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(container.querySelector('.near-places')).toBeInTheDocument();
    expect(container.querySelector('.property__gallery-container')).toBeInTheDocument();
    expect(container.querySelector('.property__container')).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
