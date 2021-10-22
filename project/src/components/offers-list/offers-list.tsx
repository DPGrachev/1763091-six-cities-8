import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/offer';

type OffersListProps = {
  offers: Offer[],
  setIdActiveOffer?: (offer: number|null) => void,
  isRoomScreenOffersList?: boolean,
};

function OffersList({offers, setIdActiveOffer, isRoomScreenOffersList}: OffersListProps): JSX.Element {

  return (
    <div className={isRoomScreenOffersList ? 'near-places__list places__list' : 'cities__places-list places__list tabs content'}>
      {offers.map((offerCard) => <OfferCard  key={offerCard.id} setIdActiveOffer={setIdActiveOffer} offer={offerCard}/>)}
    </div>
  );
}

export default OffersList;
