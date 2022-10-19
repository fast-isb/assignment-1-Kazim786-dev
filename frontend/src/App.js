import './style.css'
import React from 'react';
import {  BrowserRouter, Routes, Route } from "react-router-dom";

import { DisplayRestaurant } from "./components/Admin/Restaurant/Display.jsx";

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DisplayRestaurant/>} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
