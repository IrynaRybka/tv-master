// import React, { useState } from "react";
import styles from './Advantages.module.css'

const Advantages = () => {
    // const [isLoading, setIsLoading] = useState(true);
   
  
    return (
      <section id="advantages" className={styles.advantages}>
        <div className={styles.advantages_container}>
        <h2 className={styles.advantages_tegline}>ПЕРЕВАГИ</h2>
        <div>
          <ul className={styles.advantages_list}>
          <li className={styles.advantages_item}>
            <h3>Професійність</h3>
          </li>
          <li className={styles.advantages_item}>
          <h3>Пунктуальність</h3>
          </li>
          <li className={styles.advantages_item}>
          <h3>Відповідальність</h3>
          </li>
          <li className={styles.advantages_item}>
          <h3>Чесність</h3>
          </li>
          </ul>
        </div>
        </div>
      </section>
    );
  };
  export default Advantages;