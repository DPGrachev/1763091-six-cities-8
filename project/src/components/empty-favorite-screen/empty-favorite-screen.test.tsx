import {render, screen} from '@testing-library/react';
import EmptyFavoriteScreen from './empty-favorite-screen';

describe('Component: EmptyFavoriteScreen', () => {
  it('should render correctly', () => {
    render(<EmptyFavoriteScreen />);

    expect(screen.getByText('Favorites (empty)')).toBeInTheDocument();
    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
    expect(screen.getByText('Save properties to narrow down search or plan your future trips.')).toBeInTheDocument();

  });
});
