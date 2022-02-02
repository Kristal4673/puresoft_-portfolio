import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from  "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
function App() {
  return (
    <>
      <BrowserRouter>
       
        <Navbar />
       
     

        <Footer/>
  
      </BrowserRouter>
    </>
  );
}

export default App;
