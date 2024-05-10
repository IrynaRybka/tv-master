// import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { ReactNode, useEffect } from 'react';
import Icon from '../../ui/Icon';
// import { useClickOutside } from '../../hooks/useClickOutside';

interface ModalProps {
  root?: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ root = 'modal-root', onClose, children }) => {
  // const modalRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.body.style.overflow = '';
      // document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      
    };
  }, []);

  // const handleClickOutside = (e: MouseEvent) => {
  //   if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
  //     onClose();
  //     console.log(e.target, "modal is close");
  //   }
  // };

  const handleCloseButtonClick = () => {
    onClose();

  };

  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    
    }
  };
  
  return createPortal(
    <div className={styles.modal} id={root} >
      <div className={styles.modal_box}>
        <div className={styles.modal_box_btn}>
          <button className={styles.close_btn} onClick={handleCloseButtonClick} type='button'>
          <Icon className={styles.icon} id="icon-close" width={40} height={40} />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById(root) as HTMLElement
  );
};
export default Modal;
