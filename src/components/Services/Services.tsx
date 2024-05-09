import { useState } from 'react';
import styles from './Services.module.css';
import ServicesItem from './ServicesItem';
import Modal from '../Modal/Modal';

const Services = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectItem, setSelectItem] = useState({});

  const handleOpenModal = item => {
    setIsOpenModal(prev => true);
    setSelectItem(prev => item);
    document.body.style.overflow = 'hidden';
    console.log('modal is open');
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setSelectItem({});
    document.body.style.overflow = 'auto';
  };

  return (
    <section id='services' className={styles.services}>
      <div className={styles.services_container}>
        <h2 className={styles.services_tegline}>послуги</h2>
        <p className={styles.services_desc}>
          Надаю послуги з ремонту телевізорів та встановленння Т2. Працюю з
          усіма марками телевізорів і можу усунути будь-які несправності.
          Використовую сучасне обладнання та інструменти, щоб забезпечити
          якісний ремонт у найкоротші терміни.
        </p>
      </div>
      {isOpenModal && (
            <Modal root="modal-root" onClose={closeModal} isOpen={isOpenModal}>
              <ServicesItem />
            </Modal>
          )}
      <ul>
        <li onClick={handleOpenModal} style={{cursor: 'pointer'}}>
          Ремонт телевізорів
         
        </li>
        <li onClick={handleOpenModal}>
        Встановлення телевізійного обладнання
          <ServicesItem />
        </li>
        <li onClick={handleOpenModal}>
        Встановлення Т2
          <ServicesItem />
        </li>
      </ul>
    </section>
  );
};
export default Services;
