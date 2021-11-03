const enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Main = '/',
  NotFound = '/404'
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const enum ActionType {
  SetCity = 'main-screen/set-city',
  SetSortOption = 'main-screen/set-sort-option',
  SetCurrentOffer = 'room-screen/set-current-offer',
  SetComments = 'room-screen/set-comments',
  SetNearbyOffers = 'room-screen/set-nearby-offers',
  SetOffers = 'data-offers/set-offers',
  UpdateOffers = 'data-offers/update-offers',
  SetFavoriteOffers = 'data-offers/set-favorite-offers',
  UpdateFavoriteOffers = 'data-offers/update-favorite-offers',
  RequireAuthorization = 'user-status/require-authorization',
  RequireLogout = 'user-status/require-logout',
}

const enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Nearby = '/nearby',
  Favorite = '/favorite',
}

enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

enum SortOption {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

const CityCoordinates = {
  [CityName.Paris] : {latitude: 48.85661, longitude: 2.351499, zoom: 13},
  [CityName.Amsterdam] : {latitude: 52.37454, longitude: 4.897976, zoom: 13},
  [CityName.Brussels] : {latitude: 50.846557, longitude: 4.351697, zoom: 13},
  [CityName.Cologne] : {latitude: 50.938361, longitude: 6.959974, zoom: 13},
  [CityName.Dusseldorf] : {latitude: 51.225402, longitude: 6.776314, zoom: 13},
  [CityName.Hamburg] : {latitude: 53.550341, longitude: 10.000654, zoom: 13},
};

export {AppRoute, AuthorizationStatus, ActionType, CityName, SortOption, APIRoute, CityCoordinates};
