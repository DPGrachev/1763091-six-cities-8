import { loginAction } from '../../store/api-actions';
import Header from '../header/header';
import { FormEvent, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, CityName } from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import { getRandomInt } from '../../utils/utils';
import { getAuthorizationStatus } from '../../store/user-status/selectors';
import { setCity } from '../../store/action';

const getRandomCity = (array : CityName[]): CityName => array[getRandomInt(0, array.length - 1)];

function LoginScreen(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const randomCityName = getRandomCity(Object.values(CityName));

  if(authorizationStatus === AuthorizationStatus.Auth){
    history.push(AppRoute.Main);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
      history.push(AppRoute.Main);
    }
  };

  const handleCityClick = () => {
    dispatch(setCity(randomCityName));
  };

  return (
    <div className="page page--gray page--login">
      <Header isLoginScreen/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required pattern='[A-Za-zА-Яа-яЁё]{1,}[0-9]{1,}'/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={handleCityClick}>
                <span>{randomCityName}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>);
}

export default LoginScreen;
