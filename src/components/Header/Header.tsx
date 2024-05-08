// import React, { useState } from "react";

import Social from "../../ui/Social/Social";
import NavBar from "../NavBar/NavBar";

import styles from "./Header.module.css"

const Header = () => {
  const hendlerScrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if(target) {
      const targetPosition =
      target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
    }
    
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <NavBar hendlerScrollToSection={hendlerScrollToSection}/>
        <Social />
      </div>
    </header>
  );
};
export default Header;
