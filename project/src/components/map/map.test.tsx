import {render} from '@testing-library/react';
import Map from './map';
import { CityName } from '../../const';
import { offers, offerWithFavoriteStatus } from '../../utils/mocks';

describe('Component: Map', () => {
  const currentCity = CityName.Amsterdam;

  it('should render correctly in main screen', () => {
    const {container} = render(<Map city={currentCity} offers={offers}/>);

    expect(container.querySelector('.cities__map')).toBeInTheDocument();
    expect(container.querySelector('.property__map')).not.toBeInTheDocument();
  });

  it('should render correctly in room screen', () => {
    const {container} = render(<Map city={currentCity} offers={offers} offerFromRoomScreen={offerWithFavoriteStatus}/>);

    expect(container.querySelector('.cities__map')).not.toBeInTheDocument();
    expect(container.querySelector('.property__map')).toBeInTheDocument();  });
});
