import Icon from '../../ui/Icon';
import styles from './ServicesItem.module.css'

const ServicesItem = ({ selectItem }) => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={styles.container}>
      
        <Icon className={styles.icon} id='icon-t2' width={140} height={140} />
      
      <h3 className={styles.header}>Встановлення Т2</h3>
      <p className={styles.desc}>Встановлення пристрою цифрового ефірного телебачення та налаштування під відповідну модель телевізора.</p>
    </div>
  );
};
export default ServicesItem;
