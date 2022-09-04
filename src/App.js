import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import SiteFooter from './components/SiteFooter';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About title="About Us" aboutrighttext="OUR" aboutrighttext1="COMMITMENT TO YOU " aboutdescr="At our core is a philosophy of service to our clients with the highest level of honesty and integrity 100%... all the time. Giving our best on each and every effort, every time out, every new project, every new product, every new technology and every new client. Until you... our client says it's right... we keep striving to reach that level of complete buy in and acceptance by you. Our clients are why we are here providing this service - the successes we experience with our clients is why we continue to work." cleartext="We are clear... " cleartxt="we work for you."/>}/>
    </Routes>
    <SiteFooter/>
    </BrowserRouter>
    </>
  );
}

export default App;
