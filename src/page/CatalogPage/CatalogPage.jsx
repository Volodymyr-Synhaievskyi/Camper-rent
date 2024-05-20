import { Catalog } from '../../components/Catalog';
import styles from './CatalogPage.module.css';
import { SearchForm } from '../../components/SearchForm';

export const CatalogPage = () => {
  return (
    <div className={styles.flexWrapper}>
      <SearchForm />
      <Catalog />
    </div>
  );
};
