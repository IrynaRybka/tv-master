// import React, { useState } from "react";

import Social from "../../ui/Social/Social";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <header>
      <div>
        <NavBar />
        <a href="tel:0637967425">063 796 74 25</a>
        <Social />
      </div>
    </header>
  );
};
export default Header;
