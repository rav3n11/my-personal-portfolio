import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { EasterEgg } from "./components/EasterEgg";

export const AppContext = React.createContext();

function App() {
  const [theme, setTheme] = React.useState('dark');
  const [navOn, setNavOn] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setDarkMode = () => {
    setTheme('dark');
  }
  const setLightMode = () => {
    setTheme('light');
  }
  const toggleNav = () =>{
    setNavOn(!navOn)
  }
  return (
    <div className={`App ${theme}`}>
      <AppContext.Provider value={{theme, setDarkMode, setLightMode, navOn, toggleNav, scrolled}}>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <EasterEgg />
      </AppContext.Provider>
    </div>
  );
}

export default App;
