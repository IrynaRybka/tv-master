// import React, { useState } from "react";
import styles from './Advantages.module.css'

const Advantages = () => {
    // const [isLoading, setIsLoading] = useState(true);
   
  
    return (
      <section id="advantages" className={styles.advantages}>
        <div className={styles.advantages_container}>
        <h2>ПЕРЕВАГИ</h2>
        <div>
          <ul>
          <li>
            <p>Професійність</p>
          </li>
          <li>
          <p>Пунктуальність</p>
          </li>
          <li>
          <p>Відповідальність</p>
          </li>
          <li>
          <p>Чесність</p>
          </li>
          </ul>
        </div>
        </div>
      </section>
    );
  };
  export default Advantages;