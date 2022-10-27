import React from 'react';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { useAuth } from './authentication/auth';


export default function Login( ) {
    {
        var adminEmail="admin@gmail.com"
        var adminPassword="admin"

        const auth = useAuth()
       // auth.logout()  // whenever user open login page page auth user is reset to null

        const navigate = useNavigate()  // to navigate on different screens

        const [user,setUser] = useState({
            email:"",
            password:"",
            role:""
        })
        const onChange = (e)=>{
            setUser( (m) => ({ ...m , [e.target.name]:e.target.value }) )

        }

        const onSubmit = async(e)=> {
            //e.preventDefault();
            const form = e.currentTarget;

            if (form.checkValidity() === false) {
                //prevents further propagation of the current event in the capturing and bubbling phases
                //Propagation means bubbling up to parent elements
                e.stopPropagation();
            }

            if(user.email===adminEmail && user.password === adminPassword){
                try {

                    user.role="admin"
                    auth.login(user)
                    navigate('/admin/restaurant')
                    alert("Admin Login Successfull")
                    
                } catch (error) {
                    console.log("Error")
                }
            }

            
        }

        return (
            <div className='auth-inner'>
                <form onSubmit={onSubmit}>
                    <h3>Sign In</h3>
                    
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name='email'
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name='password'
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}