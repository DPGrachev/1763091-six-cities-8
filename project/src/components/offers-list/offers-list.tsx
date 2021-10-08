import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/offer';
import {useState} from 'react';

type OffersListProps = {
  offers: Offer[];
};

function OffersList({offers}: OffersListProps): JSX.Element {
  const [idActiveOffer, setIdActiveOffer] = useState(0);

  return (
    <>
      <h1>{idActiveOffer} - id активной карточки</h1>
      <div className="cities__places-list places__list tabs__content">
        {new Array(offers.length).fill(OfferCard).map((offerCard, i) => offerCard(offers[i],setIdActiveOffer))}
      </div>
    </>
  );
}

export default OffersList;
