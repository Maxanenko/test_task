import React, {useState} from 'react';
import FormInput from "../UI/input/FormInput";
import Button from "../UI/button/button";
import {useSelector} from "react-redux";
import './order-form.css'

const OrderForm = () => {
    const productsInCart = useSelector(state => state.cart.itemsInCart)
    const [order, setOrder] = useState({
        fullName: '',
        email: '',
        address: ''
    })

    const createOrder = (e) => {
        if (localStorage.getItem('orders')) {
            const orders = JSON.parse(localStorage.getItem('orders'))
            orders.push({...order, id: Date.now(), products: {...productsInCart}})
            localStorage.setItem('orders', JSON.stringify(orders))
        } else {
            localStorage.setItem('orders', JSON.stringify([{...order, id: Date.now(), products: {...productsInCart}}]))
        }

        setOrder({
            fullName: '',
            email: '',
            address: ''
        })
    }
    return (
        <div>
            <form onSubmit={createOrder}>
                <FormInput
                    value={order.fullName}
                    onChange={e => setOrder({...order, fullName: e.target.value})}
                    type="text"
                    placeholder='Enter the full name'
                    required
                />
                <FormInput
                    value={order.email}
                    onChange={e => setOrder({...order, email: e.target.value})}
                    type="text"
                    placeholder='Enter your email address'
                    required
                />
                <FormInput
                    value={order.address}
                    onChange={e => setOrder({...order, address: e.target.value})}
                    type="text"
                    placeholder='Enter the delivery address'
                    required
                />
                <Button type='primary'>Submit</Button>
            </form>
        </div>
    );
};

export default OrderForm;