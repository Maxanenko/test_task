import React, {useCallback, useState} from 'react';
import {useSelector} from "react-redux";
import {BiCart} from "react-icons/bi";
import CartMenu from "../cart-menu/cart-menu";
import {calculateTotalPrice} from "../utils/utils";
import ItemInCart from "../item-in-cart/item-in-cart";
import {useNavigate} from "react-router-dom";
import './cart-block.css'


const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calculateTotalPrice(items)
    const navigate = useNavigate();


    const handleClick = useCallback(
        () => {
        setIsCartMenuVisible(false)
        navigate('/order')
    }, [navigate])

    return (
        <div className='cart-block'>
            <ItemInCart quantity={items.length} />
            <BiCart
                size={25}
                className='cart-block__icon'
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            {totalPrice !== 0
                ? <span className='cart-block__total-price'> {totalPrice} $ </span>
                : null
            }
            {isCartMenuVisible && <CartMenu items={items} onClick={ handleClick }/>}
        </div>
    );
};

export default CartBlock;