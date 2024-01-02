import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";
import Appointment from "./components/Appointment/Appointment";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <Appointment></Appointment>
      <Advantages></Advantages>
      <About></About>
      <Footer></Footer>
    </>
  );
}

export default App;
