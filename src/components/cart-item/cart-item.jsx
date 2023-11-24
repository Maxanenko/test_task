import React from 'react';
import './cart-item.css';

const CartItem = ({product}) => {
    return (
        <div className='cart-item'>
            <p className='cart-item__title'>{product.title}</p>
            <div className='cart-item__price'>
                <span>{product.price} $</span>
            </div>
        </div>
    );
};

export default CartItem;