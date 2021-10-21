import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/offer';

type OffersListProps = {
  offers: Offer[],
  setIdActiveOffer: (a: number|null) => void,
};

function OffersList({offers, setIdActiveOffer}: OffersListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offerCard) => <OfferCard  key={offerCard.id} setIdActiveOffer={setIdActiveOffer} offer={offerCard}/>)}
    </div>
  );
}

export default OffersList;
