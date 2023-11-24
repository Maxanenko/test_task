import React from 'react';
import {useSelector} from "react-redux";
import {calculateTotalPrice} from "../../components/utils/utils";
import OrderItem from "../../components/order-item/order-item";
import OrderForm from "../../components/order-form/order-form";
import './order-page.css';



const OrderPage = () => {
    const productsInCart = useSelector(state => state.cart.itemsInCart)



    if (productsInCart.length === 0) return <h1>Cart is empty</h1>

    return (
        <div className='order-page'>
            <div className="order-page__left">
                {productsInCart.map(product => <OrderItem product={product}/>)}
                <div className="order-page__total-price">
                    <span>
                        {productsInCart.length}: total cost {calculateTotalPrice(productsInCart)}
                    </span>
                </div>
            </div>
            <div className="order-page__right">
                <h2 className='order-page__form-title'>Checkout</h2>
                <OrderForm />
            </div>
        </div>
    );
};

export default OrderPage;