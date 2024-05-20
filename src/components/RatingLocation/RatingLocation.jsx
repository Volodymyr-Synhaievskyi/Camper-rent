import React from 'react';
import { Location } from '../Location';
import { RatingIcon } from '../../img/RatingIcon';
import styles from './RatingLocation.module.css';

export const RatingLocation = ({ data }) => {
  return (
    <div className={styles.componentWrapper}>
      <div className={styles.ratingWrap}>
        <RatingIcon styleValue="ratingIconFilled" />
        <p className={styles.ratingLink}>
          {data.rating}(reviews {data.reviews.length})
        </p>
      </div>
      <Location localisation={data.location}></Location>
    </div>
  );
};
