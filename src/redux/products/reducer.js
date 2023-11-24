import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function(_, {rejectWithValue}) {
        try {
            const response = await axios.get('http://localhost:3001/products')

            if (response.statusText !== 'OK') {
                throw new Error("Sever Error!")
            }

            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        currentProduct: null,
        status: null,
        error: null
    },

    reducers: {
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload
        }
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.products = action.payload
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export const  {setCurrentProduct} = productSlice.actions
export default productSlice.reducer