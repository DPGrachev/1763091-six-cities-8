import { CityName } from '../../const';
import { Offer } from '../../types/offer';
import FavoriteOfferCard from '../favorite-offer-card/favorite-offer-card';

type FavoriteOffersListProps = {
  city: CityName,
  offers: Offer[],
}

function FavoriteOffersList ({city, offers} : FavoriteOffersListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((favoriteOfferCard) => <FavoriteOfferCard key={favoriteOfferCard.id} offer={favoriteOfferCard}/>)}
      </div>
    </li>
  );
}

export default FavoriteOffersList;
