import {createStore,combineReducers} from 'redux';
import userreducer from './userreducer';
import productreducer from './productreducer';
const rootReducer = combineReducers({
  user:userreducer,
  product:productreducer
})
const store = new createStore(rootReducer);
export default store;