import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Switch, Route, Router as  BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../const';
import LoadingScreen from '../loading/loading';
import browserHistory from '../../browser-history';
import {getAuthorizationStatus} from '../../store/user-status/selectors';
import { getLoadedDataStatus} from '../../store/data-offers/selectors';
import { useSelector} from 'react-redux';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getLoadedDataStatus);

  if(!isDataLoaded || isCheckedAuth(authorizationStatus)){
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen />
        </Route>
        <Route
          exact
          path={AppRoute.Login}
          render={() => <LoginScreen/>}
        />
        <Route exact path={AppRoute.Room}>
          <RoomScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen />}
        >
        </PrivateRoute>
        <Route path={AppRoute.NotFound} >
          <NotFoundScreen />
        </Route>
        <Route >
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
