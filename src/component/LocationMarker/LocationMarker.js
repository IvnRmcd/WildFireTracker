import Icon from "@iconify/react";
import LocationIcon from "@iconify/icons-mdi/fire-alert";
import styles from "./LocationMarker.module.css";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className={styles.LocationMarker} onClick={onClick}>
      <Icon icon={LocationIcon} className={styles.Location_icon} />
    </div>
  );
};

export default LocationMarker;
