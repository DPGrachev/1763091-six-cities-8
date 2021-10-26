import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Switch, Route, Router as  BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../const';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import LoadingScreen from '../loading/loading';
import browserHistory from '../../browser-history';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const mapStateToProps = ({offers, authorizationStatus, isDataLoaded}:State) => ({
  offers,
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({offers, authorizationStatus, isDataLoaded}: PropsFromRedux): JSX.Element {
  if(!isDataLoaded || isCheckedAuth(authorizationStatus)){
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen offers={offers}/>
        </Route>
        <Route
          exact
          path={AppRoute.Login}
          render={({history}) => (
            <LoginScreen
              onSuccesSubmit={() => history.push(AppRoute.Main)}
            />
          )}
        />
        <Route exact path={AppRoute.Room}>
          <RoomScreen offers={offers}/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen offers={offers}/>}
        >
        </PrivateRoute>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default connector(App);
export {App};
