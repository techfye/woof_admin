const product = {
    products: [],
    loading: false,
    error: null,
};

const Product = (state = product, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                loading: false,
                products: action.products
            };
        case 'GET_PRODUCTS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'ADD_PRODUCT_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'ADD_PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                products: [...state.products, action.product]
            };
        case 'ADD_PRODUCT_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case 'DELETE_PRODUCT_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'DELETE_PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                products: state.products.filter(product => product._id !== action.id)
            };
        case 'DELETE_PRODUCT_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case 'UPDATE_PRODUCT_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'UPDATE_PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                products: state.products.map(product => product.id === action.product.id ? action.product : product)
            };
        case 'UPDATE_PRODUCT_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case 'GET_SINGLE_PRODUCT_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'GET_SINGLE_PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                singleProduct: action.product
            };
        case 'GET_SINGLE_PRODUCT_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };

            
        default: return state;
    }
}

export default Product;
