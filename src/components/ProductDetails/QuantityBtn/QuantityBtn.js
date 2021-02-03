import React from 'react';

const QuantityBtn = () => {
  return ( 
    <div className="quantity-btn">
      <input type="number" className="quantity-btn__input"/>
      <button className="quantity-btn__button"><i class="fas fa-minus"></i></button>
      <button className="quantity-btn__button"><i class="fas fa-plus"></i></button>
    </div>
   );
}
 
export default QuantityBtn;