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
          <li>
            <a href="./Header.tsx">
              <Icon id="icon-logo" width={173} height={65} />
            </a>
          </li>
          <li>
            <a href="#"
            >
              Послуги
            </a>
          </li>
          <li>
            <a href="../Advantages/Advantages.tsx">Переваги</a>
          </li>
          <li>
            <a href="../Appointment/Appointment.tsx">Контакти</a>
          </li>
          <li>
             {/* <button onClick={() => scrollToSection(about)} type="button">Про майстра</button> */}
            <a href="../About/About.tsx">Про майстра</a>
          </li>
        </ul>
      </nav>
  
  );
};
export default NavBar;
