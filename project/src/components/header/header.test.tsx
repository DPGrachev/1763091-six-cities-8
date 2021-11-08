import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Header from './header';
import userEvent from '@testing-library/user-event';
import { requireLogout } from '../../store/action';
import { AuthorizationStatus } from '../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Header', () => {

  it('should render correctly if this is not login screen and user logged in', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.Auth},
    });

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>);

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(container.querySelector('.header__nav')).toBeInTheDocument();
    expect(container.querySelector('.header__login')).not.toBeInTheDocument();
    expect(container.querySelector('.header__signout')).toBeInTheDocument();
  });

  it('should render correctly if this is not login screen and user not logged in', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NoAuth},
    });

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>);

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(container.querySelector('.header__nav')).toBeInTheDocument();
    expect(container.querySelector('.header__login')).toBeInTheDocument();
    expect(container.querySelector('.header__signout')).not.toBeInTheDocument();
  });

  it('should render correctly if this login screen', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.Auth},
    });

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Header isLoginScreen/>
        </Router>
      </Provider>);

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(container.querySelector('.header__nav')).not.toBeInTheDocument();
  });

  it('when user click sign out button should dispatch requireLogout', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.Auth},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>);

    userEvent.click(screen.getByText(/Sign out/i));

    expect(store.getActions()).toEqual([
      requireLogout(),
    ]);
  });
});
