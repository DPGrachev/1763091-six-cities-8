import {MouseEvent} from 'react';

type CityItemProps = {
  city: string,
  currentCity: string,
  onCityChange: (evt: MouseEvent<HTMLAnchorElement>, currentCity: string) => void,
}

function CityItem ({city, currentCity, onCityChange}: CityItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className={`${currentCity === city? 'tabs__item--active': ''} locations__item-link tabs__item`} data-name={city} href="main.html" onClick={(evt) => onCityChange(evt,currentCity)}>
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CityItem;
