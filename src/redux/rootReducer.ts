import {combineReducers} from '@reduxjs/toolkit';
import cryptoReducer from './slices/crypto';

const rootReducer = combineReducers({
  crypto: cryptoReducer,
});

export default rootReducer;
