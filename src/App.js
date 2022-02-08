import React from "react";
import "./style.css";
import store from './store/store';
import {Provider} from 'react-redux'
import User from './user';
import Product from './product'

export default function App() {
  return (
    <Provider store={store}>
    <div className='betterview'>
      <h1>Hello StackBlitz!</h1>
      <User></User>
      <Product></Product>
    </div>
    </Provider>
  );
}
