import { Link } from 'react-router-dom';
import Header from '../header/header';
import EmptyFavoriteScreen from '../empty-favorite-screen/empty-favorite-screen';
import {AppRoute} from '../../const';
import FavoriteOfferCard from '../favorite-offer-card/favorite-offer-card';
import {useDispatch, useSelector} from 'react-redux';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/data-offers/selectors';
import { useEffect } from 'react';

function FavoritesScreen(): JSX.Element{
  const dispatch = useDispatch();
  const favoriteOffers = useSelector(getFavoriteOffers);

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
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="/">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoriteOffers.map((favoriteOfferCard) => <FavoriteOfferCard key={favoriteOfferCard.id} offer={favoriteOfferCard}/>)}
                  </div>
                </li>
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
