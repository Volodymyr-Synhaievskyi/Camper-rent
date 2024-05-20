import MapPin from '../../img/Map-pin';
import styles from './Location.module.css';

export const Location = ({ localisation }) => {
  return (
    <div className={styles.flexWrapper}>
      <MapPin styleValue="default" />
      <p>{localisation}</p>
    </div>
  );
};
