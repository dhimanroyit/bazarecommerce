import React from "react";
import { Row, Col } from "antd";
import DeliveryOption from "./DeliveryOption/DeliveryOption";
import ProductInfo from "./ProductInfo/ProductInfo";

const ProductDetails = () => {
  return (
    <section className="product-details">
      <div className="container">
        <Row gutter={16}>
          <Col md={8}>
            <div className="product-media">
              
            </div>
          </Col>
          <Col md={10}>
            <ProductInfo />
          </Col>
          <Col md={6}>
            <DeliveryOption />
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default ProductDetails;