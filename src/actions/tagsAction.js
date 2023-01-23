import axios from 'axios';
const API_URL = process.env.REACT_APP_API_HOST;

export const getTags = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'GET_TAGS_REQUEST' });
            const { data } = await axios.get(`${API_URL}/tags`);
            dispatch({ type: 'GET_TAGS_SUCCESS', tags: data });

        } catch (error) {
            dispatch({ type: 'GET_TAGS_FAILURE', error: error.message });
        }
    };
}

export const addTag = (tag) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'ADD_TAG_REQUEST' });
            const { data } = await axios.post(`${API_URL}/tags`, tag,
                { headers: { 'x-auth-token': `${localStorage.getItem('token')}` } });
            dispatch({ type: 'ADD_TAG_SUCCESS', category: data.createdCategory });
        } catch (error) {
            dispatch({ type: 'ADD_TAG_FAILURE', error: error.message });
        }
    }
}

export const deleteTag = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'DELETE_TAG_REQUEST' });
            await axios.delete(`${API_URL}/tags/${id}`,
                { headers: { 'x-auth-token': `${localStorage.getItem('token')}` } });
            dispatch({ type: 'DELETE_TAG_SUCCESS', id });
        }
        catch (error) {
            dispatch({ type: 'DELETE_TAG_FAILURE', error: error.message });
        }
    }
}

export const updateTag = (id, tag) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'UPDATE_TAG_REQUEST' });
            const { data } = await axios.put(`${API_URL}/category/${id}`, tag,
                { headers: { 'x-auth-token': `${localStorage.getItem('token')}` } });
            dispatch({ type: 'UPDATE_TAG_SUCCESS', category: data });
        }
        catch (error) {
            dispatch({ type: 'UPDATE_TAG_FAILURE', error: error.message });
        }
    }
}