import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const notify = () => toast('Successfully Created');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            try {
                await axios.post('http://localhost:4000/createuser',{
                    name,
                    email,
                    pass
                })

                

            } catch (error) {
                
            }
        } catch (error) {
            
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>

            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />

            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />

            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

            <button type="submit" onClick={notify}>Register</button>  

        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
