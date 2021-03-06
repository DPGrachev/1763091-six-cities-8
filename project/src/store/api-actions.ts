import {ThunkActionResult} from '../types/action';
import {setOffers, setComments, setNearbyOffers, requireAuthorization, requireLogout, setCurrentOffer, setFavoriteOffers, updateFavoriteOffers, updateOffers, setUserEmail} from './action';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';
import { Offer, OfferFromServer } from '../types/offer';
import {AuthData} from '../types/auth-data';
import { CommentPost, Review, ReviewFromServer } from '../types/review';
import {toast} from 'react-toastify';
import { enableNewCommentForm } from '../utils/utils';

const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';
const ADD_NEW_COMMENT_FAIL_MESSAGE = 'Ошибка отправки комментария';

const adaptOfferToClient = (offer: OfferFromServer): Offer =>
  ({
    bedrooms: offer.bedrooms,
    city: {
      location: {
        latitude: offer.city.location.latitude,
        longitude: offer.city.location.longitude,
        zoom: offer.city.location.zoom,
      },
      name: offer.city.name,
    },
    description: offer.description,
    goods: offer.goods,
    host: {
      avatarUrl: offer.host.avatar_url,
      id: offer.host.id,
      isPro: offer.host.is_pro,
      name: offer.host.name,
    },
    id: offer.id,
    images: offer.images,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    location: {
      latitude: offer.location.latitude,
      longitude: offer.location.longitude,
      zoom: offer.location.zoom,
    },
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    type: offer.type,
  });

const adaptReviewToClient = (review: ReviewFromServer): Review =>
  ({
    comment: review.comment,
    date: review.date,
    id: review.id,
    rating: review.rating,
    user: {
      avatarUrl: review.user.avatar_url,
      id: review.user.id,
      isPro: review.user.is_pro,
      name: review.user.name,
    },
  });

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<OfferFromServer[]>(APIRoute.Offers)
      .then((response) => response.data.map((offer) => adaptOfferToClient(offer)))
      .then((response) => dispatch(setOffers(response)));
  };

const fetchFavoriteOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<OfferFromServer[]>(APIRoute.Favorite)
      .then((response) => response.data.map((offer) => adaptOfferToClient(offer)))
      .then((response) => dispatch(setFavoriteOffers(response)));
  };

const fetchCurrentOfferAction = (currentOfferId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<OfferFromServer>(`${APIRoute.Offers}/${currentOfferId}`)
      .then((response) => {
        if(response?.data){
          dispatch(setCurrentOffer(adaptOfferToClient(response.data)));
        }
      });
  };

const fetchCommentsAction = (currentOfferId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<ReviewFromServer[]>(`${APIRoute.Comments}/${currentOfferId}`)
      .then((response) => response.data.map((review) => adaptReviewToClient(review)))
      .then((response) => dispatch(setComments(response)));
  };

const fetchNearbyOffersAction = (currentOfferId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<OfferFromServer[]>(`${APIRoute.Offers}/${currentOfferId}${APIRoute.Nearby}`)
      .then((response) => response.data.map((offer) => adaptOfferToClient(offer)))
      .then((response) => dispatch(setNearbyOffers(response)));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login)
        .then((response) => {
          if(response.data){
            dispatch(requireAuthorization(AuthorizationStatus.Auth));
          }
        });
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

const addNewCommentAction = ({comment, rating}: CommentPost, currentOfferId: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try{
      await api.post<ReviewFromServer[]>(`${APIRoute.Comments}/${currentOfferId}`, {comment, rating})
        .then((response) => response.data.map((review) => adaptReviewToClient(review)))
        .then((response) => dispatch(setComments(response)));
    } catch {
      toast.warn(ADD_NEW_COMMENT_FAIL_MESSAGE);
    }
    enableNewCommentForm();
  };

const changeFavoriteStatus = (currentOfferId: number, favoriteStatus: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post<OfferFromServer>(`${APIRoute.Favorite}/${currentOfferId}/${favoriteStatus}`)
      .then((response) => adaptOfferToClient(response.data))
      .then((response) => {
        dispatch(updateOffers(response));
        dispatch(updateFavoriteOffers(response));
      });
  };

const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setUserEmail(email));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export {fetchOffersAction, fetchFavoriteOffersAction, fetchCommentsAction, fetchCurrentOfferAction, fetchNearbyOffersAction, addNewCommentAction, checkAuthAction, loginAction, logoutAction, changeFavoriteStatus};
