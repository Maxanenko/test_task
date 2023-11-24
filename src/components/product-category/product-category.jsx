import React from 'react';
import './product-category.css'

const ProductCategory = ({category}) => {
    return (
        <span className='product-category'>
            {category}
        </span>
    );
};

export default ProductCategory;