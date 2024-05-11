
import styles from './About.module.css'

const About = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const ref = useRef(null);

  return (
    <>
    <section id='about' className={styles.about}>
     <div className={styles.about_container}>
        <h2 className={styles.about_tegline}>про майстра</h2>
        <p className={styles.about_desc}>
          Мене звати Володимир і я професійний майстер телевізорів. У мене
          великий досвід роботи в цій галузі, понад 15 років. Починав свою
          кар’єру коли люди користувалися ламповими телевізорами з монохромним
          зображенням. Технології постійно змінюються, надають споживачеві нових
          продуктів. Тому я завжди вдосконалюю свої навички, щоб надавати
          клієнтам найкращий сучасний сервіс.
        </p>
        <ul className={styles.about_list}>
          <span >Що я можу: </span>
          <ol>
            <span> 1. 
              Швидко і якісно усунути будь-яку проблему з телевізором, незалежно
              від її складності.
            </span>
          </ol>
          <ol>
            <span> 2. 
              Встановити антену так, щоб вона забезпечувала найкращий сигнал.
            </span>
          </ol>
          <ol>
            <span> 3. 
              Налаштувати будь-яке телевізійне обладнання, щоб ви могли
              насолоджуватися вашими улюбленими передачами в найкращій якості.
            </span>
          </ol>
        </ul>
        </div>
      </section>
    </>
  );
};
export default About;
