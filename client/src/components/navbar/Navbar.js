import React from 'react';
import './Navbar.css';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {

    const history = useHistory();

    const authStateChange = () => {
        history.push('/login')
    };

  
    return (
        <div className="navbar">
            <div className='navbar__navPages'>
                <Link to='/'>
                    Home
                </Link>

                <Link to='/listing'>
                    Listing
                </Link>
            </div>

            
            <Button className='navbar__login' onClick={authStateChange} >
                Login
            </Button>

            <Button className='navbar__login' onClick={() => history.push('/logout')} >
                Logout
            </Button>

        </div>
    )
}

export default Navbar
