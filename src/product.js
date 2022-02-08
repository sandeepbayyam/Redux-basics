import React from 'react';
import {connect} from 'react-redux';

function Product (props){
  return(
    <div className='betterview'>
      <h3> Product details</h3>
      <h3>{props.product[1].product}</h3>
      <h3>{props.product[1].price}</h3>
    </div>
  );
}
export default connect((store)=>{
  return store;
}) (Product);