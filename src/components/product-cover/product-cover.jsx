import React from 'react';
import './product-cover.css'

const ProductCover = ({image = ""}) => {
    return (
        <div className='product-cover' style={{backgroundImage: `url(${image})`}} />
    );
};

export default ProductCover;