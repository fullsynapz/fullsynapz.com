import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/NavBar/Navbar';
import About from './Components/About/About';
import 'animate.css';
import './App.css';
import { WOW } from "wowjs";
import Product from './Components/Products/Product';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar chaild={<Home />} />} />
        <Route path="/about" element={<Navbar chaild={<About />} />} />
        <Route path="/products" element={<Navbar chaild={<Product />} />} />
        <Route path="/services" element={<Navbar chaild={<Services />} />} />
        <Route path="/contact" element={<Navbar chaild={<Contact />} />} />
      </Routes>
    </Router>
  );
};

export default App;

