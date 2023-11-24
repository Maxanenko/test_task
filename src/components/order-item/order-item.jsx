import React from 'react';
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../redux/cart/reducer";
import {IoMdCloseCircleOutline} from "react-icons/io";
import ProductImage from "../product-image/product-image";
import './order-item.css';

const OrderItem = ({product}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteItemFromCart(product.id))
    }

    return (
        <div className='order-item'>
            <div className="order-item__cover">
                <ProductImage image={product.image}/>
            </div>
            <div className={'order-item__title'}>
                <span>{product.title}</span>
            </div>
            <div className='order-item__price'>
                <span>{product.price} $</span>
                <IoMdCloseCircleOutline
                    size={25}
                    className='cart-item__delete-icon'
                    onClick={ handleClick }
                />
            </div>
        </div>
    );
};

export default OrderItem;