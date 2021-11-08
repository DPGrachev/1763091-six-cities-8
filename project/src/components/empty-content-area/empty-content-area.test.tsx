import {render, screen} from '@testing-library/react';
import EmptyContentArea from './empty-content-area';
import { CityName } from '../../const';

describe('Component: EmptyContentArea', () => {
  it('should render correctly', () => {
    const currentCity = CityName.Paris;

    render(<EmptyContentArea currentCity={currentCity}/>);

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText(`We could not find any property available at the moment in ${currentCity}`)).toBeInTheDocument();

  });
});
