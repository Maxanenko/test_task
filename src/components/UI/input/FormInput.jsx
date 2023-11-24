import React from 'react';
import './FormInput.css'

const FormInput = (props) => {
    return (
        <input className='form-input' {...props}/>
    );
};

export default FormInput;