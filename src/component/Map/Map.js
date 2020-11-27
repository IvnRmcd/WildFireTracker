import { useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "./Map.module.css";
import LocationMarker from "../LocationMarker/LocationMarker";
import MarkerInfo from "../MarkerInfo/MarkerInfo";

const Map = ({ eventData, center, zoom }) => {
  const [info, setInfo] = useState(null);

  const markers = eventData.map((event) => {
    if (event.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() => {
            setInfo({ id: event.id, title: event.title });
          }}
        />
      );
    }
    return null;
  });
  return (
    <div className={styles.Map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAPSAPI }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {info && <MarkerInfo info={info} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
