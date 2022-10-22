import React from 'react';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
//import axios from 'axios';
export default function SignUp() {
    {
        var adminEmail="admin@gmail.com"
        var adminPassword="admin"

        const navigate = useNavigate()

        const [user,setUser] = useState({
            email:"",
            password:"",
            role:"Admin"
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
                navigate('/admin/restaurant')
            }

            try {
                //navigate('/admin/restaurant')
            } catch (error) {
                console.log("Registration unsuccessful")
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