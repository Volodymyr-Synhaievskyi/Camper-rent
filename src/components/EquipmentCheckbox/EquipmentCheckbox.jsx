import styles from './EquipmentCheckbox.module.css';

export const EquipmentCheckbox = ({ iconType, equipment, onChange }) => {
  return (
    <>
      <input
        onChange={onChange}
        type="checkbox"
        name="equipmentType"
        id={equipment}
        className={styles.equipmentType}
        value={equipment}
      />
      <label htmlFor={equipment} className={styles.label}>
        {iconType}
        <span>{equipment}</span>
      </label>
    </>
  );
};
