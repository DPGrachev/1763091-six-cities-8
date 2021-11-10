import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import FavoriteOfferCard from './favorite-offer-card';
import { offerWithFavoriteStatus } from '../../utils/mocks';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: FavoriteOfferCard', () => {
  const store = mockStore();
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoriteOfferCard offer={offerWithFavoriteStatus}/>
        </Router>
      </Provider>);

    expect(screen.getByText(/In bookmarks/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
    expect(screen.getByText(offerWithFavoriteStatus.title)).toBeInTheDocument();
  });
});
