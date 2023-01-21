import {combineReducers} from 'redux';
import Auth from './authReducers';
import Product from './productReducers';
import Category from './categoryReducers';
import Tag from './tagReducers';
import loadingReducer from './loadingReducer';
const rootReducer = combineReducers({
    Auth,
    Product,
    Category,
    Tag,
    loadingReducer
});

export default rootReducer;