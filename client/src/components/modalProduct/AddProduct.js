import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = ({ closeModal, productToBeAdded }) => {

    const [ productInfo, setProductInfo ] = useState({ title: '', description: '', quantity: '', price: '' })

    const addProduct = async (e) => {
        e.preventDefault();

        const { title, description, quantity, price } = productInfo;

        const res = await fetch('/addProduct', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify({
                title, description, quantity, price
            })
        })

        const data = await res.json();

        if(!data) {
            console.log("Couldn't add the Product")
        } else {
            alert(' Product added successfully ');
        }

    };

    return (
        // <div className='addProduct'>
            
            <div className='addProduct__container'>

                <form method="POST" className='addProduct__form'>
                    <div>
                        <label> Title: </label>
                        <input type='text' value={productInfo.title} onChange={(e) => setProductInfo({...productInfo, title: e.target.value})} />
                    </div>

                    <div>
                        <label> Description: </label>
                        <input type='text' value={productInfo.description} onChange={(e) => setProductInfo({...productInfo, description: e.target.value})} />
                    </div>

                    <div>
                        <label> Quantity: </label>
                        <input type='number' value={productInfo.quantity} onChange={(e) => setProductInfo({...productInfo, quantity: e.target.value})} />
                    </div>

                    <div>
                        <label> Price: </label>
                        <input type='number' value={productInfo.price} onChange={(e) => setProductInfo({...productInfo, price: e.target.value})} />
                    </div>
                    
                    <Button variant='outlined' onClick={addProduct} style={{ background: '#F6D992'}} >
                        Add
                    </Button>
                </form>

                <Button onClick={closeModal} >
                    close
                </Button>
            </div>
            
        // </div>
    )
}

export default AddProduct
