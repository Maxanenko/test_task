import {useMemo} from "react";


export const useSortedProduct = (products, searchQuery) => {
    return useMemo(() => {
        return products.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, products])
}