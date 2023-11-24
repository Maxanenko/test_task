import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProductCover from "../product-cover/product-cover";
import ProductBuy from "../product-buy/product-buy";
import ProductCategory from "../product-category/product-category";
import {setCurrentProduct} from "../../redux/products/reducer";
import './product-item.css'

const ProductItem = ({product}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handelClick = () => {
        dispatch(setCurrentProduct(product))
        navigate(`/app/${product.id}`)
    }

    return (
        <div className='product-item' onClick={ handelClick }>
            <ProductCover image={product.image}/>
            <div className='product-item_details'>
                <p className='product-item__title'>
                    {product.title}
                </p>
                <div className='product-item__category'>
                    <ProductCategory category={product.category}/>
                </div>
                <div className='product-item__buy'>
                    <ProductBuy product={product} />
                </div>
            </div>
        </div>
    );
};

export default ProductItem;