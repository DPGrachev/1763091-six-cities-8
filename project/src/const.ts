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
  RequireAuthorization = 'user-status/require-authorization',
  RequireLogout = 'user-status/require-logout',
}

const enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Nearby = '/nearby',
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

export {AppRoute, AuthorizationStatus, ActionType, CityName, SortOption, APIRoute};
