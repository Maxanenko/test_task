import React, {useEffect, useState} from 'react';
import ProductItem from "../../components/product-item/product-item";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../redux/products/reducer";
import SearchInput from "../../components/UI/search-input/search-input";
import {useSortedProduct} from "../../hooks/useProduct";
import './home-page.css'

const HomePage = () => {
    const dispatch = useDispatch()
    const {status, error} = useSelector(state => state.product)

    const products = useSelector(state => state.product.products)
    const [searchQuery, setSearchQuery] = useState('')
    const sortedProduct = useSortedProduct(products, searchQuery)


    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div className="main">
            <div className='main__search-input'>
                <SearchInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='Search by name...'
                ></SearchInput>
            </div>
            <div className='home-page'>
                {status === 'loading' && <h1>Loading.....</h1>}
                {error && <h1>An error occured: {error}</h1>}
                { sortedProduct.map(product => <ProductItem product={product} key={product.id} />)}
            </div>
        </div>
    );
};

export default HomePage