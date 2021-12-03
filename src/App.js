import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import './App.css';
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const french = theme.state.french;
  return (
    <div className={darkMode ? "App" : "App-white"}>
      <Toggle darkMode={darkMode} french={french}/>
      <Intro darkMode={darkMode} french={french}/>
      <About darkMode={darkMode} french={french}/>
      <Skills darkMode={darkMode} french={french}/>
      <Contact darkMode={darkMode} french={french}/>
    </div>
  );
}

export default App;
