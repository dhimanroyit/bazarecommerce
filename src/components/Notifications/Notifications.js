import React from "react";

const Notifications = () => {
  return (
    <ul className="notification">
      <li className="notification__item">
        <a href="" className="notification__link">
          <i class="fas fa-cart-plus"></i>
        </a>
      </li>
      <li className="notification__item">
        <a href="" className="notification__link">
        <i class="far fa-bell"></i>
        </a>
      </li>
      <li className="notification__item">
        <a href="" className="notification__link">
        <i class="far fa-user"></i>
        </a>
      </li>
    </ul>
  )
}

export default Notifications;