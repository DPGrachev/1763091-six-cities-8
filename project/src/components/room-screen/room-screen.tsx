import Logo from '../logo/logo';
import {Offer} from '../../types/offer';
import {useParams, Link} from 'react-router-dom';
import { AppRoute, ONE_STAR_RATING_PERCENT } from '../../const';
import NewCommentForm from '../new-comment-form/new-comment-form';
import ReviewsList from '../reviews-list/reviews-list';
import {reviews} from '../../mocks/reviews';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';

type RoomScreenProps = {
  offers: Offer[];
}

type Params = {
  id: string;
}

function RoomScreen({offers}: RoomScreenProps): JSX.Element {
  const params: Params = useParams();
  const currentRoomId = Number(params.id);
  const currentRoom = offers.find((offer)=> offer.id === currentRoomId) as Offer;
  const similarOffers = offers.filter((offer) => offer.id !== currentRoomId);
  const {price, description, goods, title, city, isPremium, rating, type, bedrooms, maxAdults, images, host} = currentRoom;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="Studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium
                ? <div className="property__mark"><span>Premium</span></div>
                : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${ONE_STAR_RATING_PERCENT*rating}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((feature) => (
                    <li className="property__inside-item" key={feature}>
                      {feature}
                    </li>))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro
                    ? <span className="property__user-status">Pro</span>
                    : ''}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews}/>
                <NewCommentForm />
              </section>
            </div>
          </div>
          <Map city={city.location} offers={similarOffers} isRoomScreenMap/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={similarOffers} isRoomScreenOffersList/>
          </section>
        </div>
      </main>
    </div>);
}

export default RoomScreen;
