import React from 'react';
import './item-in-cart.css';

const ItemInCart = ({quantity = 0}) => {
    return quantity !== 0 ? (
        <div className='items-in-cart'>
            { quantity }
        </div>
    ) : null;
};

export default ItemInCart;