// import React, { useState } from "react";

import Social from "../../ui/Social/Social";
import NavBar from "../NavBar/NavBar";

import styles from "./Header.module.css"

const Header: React.FC = () => {
  const hendlerScrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1) || '';
    const target = document.getElementById(targetId);
    if(target) {
      const header = document.querySelector('header');
      const headerHeight =  header ? header.offsetHeight - 18 : 0;
      const targetPosition =
      target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: targetPosition - headerHeight,
      behavior: 'smooth',
    });
    }
    
  }
  

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <NavBar hendlerScrollToSection={ hendlerScrollToSection}/>
        <Social />
      </div>
    </header>
  );
};
export default Header;
