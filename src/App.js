import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Components/Login";
import UserHomePage from "./Pages/UserHomePage";
import CustomSearchPage from "./Pages/CustomSearchPage";
import AddFeaturePage from "./Pages/AddFeaturePage";

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
          <Route path="/userHome" element={<UserHomePage/>}/>
          <Route path="/customsearch" element={<CustomSearchPage/>}/>
          <Route path="/addfeature" element={<AddFeaturePage/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
