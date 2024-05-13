// import { useRef, RefObject } from "react";

import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";
import Appointment from "./components/Appointment/Appointment";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

function App() {
  // const servicesRef = useRef<null | HTMLParagraphElement>(null);

  // const scrollToSection = (elementRef: RefObject<HTMLParagraphElement>) => { 
  //   if (elementRef != null) {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   })}
  //   return
  //   }

  return (
    <>
    
   
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <Advantages></Advantages>
      <Appointment></Appointment>
      <About></About>
      <Footer></Footer>
    </>
  );
}

export default App;
