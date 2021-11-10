import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import { Offer } from '../../types/offer';
import { CityName, cityCoordinates } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: CityName,
  offers: Offer[],
  idActiveOffer?: number | null;
  offerFromRoomScreen?: Offer;
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
  const {city, offers, idActiveOffer, offerFromRoomScreen} = props;
  const cityLocation = cityCoordinates[city];

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      map.flyTo([cityLocation.latitude,cityLocation.longitude],cityLocation.zoom);
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
      if(offerFromRoomScreen){
        const marker = new Marker({
          lat: offerFromRoomScreen.location.latitude,
          lng: offerFromRoomScreen.location.longitude,
        });

        marker.setIcon(currentCustomIcon).addTo(map);
      }
    }
  }, [cityLocation ,map, offers, idActiveOffer, offerFromRoomScreen]);

  return <section ref={mapRef} className={offerFromRoomScreen ? 'property__map map' : 'cities__map map'}></section>;
}

export default Map;
