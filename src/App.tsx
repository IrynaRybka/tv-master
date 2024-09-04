// import { useRef, RefObject } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Advantages from './components/Advantages/Advantages';
import Appointment from './components/Appointment/Appointment';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
// import NoPage from './components/NoPage/NoPage';

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
      <BrowserRouter>
        <Routes>
          <Route path='/tv-master-page' element={<Header />}>
            <Route index element={<Hero />} />
            <Route path='services' element={<Services />} />
            <Route path='advantages' element={<Advantages />} />
            <Route path='appointment' element={<Appointment />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
