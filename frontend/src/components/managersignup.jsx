import React from 'react';
import { useState } from 'react'
//import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function SignUp() {
    {

        // const navigate = useNavigate()

        const [manager,setManager] = useState({
            fname:"",
            lname:"",
            email:"",
            password:"",
            refNo:"",
            role:"Manager"
        })
        const onChange = (e)=>{
            setManager( (m) => ({ ...m , [e.target.name]:e.target.value }) )

        }
        const onSubmit = async(e)=> {
            e.preventDefault();
            const form = e.currentTarget;

            if (form.checkValidity() === false) {
                //prevents further propagation of the current event in the capturing and bubbling phases
                //Propagation means bubbling up to parent elements
                e.stopPropagation();
            }

            try {
                await axios.post("http://localhost:3001/", manager)
            } catch (error) {
                console.log("Registration unsuccessful")
            }
        }

        return (
            <div className='auth-inner'>
                <form onSubmit={onSubmit}>
                    <h3>Sign Up</h3>
                    <div className="mb-3">
                        <label>First name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            name='fname'
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Last name</label>
                        <input type="text" onChange={onChange} className="form-control" placeholder="Last name" name='lname' required/>
                    </div>
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
                    <div className="mb-3">
                        <label>Restaurant Reference No.</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Reference No."
                            name='refNo'
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Already registered <a href="/">signIn?</a>
                    </p>
                </form>
            </div>
        )
    }
}