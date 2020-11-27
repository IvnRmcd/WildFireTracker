import styles from "./MarkerInfo.module.css";

const MarkerInfo = ({ info }) => {
  return (
    <div className={styles.Location_info}>
      <h2>Location Info</h2>
      <ul>
        <li>
          <strong>ID:</strong> {info.id}
        </li>
        <li>
          <strong>Title:</strong> {info.title}
        </li>
      </ul>
    </div>
  );
};

export default MarkerInfo;
