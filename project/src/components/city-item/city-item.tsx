import {MouseEvent} from 'react';
import {CityName} from '../../const';

type CityItemProps = {
  city: CityName,
  currentCity: string,
  onCityClick: (currentCity: CityName) => void,
}

function CityItem ({city, currentCity, onCityClick}: CityItemProps): JSX.Element {
  const handleCityClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    if(evt.currentTarget.dataset.name && evt.currentTarget.dataset.name !== currentCity){
      onCityClick(evt.currentTarget.dataset.name as CityName);
    }
  };

  return (
    <li className="locations__item">
      <a className={`${currentCity === city? 'tabs__item--active': ''} locations__item-link tabs__item`} data-name={city} href="main.html" onClick={handleCityClick}>
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CityItem;
