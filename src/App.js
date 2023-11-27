import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Components/Login";


//import Footer from "./Components/Footer";
//import nav from "bootstrap";

function App() {
  //let [baseUrl, setBaseUrl] = useState("");
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/userlogin" element={<Login/>}/>          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
