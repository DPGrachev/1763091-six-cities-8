import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import FavoriteOffersList from './favorite-offers-list';
import { offers } from '../../utils/mocks';
import { CityName } from '../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: FavoriteOffersList', () => {
  const store = mockStore();
  const city = CityName.Cologne;
  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <FavoriteOffersList offers={offers} city={city}/>
        </Router>
      </Provider>);

    expect(screen.getByText(city)).toBeInTheDocument();
    expect(container.querySelector('.favorites__places')).toBeInTheDocument();
  });
});
