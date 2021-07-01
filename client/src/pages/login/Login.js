import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Login = () => {

    const history = useHistory();

    const [ userDetails, setUserDetails ] = useState({ email: '', password: '' })

    const loginUser = async(e) => {
        e.preventDefault();
        const { email, password } = userDetails;

        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })

        const data = await res.json();
    
        if(res.status === 400 || !data) {
            window.alert('Invalid Credentials')
        } else {
            window.alert("Login Successfull")
            history.push('/listing');
        }
    }

    return (
        <div className="login" >
        <h1 className='login__heading'>
            Login
        </h1>

        <form method="POST" onSubmit={loginUser} className='login__form' >

            <div>
                <label> Email: </label>
                <input type='text' value={userDetails.email} onChange={ (e)=> setUserDetails({...userDetails, email: e.target.value}) } />
            </div>

            <div>
                <label> Password: </label>
                <input type='password' value={userDetails.password} onChange={ (e)=> setUserDetails({...userDetails, password: e.target.value}) } />
            </div>

            <Button type='submit' variant='outlined' className='login__button' >
                Login
            </Button>
        </form>

        <p className='login__newUser'>
            New here? <Link to='/signup'> SignUp </Link>
        </p>
    </div>
    )
}

export default Login
