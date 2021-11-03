import { Link } from 'react-router-dom';
import Header from '../header/header';
import FavoriteOffersList from '../favorite-offers-list/favorite-offers-list';
import EmptyFavoriteScreen from '../empty-favorite-screen/empty-favorite-screen';
import {AppRoute, CityName} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getFavoriteLocation, getFavoriteOffers } from '../../store/data-offers/selectors';
import { useEffect } from 'react';
import { Offer } from '../../types/offer';

const getOffersInCurrentCity = (offers: Offer[], city: CityName) => offers.slice().filter((offer) => offer.city.name === city);

function FavoritesScreen(): JSX.Element{
  const dispatch = useDispatch();
  const favoriteOffers = useSelector(getFavoriteOffers);
  const favoriteLocations = useSelector(getFavoriteLocation);

  useEffect(()=> {
    dispatch(fetchFavoriteOffersAction());
  },[dispatch]);

  return (
    <div className="page">
      <Header />
      {favoriteOffers.length === 0
        ? <EmptyFavoriteScreen />
        :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteLocations.map((city) => <FavoriteOffersList key={city} city={city} offers={getOffersInCurrentCity(favoriteOffers,city)}/>)}
              </ul>
            </section>
          </div>
        </main>}

      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>);
}

export default FavoritesScreen;
