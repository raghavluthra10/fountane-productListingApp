import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Listing.css';
import Product from '../../components/product/Product';
import AddProduct from '../../components/modalProduct/AddProduct';
import { useHistory } from 'react-router-dom';

const Listing = () => {
    const history = useHistory()

    const [ showProductModal, setShowProductModal ] = useState(false);
    const [ fetchedUserData, setFetchedUserData ] = useState({})

    const getUserDetails = async () => {
        try {
            const res = await fetch('/listing', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: "include"
            } );

            const data = await res.json();
            setFetchedUserData(data)

            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            } 

        } catch (err) {
            console.log(err);
            history.push('/login')
        }
        
    }

    useEffect(() => {   
        getUserDetails();
    }, []);

    return (
        <div className='listing'>

            {showProductModal && <AddProduct 
            closeModal={() => setShowProductModal(false)}
            /> }

            <div className='listing__top'>
                <h3> {fetchedUserData.name} </h3>

                <Button onClick={() => setShowProductModal(true)} variant='outlined' >
                    Add Product
                </Button>
            </div>

            <div className='listing__products'>
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            
        </div>
    )
}

export default Listing
