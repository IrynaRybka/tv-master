// import { useRef } from "react";
import Icon from "../../ui/Icon";

const NavBar = (ref) => {
    // const [isLoading, setIsLoading] = useState(true);
// const ref = useRef(null);

const handleClick = () => {
  console.log(ref)
    ref.current?.scrollIntoView({behavior: 'smooth'});
}
  
    return (
      
        <div>
          <nav>
            <ul>
              <li>
                <a href="./Header.tsx">
                  <Icon id="icon-logo" width={173} height={65} />
                </a>
              </li>
              <li>
                <a href="../Services/Services.tsx">Послуги</a>
              </li>
              <li>
                <a href="../Advantages/Advantages.tsx">Переваги</a>
              </li>
              <li>
                <a href="../Appointment/Appointment.tsx">Контакти</a>
              </li>
              <li>
                <button onClick={handleClick} type="button">Про майстра</button>
                <a href="../About/About.tsx">Про майстра</a>
              </li>
             
            </ul>
          </nav>
        
        </div>
    
    );
  };
  export default NavBar;
  