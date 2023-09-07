import React, { useState,useNavigate } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';



export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    // const navigate = useNavigate();


    
    const notify = () => toast('User Login Successfully');
    const notSuc = () => toast('Invalid Credential');


    const handleSubmit = async(e) => {
        e.preventDefault();
            try {
                const data = await axios.post('http://localhost:4000/login',{
                    email,
                    pass
                })

                if (true){
                    notify();
                }
                console.log(data);
            } catch (error) {
                
            }
       
       
    }
    return (
        <div className="auth-form-container">
            <h2>Login</h2>

            <form className="login-form" onSubmit={handleSubmit}>

                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                <button type="submit">Log In</button>

                <Toaster/>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}