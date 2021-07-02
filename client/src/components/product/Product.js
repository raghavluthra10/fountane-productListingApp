import React from 'react';
import './Product.css';

const Product = ({ name, productDetails }) => {

    

    return (
        productDetails.map( (product) => (
            <>
                <div className='product'>
                    <div className='product__top'>
                        <h4>
                            By: {name}
                        </h4>
                    </div>
                
                    <div className='product__bottom' >

                        <h5> Title: {product.title} </h5>

                        <h5> Description: {product.description} </h5>

                        <h5> Quantity: {product.quantity} </h5>

                        <h5> Price: {product.price} Rs </h5>

                    </div>
                </div>
            </>
        ))     
    )
}


export default Product;
