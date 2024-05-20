import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectorFavorite } from '../../store/selectors';
import { CatalogCard } from '../CatalogCard';
import styles from './Favorite.module.css';

export const Favorite = () => {
  const favorite = useSelector(selectorFavorite);

  return (
    <div className={styles.favoriteWrapper}>
      {favorite.length > 0 ? (
        favorite.map((item) => <CatalogCard key={item._id} data={item} />)
      ) : (
        <h2 className={styles.message}>
          Currently you didn't add anything here. Go to
          <Link to={`/catalog`}> Catalog page </Link> to find perfact RV for you!
        </h2>
      )}
    </div>
  );
};
