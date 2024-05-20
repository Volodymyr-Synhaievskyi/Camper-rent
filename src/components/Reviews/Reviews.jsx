import { ReviewCard } from './ReviewCard';
import styles from './Reviews.module.css';

export const Reviews = ({ data }) => {
  return (
    <div className={styles.reviewWrapper}>
      {data.length > 0 ? (
        data.map((item, index) => <ReviewCard data={item} key={index} />)
      ) : (
        <p>
          There are no reviews regarding this camper. You can be the first one to leave a review!
        </p>
      )}
    </div>
  );
};
