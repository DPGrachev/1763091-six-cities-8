import Header from '../header/header';
import {useParams} from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import NewCommentForm from '../new-comment-form/new-comment-form';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import { getRatingInStars } from '../../utils/utils';
import OffersList from '../offers-list/offers-list';
import { fetchCurrentOfferAction, fetchCommentsAction, fetchNearbyOffersAction, addNewCommentAction } from '../../store/api-actions';
import LoadingScreen from '../loading/loading';
import { useEffect } from 'react';
import { CommentPost } from '../../types/review';
import {getComments, getCurrentOffer, getNearbyOffers} from '../../store/room-screen/selectors';
import {getAuthorizationStatus} from '../../store/user-status/selectors';
import {useDispatch, useSelector} from 'react-redux';

type Params = {
  id: string;
}

function RoomScreen(): JSX.Element {
  const params: Params = useParams();
  const currentRoomId = Number(params.id);
  const currentOffer = useSelector(getCurrentOffer);
  const nearbyOffers = useSelector(getNearbyOffers);
  const comments = useSelector(getComments);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();


  const handleNewCommentSubmit = ({comment, rating}: CommentPost) => dispatch(addNewCommentAction({comment, rating}, currentRoomId));

  useEffect(()=>{
    dispatch(fetchCurrentOfferAction(currentRoomId));
    dispatch(fetchCommentsAction(currentRoomId));
    dispatch(fetchNearbyOffersAction(currentRoomId));
  }, [currentRoomId, dispatch]);

  if(!currentOffer || currentOffer.id !== currentRoomId){
    return <LoadingScreen />;
  }
  const {price, description, goods, title, city, isPremium, rating, type, bedrooms, maxAdults, images, host} = currentOffer;

  return (
    <div className="page">
      <Header />
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
              {
                isPremium &&
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
              }
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
                  <span style={{width: getRatingInStars(rating)}}></span>
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
                  {
                    host.isPro &&
                      <span className="property__user-status">Pro</span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={comments}/>
                {authorizationStatus === AuthorizationStatus.Auth && <NewCommentForm onSubmit={handleNewCommentSubmit}/>}
              </section>
            </div>
          </div>
          <Map city={city.name} offers={nearbyOffers} isRoomScreenMap/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={nearbyOffers} isRoomScreenOffersList/>
          </section>
        </div>
      </main>
    </div>);
}

export default RoomScreen;
