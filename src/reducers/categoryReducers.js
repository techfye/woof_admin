
const category = {
    categories: [],
    message: '',
    loading: false,
    error: null,
}


const Category = (state = category, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES_REQUEST':
            return {
                ...state,
            };
        case 'GET_CATEGORIES_SUCCESS':
            return {
                ...state,
                loading: false,
                categories: action.categories
            };
        case 'GET_CATEGORIES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'ADD_CATEGORY_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'ADD_CATEGORY_SUCCESS':
            return {
                ...state,
                loading: false,
                categories: [...state.categories, action.category]
            };
        case 'ADD_CATEGORY_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'DELETE_CATEGORY_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'DELETE_CATEGORY_SUCCESS':
            console.log(state.categories)
            return {
                ...state,
                loading: false,
                categories: state.categories.filter(category => category._id !== action.id)
            };
        case 'DELETE_CATEGORY_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'UPDATE_CATEGORY_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'UPDATE_CATEGORY_SUCCESS':
            return {
                ...state,
                loading: false,
                categories: state.categories.map(category => category.id === action.category.id ? action.category : category)
            };
        case 'UPDATE_CATEGORY_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'GET_CATEGORY_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'GET_CATEGORY_SUCCESS':
            return {
                ...state,
                loading: false,
                singleCategory: action.category
            };
        case 'GET_CATEGORY_FAILURE':
            return {
                ...state,
                loading: false,
            }
            
        default: return state;
    }
}

export default Category