import React from 'react';
import './product-page.css'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProductCategory from "../../components/product-category/product-category";
import ProductBuy from "../../components/product-buy/product-buy";
import ProductImage from "../../components/product-image/product-image";



const ProductPage = () => {

    const product = useSelector(state => state.product.currentProduct)
    if (!product) return <Navigate to={'/'}/>


    return (
        <div className='product-page'>
            <h1 className='product-page__title'>
                {product.title}
            </h1>
            <div className='product-page__content'>
                <ProductImage image={product.image}/>
                <p>{product.description}</p>
                <p>Category:</p>
                <ProductCategory category={product.category}/>
                <div className="product-page__buy-product">
                    <ProductBuy product={product}/>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;