import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import { getCurrentCity} from '../../store/main-screen/selectors';
import { getOffersInCurrentCity } from '../../store/data-offers/selectors';
import { useSelector} from 'react-redux';
import ContentArea from '../content-area/content-area';
import EmptyContentArea from '../empty-content-area/empty-content-area';

function MainScreen(): JSX.Element {
  const currentCity = useSelector(getCurrentCity);
  const offersInCurrentCity = useSelector(getOffersInCurrentCity);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList currentCity={currentCity}/>
        </div>
        <div className="cities">
          {
            offersInCurrentCity.length > 0
              ? <ContentArea currentCity={currentCity} />
              : <EmptyContentArea currentCity={currentCity} />
          }
        </div>
      </main>
    </div>);
}

export default MainScreen;
