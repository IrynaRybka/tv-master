// import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { ReactNode, useEffect, useRef } from 'react';
import Icon from '../../ui/Icon';

interface ModalProps {
  root?: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ root = 'modal-root', onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);


  useEffect(() => {

const handleOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const rootElement = document.getElementById(root);
  
  if (
    rootElement &&
    rootElement.contains(target) &&
    modalRef.current &&
    !modalRef.current.contains(target)
  ) {
    onClose();
    console.log("modal is close");
  }
};

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscKey);
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  const handleCloseButtonClick = () => {
    onClose();
    console.log("modal is close");
  };
  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
      console.log("modal is close");
    }
  };
  
  return createPortal(
    <div className={styles.modal} id={root}>
      <div className={styles.modal_box}>
        <div className={styles.modal_box_btn}>
          <button onClick={handleCloseButtonClick} type='button'
            aria-label='закриття модального вікна'>
          <Icon id="icon-close" width={40} height={40} />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById(root) as HTMLElement
  );
};
export default Modal;
