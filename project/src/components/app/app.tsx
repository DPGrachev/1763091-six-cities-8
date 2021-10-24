import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../const';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';

const mapStateToProps = ({offers}:State) => ({
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({offers}: PropsFromRedux): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen offers={offers}/>
        </Route>
        <Route exact path={AppRoute.Login}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.Room}>
          <RoomScreen offers={offers}/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen offers={offers}/>}
          authorizationStatus={AuthorizationStatus.Auth}
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
