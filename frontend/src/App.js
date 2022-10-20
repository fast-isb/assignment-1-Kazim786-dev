//import logo from './logo.svg';

import './style.css'
import React from 'react';
import {  BrowserRouter, Routes, Route } from "react-router-dom";

import { AddRestaurant } from "./components/Admin/Restaurant/Add.jsx";
import { EditRestaurant } from "./components/Admin/Restaurant/Update.jsx";
import { DisplayRestaurant } from "./components/Admin/Restaurant/Display.jsx";
import {DisplayRestaurantById} from "./components/Admin/Restaurant/Display_specific_restaurant.jsx";


function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/admin/restaurant" element={<DisplayRestaurant/>} />
            <Route path="/admin/restaurant/add" element={<AddRestaurant/>} />
            <Route path="/admin/restaurant/update/:id" element={<EditRestaurant/>} />
            <Route path="/admin/restaurant/:id" element={<DisplayRestaurantById/>} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}
//component={AddRestaurant}
export default App;
