import React from 'react';
import {calculateTotalPrice} from "../utils/utils";
import Button from "../UI/button/button";
import CartItem from "../cart-item/cart-item";
import './cart-menu.css';

const CartMenu = ({items, onClick}) => {
    return (
        <div className='cart-menu'>
            <div className="cart-menu__product-list">
                {
                    items.length !== 0
                        ? items.map(product => <CartItem key={product.id} product={product}/>)
                        : 'cart\'s empty'
                }
            </div>
            {
                items.length !== 0
                    ? <div className='cart-menu__arrange'>
                        <div className='cart-menu__total-price'>
                            <span>Total price: </span>
                            <span>{calculateTotalPrice(items)} $</span>
                        </div>
                        <Button type="primary" size='s' onClick={onClick}>Place an order</Button>
                    </div>
                    : null
            }
        </div>
    );
};

export default CartMenu;