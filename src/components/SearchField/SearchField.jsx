import styles from './SearchField.module.css';

export const SearchField = ({ lable, placeholder, type, id, icon, onChange, value }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.locationLabel} htmlFor="location">
        {lable && lable}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={id}
        className={`${styles.inputField} inputField`}
        placeholder={placeholder}
        type={type}
      />
      {icon && icon}
    </div>
  );
};
