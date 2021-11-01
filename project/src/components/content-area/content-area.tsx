import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import Sort from '../sort/sort';
import { useState } from 'react';
import { getSortedOffers } from '../../store/data-offers/selectors';
import { useSelector} from 'react-redux';
import { CityName } from '../../const';

type ContentAreaProps = {
  currentCity: CityName,
}

function ContentArea ({currentCity} : ContentAreaProps): JSX.Element {
  const [idActiveOffer, setIdActiveOffer] = useState<null | number>(null);
  const sortedOffers = useSelector(getSortedOffers);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{sortedOffers.length} places to stay in {currentCity}</b>
        <Sort />
        <OffersList offers={sortedOffers} onCardFocus={setIdActiveOffer}/>
      </section>
      <div className="cities__right-section">
        <Map city={currentCity} offers={sortedOffers} idActiveOffer={idActiveOffer}/>
      </div>
    </div>
  );
}

export default ContentArea;
