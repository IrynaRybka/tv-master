// import React, { useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
    // const [isLoading, setIsLoading] = useState(true);
   
  
    return (
      <section className={styles.hero}>
        <div>
        <h3>Ваш телевізор не працює? Не біда!
Телемастер з досвідом понад 15 років швидко та якісно відремонтує ваш телевізор у вас на дому.</h3>
        </div>
      </section>
    );
  };
  export default Hero;