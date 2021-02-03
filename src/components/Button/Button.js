import React from 'react';

const Button = ({icon, title}) => {
  return ( 
    <button className="theme-btn">
      <span className="theme-btn__icon">{icon}</span>
      {title}
    </button>
   );
}
 
export default Button;