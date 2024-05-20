import { CategoryPin } from '../CategoryPin/CategoryPin';
import styles from './VehicleFeatures.module.css';

export const VehicleFeatures = ({ data }) => {
  return (
    <div className={styles.categoryPinsWrapper}>
      {Object.entries(data).map(([key, val]) => {
        let componentData = null;
        if (val > 0) {
          componentData = <CategoryPin nameData={key} quantity={val} key={key} />;
        }
        return componentData;
      })}
    </div>
  );
};
