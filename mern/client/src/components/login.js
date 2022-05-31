import React, { useState } from "react";
export default function Login()  {
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function signin(event) {
        event.preventDefault();

        const config = {
            
        }

        try {
            const person = {email,password}
            const {data} = await fetch("http://localhost:5000/user/login", {body: JSON.stringify(person), method: "POST",
            headers: {
                "Content-Type": "application/json"
            },});
    
        } catch (error) {
            alert("Invalid credentials")
        }
    }


        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form onSubmit={signin}>
                <h2>Log In</h2>
                <div className="form-group">
                    <label className="x">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    onChange={(event)=>{setEmail(event.target.value)}}/>
                </div>
                <div className="form-group">
                    <label className="x">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                     onChange={(event)=>{setPassword(event.target.value)}} />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label color="black" className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
    </div>
        );
    }
