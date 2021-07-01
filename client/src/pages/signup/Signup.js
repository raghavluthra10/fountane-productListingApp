import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Signup.css';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {

    const history = useHistory();

    const [ userDetails, setUserDetails ] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
        products: []
    })

    const signupUser = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword, products } = userDetails;

        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify({
                name, email, password, cpassword, products
            })
        })

        const data = await res.json();

        if(data.status === 422 || !data) {
            window.alert('Invalid registration')
        } else {
            window.alert('User Registered Successfully')
            history.push('/login');
        }
    }


    return (
        <div className="signup" >
            <h1 className='signup__heading'>
                Sign Up
            </h1>

            <form method="POST" onSubmit={signupUser} className='signup__form' >
                <div>
                    <label> Name: </label>
                    <input type='text' value={userDetails.name} onChange={(e) => setUserDetails({...userDetails, name: e.target.value})} />
                </div>

                <div>
                    <label> Email: </label>
                    <input type='text' value={userDetails.email} onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}  />
                </div>

                <div>
                    <label> Password: </label>
                    <input type='password' value={userDetails.password} onChange={(e) => setUserDetails({...userDetails, password: e.target.value})}  />
                </div>

                <div>
                    <label> Confirm Password: </label>
                    <input type='password' value={userDetails.cpassword} onChange={(e) => setUserDetails({...userDetails, cpassword: e.target.value})}  />
                </div>

                <Button type='submit' variant='outlined' className='signup__button' >
                    signup
                </Button>
            </form>

            <p className='signup__alreadyUser'>
                Already a user? <Link to='/login'> Login </Link>
            </p>
        </div>
    )
}

export default Signup
