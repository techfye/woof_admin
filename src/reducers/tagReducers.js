
const tag = {
    tags: [],
    message: '',
    loading: false,
    error: null,
}


const Tag = (state = tag, action) => {
    switch (action.type) {
        case 'GET_TAGS_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'GET_TAGS_SUCCESS':
            return {
                ...state,
                loading: false,
                tags: action.tags
            };
        case 'GET_TAGS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'ADD_TAG_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'ADD_TAG_SUCCESS':
            return {
                ...state,
                loading: false,
                categories: [...state.tags, action.tag]
            };
        case 'ADD_TAG_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'DELETE_TAG_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'DELETE_TAG_SUCCESS':
            console.log(state.categories)
            return {
                ...state,
                loading: false,
                categories: state.categories.filter(category => category._id !== action.id)
            };
        case 'DELETE_TAG_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'UPDATE_TAG_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'UPDATE_TAG_SUCCESS':
            return {
                ...state,
                loading: false,
                categories: state.categories.map(category => category.id === action.category.id ? action.category : category)
            };
        case 'UPDATE_TAG_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'GET_TAG_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'GET_TAG_SUCCESS':
            return {
                ...state,
                loading: false,
                singleCategory: action.category
            };
        case 'GET_TAG_FAILURE':
            return {
                ...state,
                loading: false,
            }
            
        default: return state;
    }
}

export default Tag;