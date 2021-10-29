import OffersList from '../offers-list/offers-list';
import Header from '../header/header';
import Map from '../map/map';
import Sort from '../sort/sort';
import { useState } from 'react';
import CitiesList from '../cities-list/cities-list';
import { getCurrentCity} from '../../store/main-screen/selectors';
import { getSortedOffers } from '../../store/data-offers/selectors';
import { useSelector} from 'react-redux';

const getCitiesCoordinates = (city:string) => {
  switch(city){
    case 'Paris':{
      return {latitude: 48.8534,longitude: 2.3488,zoom: 10};
    }
    case 'Amsterdam':{
      return {latitude: 52.3909553943508,longitude: 4.85309666406198,zoom: 10};
    }
    default :{
      return {latitude: 52.3909553943508,longitude: 4.85309666406198,zoom: 10};
    }
  }
};

function MainScreen(): JSX.Element {
  const [idActiveOffer, setIdActiveOffer] = useState<null | number>(null);
  const currentCity = useSelector(getCurrentCity);
  const sortedOffers = useSelector(getSortedOffers);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList currentCity={currentCity}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {currentCity}</b>
              <Sort />
              <OffersList offers={sortedOffers} onCardFocus={setIdActiveOffer}/>
            </section>
            <div className="cities__right-section">
              <Map city={getCitiesCoordinates(currentCity)} offers={sortedOffers} idActiveOffer={idActiveOffer}/>
            </div>
          </div>
        </div>
      </main>
    </div>);
}

export default MainScreen;
