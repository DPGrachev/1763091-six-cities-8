enum AppRoute {
  LOGIN = '/login',
  FAVORITES = '/favorites',
  ROOM = '/offer/:id',
  MAIN = '/'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export {AppRoute, AuthorizationStatus};
