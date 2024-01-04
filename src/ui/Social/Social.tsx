import Icon from "../Icon.js";

// import {SocialUl} from "./Social.styled.js"

const Social = () => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <ul>
        <li>
          <a>
            <Icon id="icon-telegram" width={55}/>
          </a>
        </li>
        <li>
          <a>
            <Icon id="icon-viber" width={55}/>
          </a>
        </li>
        <li>
          <a>
            <Icon id="icon-whatsapp" width={55}/>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Social;
