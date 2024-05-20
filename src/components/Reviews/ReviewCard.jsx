import { RatingIcon } from '../../img/RatingIcon';
import styles from './Reviews.module.css';

export const ReviewCard = ({ data }) => {
  const getLetter = (name) => {
    if (name && name.length > 0) {
      return name.charAt(0).toUpperCase();
    } else {
      return '';
    }
  };
  const getStars = (ratingNumber) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < ratingNumber) {
        stars.push(<RatingIcon key={i} styleValue="ratingIconFilled" />);
      } else {
        stars.push(<RatingIcon key={i} styleValue="ratingIconEmpty" />);
      }
    }
    return stars;
  };
  return (
    <>
      <div className={styles.reviewHeader}>
        <div className={styles.reviewIconWrap}>
          <h1 className={styles.reviewIcon}>{getLetter(data.reviewer_name)}</h1>
        </div>
        <div>
          <h3 className={styles.name}>{data.reviewer_name}</h3>
          <div className={styles.ratingWrapper}>{getStars(data.reviewer_rating)}</div>
        </div>
      </div>
      <p className={styles.reviewText}>{data.comment}</p>
    </>
  );
};
