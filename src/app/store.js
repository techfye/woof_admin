import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index';
const devTolls = () => {
  if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    return window.__REDUX_DEVTOOLS_EXTENSION__();
  }
  return undefined;
};


export const store = configureStore({
  reducer : rootReducer,
  devTools: devTolls(),
}
);
