import React from 'react';
import './search-input.css'

const SearchInput = (props) => {
    return (
        <div>
            <input {...props} className='search-input' type="text"/>
        </div>
    );
};

export default SearchInput;