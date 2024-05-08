// import React, { useState } from "react";
import styles from './Services.module.css'
import ServicesItem from "./ServicesItem";

const Services = () => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <section id='services' className={styles.services}>
      <div className={styles.services_container}>
        <h2>ПОСЛУГИ</h2>
        <p>
          Надаю послуги з ремонту телевізорів та встановленння Т2. Працюю з
          усіма марками телевізорів і можу усунути будь-які несправності.
          Використовую сучасне обладнання та інструменти, щоб забезпечити
          якісний ремонт у найкоротші терміни.
        </p>
      </div>
      <ul>
        <li><ServicesItem /></li>
        <li><ServicesItem /></li>
        <li><ServicesItem /></li>
      </ul>
    </section>
  );
};
export default Services;
