//import logo from './logo.svg';

import './style.css'
import './loginSignupstyle.css'
import React from 'react';
import {  BrowserRouter, Routes, Route } from "react-router-dom";

import { AddRestaurant } from "./components/Admin/Restaurant/Add.jsx";
import { EditRestaurant } from "./components/Admin/Restaurant/Update.jsx";
import { DisplayRestaurant } from "./components/Admin/Restaurant/Display.jsx";
import {DisplayRestaurantById} from "./components/Admin/Restaurant/Display_specific_restaurant.jsx";
// import Login from "./components/managerlogin.jsx"
// import SignUp from "./components/managersignup.jsx"
import AdminLogin from './components/login.jsx'
import NoMatch from './components/NoMatch.jsx'
// import { AuthProvider } from './components/authentication/auth.js';
// import { RequireAdminAuth } from './components/authentication/RequireAdminAuth.js'

function App() {

  return (
      <div className='App'>
       {/* {
         <BrowserRouter>
         <AuthProvider>
           <Routes>
               <Route path='/login' element={<AdminLogin  testauth={testauth} />}/>
               <Route path="/admin/restaurant" element={<RequireAdminAuth><DisplayRestaurant/></RequireAdminAuth>} />
               <Route path="/admin/restaurant/add" element={<RequireAdminAuth><AddRestaurant/></RequireAdminAuth>} />
               <Route path="/admin/restaurant/update/:id" element={<RequireAdminAuth><EditRestaurant/></RequireAdminAuth>} />
               <Route path="/admin/restaurant/:id" element={<RequireAdminAuth><DisplayRestaurantById/></RequireAdminAuth>} />
               <Route path='*' element={<NoMatch data="404 Not Found!"/>}/>
            </Routes>
           </AuthProvider>
          </BrowserRouter> 
        } */}
        
        {
          <BrowserRouter>
            <Routes>
               <Route path='/login' element={<AdminLogin />}/>
               <Route path="/admin/restaurant" element={<DisplayRestaurant />} />
               <Route path="/admin/restaurant/add" element={<AddRestaurant />} />
               <Route path="/admin/restaurant/update/:id" element={<EditRestaurant />} />
               <Route path="/admin/restaurant/:id" element={<DisplayRestaurantById />} />
               <Route path='*' element={<NoMatch data="404 Not Found!"/>}/>
            </Routes>
          </BrowserRouter>
        }
      </div>
  )
}

export default App;
