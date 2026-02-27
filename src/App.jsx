// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; // Assuming you'll create About.js in components folder
import Contact from './components/Contact';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Header from './components/Header';
import i1 from "./assets/images/adnoc.png"
import i2 from "./assets/images/aldar.png"
import i3 from "./assets/images/emkan.png"
import i4 from "./assets/images/hpd.png"
import i5 from "./assets/images/madares.png"
import i6 from "./assets/images/miral.png"
import i7 from "./assets/images/moc.png"
import i8 from "./assets/images/MPA.png"
import i9 from "./assets/images/nacd.png"
import i10 from "./assets/images/pc.png"

const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10];

const partnerData = [
  {
    name: "ADNOC",
    description: "We provided comprehensive structural engineering and fabrication services for ADNOC's major oil and gas facilities, ensuring compliance with the highest industry standards and safety regulations.",
    logo: i1
  },
  {
    name: "Aldar",
    description: "Our architectural steel solutions were instrumental in the construction of Aldar's landmark projects, delivering innovative designs and precision fabrication for their premium developments.",
    logo: i2
  },
  {
    name: "Emkan",
    description: "We delivered custom metal fabrication services for Emkan's commercial projects, providing high-quality structural components and architectural elements.",
    logo: i3
  },
  {
    name: "HPD",
    description: "Our engineering expertise supported HPD in delivering complex industrial projects with precision-crafted steel structures and reliable fabrication services.",
    logo: i4
  },
  {
    name: "Madares",
    description: "We contributed to educational infrastructure development by providing structural steel solutions for Madares' school construction projects across the UAE.",
    logo: i5
  },
  {
    name: "Miral",
    description: "Our team delivered specialized steel structures for Miral's entertainment and tourism projects, including theme park installations and resort developments.",
    logo: i6
  },
  {
    name: "Ministry of Culture",
    description: "We provided architectural steelwork for cultural institutions and government buildings, combining aesthetic appeal with structural integrity.",
    logo: i7
  },
  {
    name: "MPA",
    description: "Our marine-grade steel fabrication services supported MPA's port infrastructure projects, delivering durable solutions for harsh marine environments.",
    logo: i8
  },
  {
    name: "NACD",
    description: "We engineered and fabricated structural components for NACD's civil defense facilities, ensuring maximum safety and reliability.",
    logo: i9
  },
  {
    name: "PC",
    description: "Our comprehensive metal services supported PC's construction projects with precision-cut materials and custom fabrication solutions.",
    logo: i10
  }
];

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/completed" element={<Partners />} />
      </Routes>

      <Footer
        logos={images}
        partnerData={partnerData}
        speed={30}
        logoWidth={140}
      />
    </Router>
  );
}

export default App;