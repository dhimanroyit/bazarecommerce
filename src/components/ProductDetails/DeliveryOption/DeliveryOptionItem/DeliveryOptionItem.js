import React from 'react'

const DeliveryOptionItem = ({icon, title, action}) => {
  return (
    <div className="delivery-item">
      <div className="delivery-item__icon">{icon}</div>
      <h4 className="delivery-item__title">{title}</h4>
      <p className="delivery-item__action">{action}</p>
    </div>
  )
}

export default DeliveryOptionItem;