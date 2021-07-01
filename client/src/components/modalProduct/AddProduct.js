import { Button } from '@material-ui/core';
import React from 'react';
import './AddProduct.css';

const AddProduct = ({ closeModal }) => {

    const addProduct = (e) => {
        e.preventDefault();

    };

    return (
        // <div className='addProduct'>
            
            <div className='addProduct__container'>

                <form className='addProduct__form'>
                    <div>
                        <label> Title: </label>
                        <input type='text' />
                    </div>

                    <div>
                        <label> Description: </label>
                        <input type='text' />
                    </div>

                    <div>
                        <label> Quantity: </label>
                        <input type='number' />
                    </div>

                    <div>
                        <label> Price: </label>
                        <input type='number' />
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
