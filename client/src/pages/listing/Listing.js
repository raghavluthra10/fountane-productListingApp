import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Listing.css';
import Product from '../../components/product/Product';
import AddProduct from '../../components/modalProduct/AddProduct';
import { useHistory } from 'react-router-dom';

const Listing = () => {
    const history = useHistory()

    const [ showProductModal, setShowProductModal ] = useState(false);
    const [ fetchedUserName, setFetchedUserName ] = useState({})
    const [ userData, setUserData ] = useState([]);

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
            setFetchedUserName({...fetchedUserName, name: data.name})

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

    
    const getAllProducts = async () => {
        try {
            const res = await fetch('/getProducts', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: "include"
            })

                const data = await res.json();
                
                setUserData(data)

        } catch (err) {
            console.log(err);
        }
        
    }

    useEffect(() => {
        getAllProducts();
    }, [showProductModal])

    return (
        <div className='listing'>

            {showProductModal && <AddProduct 
            closeModal={() => setShowProductModal(false)}
            /> }

            <div className='listing__top'>
                <h3> {fetchedUserName.name} </h3>

                <Button onClick={() => setShowProductModal(true)} variant='outlined' >
                    Add Product
                </Button>
            </div>

            <div className='listing__products'>
                {userData && userData.map((product) => {

                    if(product.products.length > 0) {
                        return<Product 
                        name={product.name}
                        productDetails={product.products}
                        />
                    }
                })}
            </div>
            
        </div>
    )
}

export default Listing
