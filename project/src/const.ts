const enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Main = '/',
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const enum ActionType {
  SetCity = 'main-screen/set-city',
  SetSortOption = 'main-screen/set-sort-option',
  SetOffers = 'data/set-offers',
  RequireAuthorization = 'user/require-authorization',
  RequireLogout = 'user/require-logout',
}

const enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
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
