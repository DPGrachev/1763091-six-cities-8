import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import { useSelector, useDispatch} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user-status/selectors';
import { AuthorizationStatus } from '../../const';
import { requireLogout } from '../../store/action';

type HeaderProps = {
  isLoginScreen? : boolean,
}

function Header({isLoginScreen} : HeaderProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
  const onClickSignOut = () => dispatch(requireLogout());

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {!isLoginScreen &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {authorizationStatus === AuthorizationStatus.Auth
                      ? <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      : <span className="header__login">Sign in</span>}
                  </Link>
                </li>
                {authorizationStatus === AuthorizationStatus.Auth &&
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout" onClick={onClickSignOut}>Sign out</span>
                  </a>
                </li>}
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );

}

export default Header;
