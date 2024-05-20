import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.flexWrapper}>
      <div className={styles.backgroundImage}></div>
      <h1 className={styles.bannerText}> Are you ready for adventure?</h1>
      <button className={styles.ctaButton} onClick={() => navigate('/catalog')}>
        Start
      </button>
    </div>
  );
};
