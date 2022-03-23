import React, { useContext } from 'react';
import './Navbar.css';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {

    const { state, dispatch } = useContext(UserContext);

    const history = useHistory();
  
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

            {state ? (
                <Button className='navbar__login' onClick={() => history.push('/logout')} >
                    Logout
                </Button>
            ) : (
                <Button className='navbar__login' onClick={() => history.push('/login')} >
                    Login
                </Button>
            )}
                
            
                
            

        </div>
    )
}

export default Navbar
