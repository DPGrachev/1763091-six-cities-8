import {ThunkActionResult} from '../types/action';
import {setOffers, requireAuthorization, requireLogout} from './action';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';
import { Offer, OfferFromServer } from '../types/offer';
import {AuthData} from '../types/auth-data';

const adaptToClient = (offers: OfferFromServer[]): Offer[] => {
  const adaptedOffers: Offer[] = [];
  offers.map((offer) => adaptedOffers.push({
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
  }));
  return adaptedOffers;
};

const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<OfferFromServer[]>(APIRoute.Offers)
      .then((response) => dispatch(setOffers(adaptToClient(response.data))));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };


const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export {fetchOffersAction, checkAuthAction, loginAction, logoutAction};
