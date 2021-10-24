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
  SetOffers = 'main-screen/set-offers',
  SetSortOption = 'main-screen/set-sort-option'
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

export {AppRoute, AuthorizationStatus, ActionType, CityName, SortOption};
