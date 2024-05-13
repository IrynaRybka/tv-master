
import Icon from "../../ui/Icon";

import styles from "./NavBar.module.css";

interface NavBarProps {
  hendlerScrollToSection: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavBar: React.FC<NavBarProps> = ({hendlerScrollToSection}) => {


  return (
    <nav>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_element}>
          <a href="./Header.tsx">
            <Icon id="icon-logo" width={173} height={65} />
          </a>
        </li>
        <li className={styles.nav_list_element}>
          <a href="#services" onClick={hendlerScrollToSection}>Послуги</a>
        </li>
        <li className={styles.nav_list_element}>
          <a href="#advantages" onClick={hendlerScrollToSection}>Переваги</a>
        </li>
        <li className={styles.nav_list_element}>
          <a href="#appointment" onClick={hendlerScrollToSection}>Контакти</a>
        </li>
        <li className={styles.nav_list_element}>
          <a href="#about" onClick={hendlerScrollToSection}>Про майстра</a>
        </li>
        <li className={styles.nav_list_element}>
          <a href="tel:0637967425">063 796 74 25</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
