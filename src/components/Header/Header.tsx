// import React, { useState } from "react";

import Social from "../../ui/Social/Social";
import NavBar from "../NavBar/NavBar";

import styles from "./Header.module.css"

const Header = () => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <NavBar />
        <a href="tel:0637967425">063 796 74 25</a>
        <Social />
      </div>
    </header>
  );
};
export default Header;
