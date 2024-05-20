import styles from './VehicleDetails.module.css';

export const VehicleDetailsRow = ({ name, data }) => {
  return (
    <div className={styles.rowWrap}>
      <p>{name}</p>
      <p>{data}</p>
    </div>
  );
};
