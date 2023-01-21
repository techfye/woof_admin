import axios from 'axios';
const API_URL = process.env.REACT_APP_API_HOST;

export const getCategories = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'GET_CATEGORIES_REQUEST' });
            const { data } = await axios.get(`${API_URL}/api/category`);
            dispatch({ type: 'GET_CATEGORIES_SUCCESS', categories: data });
            dispatch({ type: 'GET_CATEGORIES_FAILURE', error: null });

        } catch (error) {
            dispatch({ type: 'GET_CATEGORIES_FAILURE', error: error.message });
        }
    };
}

export const addCategory = (category) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'ADD_CATEGORY_REQUEST' });
            const { data } = await axios.post(`${API_URL}/api/category`, category,
                { headers: { 
                        'x-auth-token': `${localStorage.getItem('token')}`,
                        'Content-Type': 'multipart/form-data'
                    } });
            dispatch({ type: 'ADD_CATEGORY_SUCCESS', category: data.createdCategory });
        } catch (error) {
            dispatch({ type: 'ADD_CATEGORY_FAILURE', error: error.message });
        }
    }
}

export const deleteCategory = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'DELETE_CATEGORY_REQUEST' });
            await axios.delete(`${API_URL}/api/category/${id}`,
                { headers: { 'x-auth-token': `${localStorage.getItem('token')}` } });
            dispatch({ type: 'DELETE_CATEGORY_SUCCESS', id });
        }
        catch (error) {
            dispatch({ type: 'DELETE_CATEGORY_FAILURE', error: error.message });
        }
    }
}

export const updateCategory = (id, category) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'UPDATE_CATEGORY_REQUEST' });
            const { data } = await axios.put(`${API_URL}/api/category/${id}`, category,
                { headers: { 'x-auth-token': `${localStorage.getItem('token')}` } });
            dispatch({ type: 'UPDATE_CATEGORY_SUCCESS', category: data });
        }
        catch (error) {
            dispatch({ type: 'UPDATE_CATEGORY_FAILURE', error: error.message });
        }
    }
}