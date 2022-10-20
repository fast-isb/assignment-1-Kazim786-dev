import './style.css'
import React from 'react';
import {  BrowserRouter, Routes, Route } from "react-router-dom";

import { DisplayRestaurant } from "./components/Admin/Restaurant/Display.jsx";
import { AddRestaurant } from "./components/Admin/Restaurant/Add.jsx";
import {EditRestaurant} from './components/Admin/Restaurant/Update.jsx'

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DisplayRestaurant/>} />
            <Route path="/add" element={<AddRestaurant/>} />
            <Route path="/update/:id" element={<EditRestaurant/>} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
