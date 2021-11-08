import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import MainScreen from './main-screen';
import { CityName, AuthorizationStatus } from '../../const';
import { offers } from '../../utils/mocks';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: MainScreen', () => {
  const store = mockStore({
    DATA: {offers: offers},
    MAIN: {
      currentCity: CityName.Amsterdam,
    },
    USER: {authorizationStatus: AuthorizationStatus.Auth},
  });

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <MainScreen/>
        </Router>
      </Provider>);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(container.querySelector('.cities')).toBeInTheDocument();
  });
});
