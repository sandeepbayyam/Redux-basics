import React from 'react';
import {connect} from 'react-redux';

function User (props){
  return(
    <div className='betterview'>
      <h3>Hi User</h3>
      <h3>{props.user.firstname}</h3>
      <h3>{props.user.lastname}</h3>
    </div>
  );
}
export default connect((store)=>{
  return store;
}) (User);