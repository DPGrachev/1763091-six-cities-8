import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {Actions} from '../../types/action';
import {setCity, setOffers} from '../../store/action';
import {MouseEvent} from 'react';
import { CitiesNames } from '../../const';

type CitiesListProps = {
  currentCity: string;
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange(evt : MouseEvent, currentCity: string) {
    evt.preventDefault();
    if(evt.currentTarget.textContent !== null && evt.currentTarget.textContent !== currentCity){
      dispatch(setCity(evt.currentTarget.textContent));
      dispatch(setOffers());
    }
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CitiesListProps;

function CitiesList ({currentCity, onCityChange}:ConnectedComponentProps): JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        <li className="locations__item">
          <a className={`${currentCity === CitiesNames.Paris? 'tabs__item--active': ''} locations__item-link tabs__item`} href="main.html" onClick={(evt) => onCityChange(evt,currentCity)}>
            <span>Paris</span>
          </a>
        </li>
        <li className="locations__item">
          <a className={`${currentCity === CitiesNames.Cologne? 'tabs__item--active': ''} locations__item-link tabs__item`} href="main.html" onClick={(evt) => onCityChange(evt,currentCity)}>
            <span>Cologne</span>
          </a>
        </li>
        <li className="locations__item">
          <a className={`${currentCity === CitiesNames.Brussels? 'tabs__item--active': ''} locations__item-link tabs__item`} href="main.html" onClick={(evt) => onCityChange(evt,currentCity)}>
            <span>Brussels</span>
          </a>
        </li>
        <li className="locations__item">
          <a className={`${currentCity === CitiesNames.Amsterdam? 'tabs__item--active': ''} locations__item-link tabs__item`} href="main.html" onClick={(evt) => onCityChange(evt,currentCity)}>
            <span>Amsterdam</span>
          </a>
        </li>
        <li className="locations__item">
          <a className={`${currentCity === CitiesNames.Hamburg? 'tabs__item--active': ''} locations__item-link tabs__item`} href="main.html" onClick={(evt) => onCityChange(evt,currentCity)}>
            <span>Hamburg</span>
          </a>
        </li>
        <li className="locations__item">
          <a className={`${currentCity === CitiesNames.Dusseldorf? 'tabs__item--active': ''} locations__item-link tabs__item`} href="main.html" onClick={(evt) => onCityChange(evt,currentCity)}>
            <span>Dusseldorf</span>
          </a>
        </li>
      </ul>
    </section>);
}

export default connector(CitiesList);
export {CitiesList};
