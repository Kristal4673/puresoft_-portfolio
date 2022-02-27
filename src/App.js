import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Me from "./Components/Me/Me";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <About />
        <Projects />
        <Me />
        <Footer />
      </Router>
    </>
  );
}

export default App;
