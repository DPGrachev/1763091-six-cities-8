import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus, AppRoute, CityName, SortOption} from '../../const';
import App from './app';
import { offers, comments, offerWithFavoriteStatus } from '../../utils/mocks';
import { State } from '../../types/state';

const mockStore = configureMockStore();

// USER: {
//   authorizationStatus: AuthorizationStatus.Unknown,
// },
// DATA: {
//   offers: [],
//   favoriteOffers: [],
//   isDataLoaded: false,
// },
// MAIN: {
//   currentCity: CityName.Paris,
//   currentSortOption: SortOption.Popular,
// },
// ROOM: {
//   currentOffer : null,
//   comments: [],
//   nearbyOffers: [],
// },

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

describe('Application Routing', () => {
  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeApp);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);
    render(fakeApp);

    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
  });

  // it('should render "FavoritesScreen" when user navigate to "/favorites"', () => {
  //   history.push(AppRoute.Favorites);
  //   render(fakeApp);

  //   expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  //   expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
  // });

  // it('should render "RoomScreen" when user navigate to "/offer/:id"', () => {
  //   history.push(AppRoute.Room);
  //   render(fakeApp);

  //   expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Bedrooms/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  // });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
