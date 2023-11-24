import React from 'react';
import './product-image.css'

const ProductImage = ({image}) => {
    return (
        <div>
            <div className='product-image' style={{backgroundImage: `url(${image})`}} />
        </div>
    );
};

export default ProductImage;