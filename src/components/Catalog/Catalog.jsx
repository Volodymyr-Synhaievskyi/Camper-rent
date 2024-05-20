import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getCamperDataThunk } from '../../store/campersData/thunk';
import { removeSelectedCamper } from '../../store/campersData/actionFile'
import {
  campersData,
  selectError,
  selectIsLoading,
  selectorPage,
  selectorSelectedCamp,
} from '../../store/selectors';


import { CatalogCard } from '../CatalogCard';
import { Modal } from '../Modal';
import { ModalContent } from '../ModalContent';

import styles from './Catalog.module.css';

export const Catalog = () => {
  const dispatch = useDispatch();

  const dataCatalog = useSelector(campersData);
  const selectedCamper = useSelector(selectorSelectedCamp);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectorPage);

  const loadMoreHandler = () => {
    dispatch(getCamperDataThunk({ page: currentPage, limit: 4 }));
  };

  useEffect(() => {
    loadMoreHandler()
  }, []);

  return (
    <div className={styles.cardWrapper}>
      {dataCatalog.map((item, index) => (
        <CatalogCard key={index} data={item} />
      ))}
      {isLoading && <h2>Loading.... </h2>}
      {error && <h2>{error}</h2>}
      {!isLoading && !error && (
        <button className={styles.buttonStyle} onClick={loadMoreHandler}>
          Load More
        </button>
      )}

      <Modal isOpen={selectedCamper} onClose={() => dispatch(removeSelectedCamper())} >
        <ModalContent />
      </Modal >
    </div>
  );
};
