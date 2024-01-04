// import React, { useState } from "react";
import Icon from "../../ui/Icon";
import Social from "../../ui/Social/Social";

const Header = () => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <a href="./Header.tsx">
                <Icon id="icon-logo" width={173} height={65} />
              </a>
            </li>
            <li>
              <a href="../Services/Services.tsx">Послуги</a>
            </li>
            <li>
              <a href="../Advantages/Advantages.tsx">Переваги</a>
            </li>
            <li>
              <a href="../Appointment/Appointment.tsx">Контакти</a>
            </li>
            <li>
              <a href="../About/About.tsx">Про майстра</a>
            </li>
           
          </ul>
        </nav>
        <a href="tel:0637967425">063 796 74 25</a>
        <Social />
      </div>
    </header>
  );
};
export default Header;
