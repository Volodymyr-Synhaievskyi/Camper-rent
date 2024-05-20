import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { removeSelectedCamper } from '../../store/campersData/actionFile';
import { selectorSelectedCamp } from '../../store/selectors';

import noImage from '../../assets/no_image.png';
import CloseIcon from '../../assets/svg/closeIcon.svg';

import styles from './ModalContent.module.css';
import { RatingLocation } from '../RatingLocation';
import { BookForm } from '../BookForm';
import { Features } from '../Features';
import { Reviews } from '../Reviews';

export const ModalContent = () => {
  const [activeButton, setActiveButton] = useState(null);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(removeSelectedCamper());
  };
  let selectedCamper = useSelector(selectorSelectedCamp);
  const showDetails = (text) => {
    setActiveButton((prev) => (prev === text ? null : text));
  };

  const getGalleryItems = (gallery) => {
    if (gallery.length > 0) {
      const galleryLayout = gallery.map((el, index) => (
        <div className={styles.imgWrapper} key={index}>
          <img className={styles.cardImg} src={el} alt="Camper" />
        </div>
      ));
      return galleryLayout;
    } else {
      return (
        <div className={styles.imgWrapper}>
          <img className={styles.cardImg} src={noImage} alt="Placeholder" />
        </div>
      );
    }
  };

  return (
    selectedCamper && (
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.headerWrapper}>
          <h1>{selectedCamper.name}</h1>
          <button className={styles.closeBtn} onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
        <RatingLocation data={selectedCamper} />
        <p className={styles.price}>&euro; {selectedCamper.price.toFixed(2)}</p>
        <div className={styles.modalScroll}>
          <div className={styles.galleryWrapper}>{getGalleryItems(selectedCamper.gallery)}</div>
          <p className={styles.camperDescription}>{selectedCamper.description}</p>
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.modalDetailBtn} ${
                activeButton === 'Features' && styles.activeBtn
              }`}
              onClick={() => showDetails('Features')}>
              Features
            </button>
            <button
              className={`${styles.modalDetailBtn} ${
                activeButton === 'Reviews' && styles.activeBtn
              }`}
              onClick={() => showDetails('Reviews')}>
              Reviews
            </button>
          </div>
          {activeButton && (
            <div className={styles.detailsWrapper} details={selectedCamper}>
              {activeButton === 'Features' && <Features data={selectedCamper} />}
              {activeButton === 'Reviews' && <Reviews data={selectedCamper.reviews} />}
              <BookForm />
            </div>
          )}
        </div>
      </div>
    )
  );
};
