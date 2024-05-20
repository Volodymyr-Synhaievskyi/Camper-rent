import styles from './VehicleTypeItem.module.css';

export const VehicleTypeItem = ({ iconType, type, onChange, checked }) => {
  return (
    <>
      <input type="radio" onChange={onChange} name="camperType" checked={checked} id={type} className={styles.vehicleType} value={type} />
      <label htmlFor={type} className={styles.label}>
        {iconType}
        <span>{type}</span>
      </label>
    </>
  );
};
