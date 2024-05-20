import { VehicleDetails } from '../VehicleDetails';
import { VehicleFeatures } from '../VehicleFeatures';
import styles from './Features.module.css';

export const Features = ({ data }) => {
  return (
    <div className={styles.featuresWrapper}>
      <VehicleFeatures data={data.details} />
      <VehicleDetails data={data} />
    </div>
  );
};
