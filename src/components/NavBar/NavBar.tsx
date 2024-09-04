// import { useState } from "react";
import { NavLink, Outlet } from 'react-router-dom';
import Icon from '../../ui/Icon';

import styles from './NavBar.module.css';

interface NavBarProps {
  hendlerScrollToSection: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

const NavBar: React.FC<NavBarProps> = ({ hendlerScrollToSection }) => {
  //   const [isActive, setIsActive] = useState(styles.active)
  //  function activeNavLink(path) {

  //   if (isActive) {
  //     setIsActive()
  //   }
  //  }

  // let styleActive;

  // const link = <a className={styles.active} href={href}>{children}</a>

  return (
    <>
    <nav>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_element}>
          <NavLink to='/'>
            <Icon id='icon-logo' width={173} height={65} />
          </NavLink>
        </li>
        <li className={styles.nav_list_element}>
          <NavLink
            to='/services'
            onClick={hendlerScrollToSection}
          >
            Послуги
          </NavLink>
        </li>
        <li className={styles.nav_list_element}>
          <NavLink to='/advantages' onClick={hendlerScrollToSection}>
            Переваги
          </NavLink>
        </li>
        <li className={styles.nav_list_element}>
          <NavLink to='/appointment' onClick={hendlerScrollToSection}>
            Контакти
          </NavLink>
        </li>
        <li className={styles.nav_list_element}>
          <NavLink to='/about' onClick={hendlerScrollToSection}>
            Про майстра
          </NavLink>
        </li>
        <li className={styles.nav_list_element}>
          <a href='tel:0637967425'>063 796 74 25</a>
        </li>
      </ul>
    </nav>
    <Outlet />
    </>
  );
};
export default NavBar;
