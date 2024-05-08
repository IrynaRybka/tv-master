import Icon from "../Icon.js";

import styles from "./Social.module.css";

// import {SocialUl} from "./Social.styled.js"

const Social = () => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <ul className={styles.social_list}>
        <li>
          {/* change href link */}
          <a href="https://t.me/IrynaIT" target="_blank" rel="noopener noreferrer">
            <Icon className={styles.social_list_icon} id="icon-telegram" width={55} height={55}/>
          </a>
        </li>
        <li>
       {/* тільки якщо встановлено додаток viber */}
          <a href="viber://chat?number=%2B380637967425" target="_blank" rel="noopener noreferrer">
            <Icon className={styles.social_list_icon} id="icon-viber" width={55} height={55}/>
          </a>
        </li>
        <li>
          <a href="https://wa.me/380637967425" target="_blank" rel="noopener noreferrer">
            <Icon className={styles.social_list_icon} id="icon-whatsapp" width={55} height={55}/>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Social;

// https://t.me/Brock_Team
// viber://chat?number=+380671686828
// https://wa.me/380671686828