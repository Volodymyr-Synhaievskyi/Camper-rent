import { useDispatch, useSelector } from 'react-redux';

import { addSelectedCamper } from '../../store/campersData/actionFile';
import { addToFavorite, removeFavorite } from '../../store/favorite/slice';
import { selectorFavorite } from '../../store/selectors';

import { RatingLocation } from '../RatingLocation';
import { VehicleFeatures } from '../VehicleFeatures';
import { FavoriteIcon } from '../../img/FavoriteIcon';

import noImage from '../../assets/no_image.png';

import styles from './CatalogCard.module.css';

export const CatalogCard = ({ data }) => {

  const dispatch = useDispatch();

  const favorite = useSelector(selectorFavorite);

  const checkIfFavorite = () => {
    const isDatainFav = favorite.some((item) => item._id === data._id);
    return isDatainFav ? 'selectedStyle' : 'defaultStyle';
  };

  const handleSelectCamper = (data) => {
    dispatch(addSelectedCamper(data));
  };

  const favoriteDataHandler = (data) => {
    const isDataInFavorites = favorite.some((item) => item._id === data._id);

    if (isDataInFavorites) {
      dispatch(removeFavorite(data));
    } else {
      dispatch(addToFavorite(data));
    }
  };

  return (
    <div className={styles.card} id={data._id}>
      <div className={styles.cardImgWrapper}>
        {data.gallery && data.gallery.length > 0 ? (
          <img className={styles.cardImg} src={data.gallery[0]} alt={data.form} />
        ) : (
          <img className={styles.cardImg} src={noImage} alt="Placeholder" />
        )}
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardHeader}>
          <h1>{data.name}</h1>
          <div className={styles.cardHeaderPrice}>
            <p className={styles.price}>&euro; {data.price.toFixed(2)}</p>

            <button className={styles.favIcon} onClick={() => favoriteDataHandler(data)}>
              <FavoriteIcon styleValue={checkIfFavorite()} />
            </button>
          </div>
        </div>
        <RatingLocation data={data} />
        <p className={styles.cardDescription}>{data.description}</p>
        <VehicleFeatures data={data.details} />

        <button className={styles.cardBtn} onClick={() => handleSelectCamper(data)}>
          Show more
        </button>
      </div>
    </div>
  );
};
