import React from "react";
import DeliveryOptionItem from "./DeliveryOptionItem/DeliveryOptionItem";

const deliveryOption = [
  {id: "a1", deliveryIcon: <i class="fas fa-dollar-sign"></i>, deliveryTitle: "Delivery Charge", deliveryAction: 'TK 50'},
  {id: "a2", deliveryIcon: <i class="far fa-clock"></i>, deliveryTitle: "Delivery Time", deliveryAction: '24 Hour'},
  {id: "a3", deliveryIcon: <i class="fas fa-hand-holding-usd"></i>, deliveryTitle: "Cash on Delivery", deliveryAction: 'Available'},
  {id: "a4", deliveryIcon: <i class="fas fa-undo-alt"></i>, deliveryTitle: "7 Days Return", deliveryAction: ''},
  {id: "a5", deliveryIcon: <i class="fas fa-ban"></i>, deliveryTitle: "Warranty not available", deliveryAction: ''},
]

const DeliveryOption = () => {
  return (
    <div className="delivery-option">
        {deliveryOption.map(({id, deliveryIcon, deliveryTitle, deliveryAction}) => (
            <DeliveryOptionItem 
              key={id} 
              icon={deliveryIcon}
              title={deliveryTitle}
              action={deliveryAction} />
          ))}
    </div>
  )
}

export default DeliveryOption;