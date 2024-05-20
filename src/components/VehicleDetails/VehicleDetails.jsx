import { VehicleDetailsRow } from './VehicleDetailsRow';
import styles from './VehicleDetails.module.css';

export const VehicleDetails = ({ data }) => {
  return (
    <div>
      <h2 className={styles.header}>Vehicle details</h2>
      <div className={styles.details}>
        {data && (
          <>
            <VehicleDetailsRow name={'Form'} data={data.form} />
            <VehicleDetailsRow name={'Length'} data={data.length} />
            <VehicleDetailsRow name={'Width'} data={data.width} />
            <VehicleDetailsRow name={'Height'} data={data.height} />
            <VehicleDetailsRow name={'Tank'} data={data.tank} />
            <VehicleDetailsRow name={'Consumption'} data={data.consumption} />
          </>
        )}
      </div>
    </div>
  );
};
