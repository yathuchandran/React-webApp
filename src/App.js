import React from "react";
import {BrowserRouter,Routes,Route}from "react-router-dom"
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Pages/Home";


function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>

      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/" element={<Home />}/>


    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
