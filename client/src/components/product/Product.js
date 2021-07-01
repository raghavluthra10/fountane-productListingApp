import React from 'react';
import './Product.css';
import DeleteIcon from '@material-ui/icons/Delete';

const Product = () => {

    const deleteListing = () => {

    };

    return (
        <div className='product'>
            <div className='product__top'>
                <h4>
                    Seller: Raghav
                </h4>

                <DeleteIcon onClick={deleteListing} style={{ cursor: 'pointer' }} />
            </div>
            

            <div className='product__bottom' > 
                <h5> Title: product 1 </h5>

                <h5> Description: This is my first product </h5>

                <h5> Quantity: 11 </h5>

                <h5> Price: 999 Rs </h5>
            </div>
        </div>
    )
}

export default Product
