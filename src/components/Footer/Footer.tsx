import styles from './Footer.module.css';
// import React, { useState } from "react";

const Footer = () => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <h3>КОНТАКТИ</h3>

        <p>E-mail: <a href="mailto:vova_TV@gmail.com">vova_TV@gmail.com</a></p>
        <p>
          Телефони:
          <ul>
            <li>
              <a href='tel:0637967425'>063-796-74-25</a>
            </li>
            <li>
            <a href='tel:0637967425'>063-796-74-25</a>
            </li>
          </ul>
        </p>
      </div>
      <div className={styles.callback}>
        <h3>ЗАЛИШИТИ ВІДГУК</h3>
        <form>
          <label htmlFor='name'>ФІО</label>
          <input name='name' type='text' id='name' required></input>
          <label htmlFor='email'>E-mail</label>
          <input name='email' type='text' id='email' required></input>
          <label htmlFor='text'>Текст</label>
          <textarea
            name='text'
            id='text'
            required
            style={{ resize: 'none' }}
          ></textarea>
          <button type='button'>Відправити</button>
        </form>
      </div>
    </footer>
  );
};
export default Footer;
