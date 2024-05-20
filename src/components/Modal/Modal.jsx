import styles from './Modal.module.css';

export const Modal = ({ children, isOpen, onClose }) => {

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    isOpen && (
      <div className={styles.modalOverlay} onClick={handleOverlayClick}>
        {children}
      </div>
    )
  );
};
