// import React, { useState } from "react";
import Social from "../../ui/Social/Social";
import styles from "./Hero.module.css";

const Hero = () => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.hero_title}>
          Ваш телевізор не працює? Не біда! Телемастер з досвідом понад 15 років
          швидко та якісно відремонтує ваш телевізор у вас на дому.
        </h1>
        <p>Зателефонуйте мені уже сьогодні і я допоможу Вам відновити ваш телевізор! Або напишіть в месенджер в будь-який зручний для вас час.</p>
        <ul>
          <li><a href="tel:+380637967425">(063) 796-74-25</a></li>
          <li><a href="tel:+380673362127">(067) 336-21-27</a></li>
        </ul>
        <Social/>
      </div>
    </section>
  );
};
export default Hero;
