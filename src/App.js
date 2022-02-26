import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home /Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
     
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>

        <Footer />
    
    </>
  );
}

export default App;
