import React from "react";
import { Col, Rate } from "antd";
import product1 from "../../assets/product/product-1.png"

const ProductCard = () => {
  return (
    <Col md={4}>
      <div className="product-card">
        <div className="product-card__media">
          <img src={product1} alt="" className="product-card__img"/>
          <button className="product-card__cart">
            <i class="fas fa-cart-plus"></i>
            <span>Add to Cart</span>
          </button>
        </div>
        <div className="product-card__details">
          <h3 className="product-card__title">Lorem, ipsum dolor sit amet </h3>
          <div className="product-card__price-rating">
            <p className="product-card__price">$100</p>
            <Rate allowHalf defaultValue={2.5} />
          </div>
          
        </div>
      </div>
    </Col>
  )
}

export default ProductCard;