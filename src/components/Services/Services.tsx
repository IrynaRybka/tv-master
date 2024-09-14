import { useState } from 'react';
import styles from './Services.module.css';
import ServicesItem from './ServicesItem';
import Modal from '../Modal/Modal';

const Services: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState({});

  // const handleOpenModal = (item: React.MouseEvent<HTMLAnchorElement, MouseEvent> )=> {
  //   setIsOpenModal(true);
  //   setSelectItem(item);
  //   document.body.style.overflow = 'hidden';
  //   console.log('modal is open');
  // };

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
        <Modal root='modal-root' onClose={closeModal}>
          <ServicesItem selectItem={selectItem} />
        </Modal>
      )}
      {/* <ul className={styles.list}>
        <li onClick={handleOpenModal} className={styles.list_item}>
          <button type='button'>Ремонт телевізорів</button>
        </li>
        <li onClick={handleOpenModal} className={styles.list_item}>
          <button type='button'>Встановлення телевізійного обладнання</button>
        </li>
        <li onClick={handleOpenModal} className={styles.list_item}>
          <button type='button'>Встановлення Т2</button>
        </li>
      </ul> */}
    </section>
  );
};
export default Services;
