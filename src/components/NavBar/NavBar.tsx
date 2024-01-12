// import { useRef } from "react";
// import { Link } from "react-scroll";
import Icon from "../../ui/Icon";

import styles from "./NavBar.module.css";

const NavBar = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const about = useRef(null);

  // const scrollToSection = (elementRef) => {
  // window.scrollTo({
  //   top: elementRef.current.offsetTop,
  //   behavior: "smooth"
  // })
  // }

  return (
    <nav>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_element}>
          <a href="./Header.tsx">
            <Icon id="icon-logo" width={173} height={65} />
          </a>
        </li>
        <li className={styles.nav_list_element}>
          <a href="#">Послуги</a>
        </li>
        <li className={styles.nav_list_element}>
          <a href="../Advantages/Advantages.tsx">Переваги</a>
        </li>
        <li className={styles.nav_list_element}>
          <a href="../Appointment/Appointment.tsx">Контакти</a>
        </li>
        <li className={styles.nav_list_element}>
          <a href="../About/About.tsx">Про майстра</a>
        </li>
        <li className={styles.nav_list_element}>
          <a href="tel:0637967425">063 796 74 25</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
