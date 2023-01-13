import React from 'react';
import { useState } from "react";

const Cart = (props) => {
  const addedCourse = props.addedCourse;
  const totalPrice = addedCourse.reduce((currentPrice,course) => currentPrice + course.price,0);
  const [alertStyle, setAlertStyle] = useState({display: 'none'});
  const payButtonHandler = event => {
    setAlertStyle({display: 'block'});
  };
  const okButtonHandler = event => {
    setAlertStyle({display: 'none'});
  };
return (
  <div className="pt-3 text-center sticky-top">
         <div className="card text-muted">
      <div className="card-body row justify-content-between">
        <big className="card-text col">Added Course: {addedCourse.length} </big> <br />
        <big className="card-text col"> Total Price: ${totalPrice}</big>
      </div>
      
      <div className="card-footer">
          <button class="btn btn-primary w-100" onClick={payButtonHandler}>
  Pay Now!
</button>
<div style={alertStyle} class="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body text-success ">
         <h1>Paid Successfully !</h1>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary w-25" onClick={okButtonHandler}>OK</button>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  </div>
);
};

export default Cart;