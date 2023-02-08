import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Container/home";
import Page1 from "./Components/page1";
import Page2 from "./Components/page2";
import Page3 from "./Components/page3";
import "./Components/page.css"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/page1" element = {<Page1/>}/>
        <Route path="/page2" element = {<Page2/>}/>
        <Route path="/page3" element = {<Page3/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
