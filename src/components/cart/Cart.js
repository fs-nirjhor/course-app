import React from 'react';
import { useState } from "react";
const Cart = (props) => {
  const addedCourse = props.addedCourse;
  const totalPrice = addedCourse.reduce((currentPrice,course) => currentPrice + course.price,0);
  const [alertStyle, setAlertStyle] = useState({display: 'none'});
  const payButtonHandler = event => {
    setAlertStyle({display: 'block'});
  };
return (
  <div className="pt-3 text-center sticky-top">
         <div className="card text-muted">
      <div className="card-body row justify-content-between">
        <big className="card-text col">Added Course: {addedCourse.length} </big> <br />
        <big className="card-text col"> Total Price: ${totalPrice}</big>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary w-100" onClick={payButtonHandler}>Pay Now!</button>
      <div style={alertStyle} className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Paid Successfully!</strong> 
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
      </div>
    </div>
  </div>
);
};

export default Cart;