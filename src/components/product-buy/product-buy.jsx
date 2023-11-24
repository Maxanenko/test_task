import React from 'react';
import './product-buy.css';
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/button/button";
import {deleteItemFromCart, setItemInCart} from "../../redux/cart/reducer";

const ProductBuy = ({product}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCard = items.some(item => item.id === product.id)
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCard) {
            dispatch(deleteItemFromCart(product.id))
        } else dispatch(setItemInCart(product))
    }

    return (
        <div className='product-buy'>
            <span className='product-buy__price'>{product.price} $</span>
            <Button
                type={isItemInCard ? 'secondary' : 'primary'}
                onClick={ handleClick }
            >{isItemInCard ? 'Remove from cart' : 'Add to cart'}
            </Button>
        </div>
    );
};

export default ProductBuy;