import Icon from "../Icon.js";

import styles from "./Social.module.css";

// import {SocialUl} from "./Social.styled.js"

const Social = () => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <ul className={styles.social_list}>
        <li>
          <a>
            <Icon className={styles.social_list_icon} id="icon-telegram" width={55} height={55}/>
          </a>
        </li>
        <li>
          <a>
            <Icon className={styles.social_list_icon} id="icon-viber" width={55} height={55}/>
          </a>
        </li>
        <li>
          <a>
            <Icon className={styles.social_list_icon} id="icon-whatsapp" width={55} height={55}/>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Social;
