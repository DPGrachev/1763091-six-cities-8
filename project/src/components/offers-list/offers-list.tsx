import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/offer';

type OffersListProps = {
  offers: Offer[],
  onCardFocus?: (offer: number|null) => void,
  isRoomScreenOffersList?: boolean,
};

function OffersList({offers, onCardFocus, isRoomScreenOffersList}: OffersListProps): JSX.Element {

  return (
    <div className={isRoomScreenOffersList ? 'near-places__list places__list' : 'cities__places-list places__list tabs content'}>
      {offers.map((offerCard) => <OfferCard  key={offerCard.id} onCardFocus={onCardFocus} offer={offerCard}/>)}
    </div>
  );
}

export default OffersList;
