import axios from 'axios';
const API_URL = process.env.REACT_APP_API_HOST;
export const loginUser = (email, password) => {
    return {
        type: 'LOGIN',
        payload: {
            email,
            password
        }
    }
}

export const logoutUser = () => {
    return {
        type: 'LOGOUT'
    }
}

export function getProducts() {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_PRODUCTS_REQUEST' });
            const { data } = await axios.get(`${API_URL}/products`);
            dispatch({ type: 'GET_PRODUCTS_SUCCESS', products: data });
        } catch (error) {
            dispatch({ type: 'GET_PRODUCTS_FAILURE', error: error.message });
        }
    }
}

export function addProduct(product) {
    return async dispatch => {
        try {
            dispatch({ type: 'ADD_PRODUCT_REQUEST' });
            const { data } = await axios.post(`${API_URL}/products/create`, product,
                {
                    headers: {
                        'x-auth-token': `${localStorage.getItem('token')}`,
                        'Content-Type': 'multipart/form-data'
                    }
                });
            dispatch({ type: 'ADD_PRODUCT_SUCCESS', product: data });
        } catch (error) {
            dispatch({ type: 'ADD_PRODUCT_FAILURE', error: error.message });
        }
    }
}

export function deleteProduct(id) {
    return async dispatch => {
        try {
            dispatch({ type: 'DELETE_PRODUCT_REQUEST' });
            await axios.delete(`${API_URL}/products/delete/${id}`,
                { headers: { 'x-auth-token': `${localStorage.getItem('token')}` } });
            dispatch({ type: 'DELETE_PRODUCT_SUCCESS', id });
        } catch (error) {
            dispatch({ type: 'DELETE_PRODUCT_FAILURE', error: error.message });
        }
    }
}

export function updateProduct(id, product) {
    return async dispatch => {
        try {
            dispatch({ type: 'UPDATE_PRODUCT_REQUEST' });
            const { data } = await axios.put(`${API_URL}/products/update/${id}`, product,
                { headers: { 'x-auth-token': `${localStorage.getItem('token')}` } });
            dispatch({ type: 'UPDATE_PRODUCT_SUCCESS', product: data });
        } catch (error) {
            dispatch({ type: 'UPDATE_PRODUCT_FAILURE', error: error.message });
        }
    }
}
