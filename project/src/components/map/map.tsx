import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';
import { CityName, CityCoordinates } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: CityName,
  offers: Offer[],
  idActiveOffer?: number | null;
  isRoomScreenMap?: boolean;
};

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const {city, offers, idActiveOffer, isRoomScreenMap} = props;
  const cityCoordinates = CityCoordinates[city];

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityCoordinates);

  useEffect(() => {
    if (map) {
      map.flyTo([cityCoordinates.latitude,cityCoordinates.longitude],cityCoordinates.zoom);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            idActiveOffer !== null && offer.id === idActiveOffer
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);

      });
    }
  }, [cityCoordinates ,map, offers, idActiveOffer]);

  return <section ref={mapRef} className={isRoomScreenMap ? 'property__map map' : 'cities__map map'}></section>;
}

export default Map;
