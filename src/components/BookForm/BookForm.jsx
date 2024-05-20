import { Button } from '../Button';
import { InputField } from '../InputField';
import { TextareaField } from '../TextareaField';
import styles from './BookForm.module.css';

export const BookForm = () => {
  const handleButtonClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.formWrapper}>
      <div>
        <h2 className={styles.formHeader}>Book your campervan now</h2>
        <p className={styles.formMoto}>Stay connected! We are always ready to help you.</p>
      </div>
      <div className={styles.inputsWrap}>
        <InputField placeholder={'Name'} fieldName={'name'} />
        <InputField placeholder={'Email'} fieldName={'email'} />
        <InputField placeholder={'Booking Date'} fieldName={'calendar'} />
        <TextareaField placeholder={'Comment'} fieldName={'comment'} />
      </div>
      <Button onClick={handleButtonClick}>Send</Button>
    </div>
  );
};
