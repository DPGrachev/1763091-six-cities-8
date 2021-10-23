import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {Actions} from '../../types/action';
import {setCity, setOffers} from '../../store/action';
import {MouseEvent} from 'react';
import {CitiesNames} from '../../const';
import CityItem from '../city-item/city-item';

type CitiesListProps = {
  currentCity: string;
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  HandleCityChange(evt : MouseEvent<HTMLAnchorElement>, currentCity: string) {
    evt.preventDefault();
    if(evt.currentTarget.dataset.name && evt.currentTarget.dataset.name !== currentCity){
      dispatch(setCity(evt.currentTarget.dataset.name));
      dispatch(setOffers());
    }
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CitiesListProps;

function CitiesList ({currentCity, HandleCityChange}:ConnectedComponentProps): JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(CitiesNames).map((city) => <CityItem key={city} city={city} currentCity={currentCity} onCityChange={HandleCityChange}/>)}
      </ul>
    </section>);
}

export default connector(CitiesList);
export {CitiesList};
