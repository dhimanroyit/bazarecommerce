import React from "react";
import { Row, Col } from "antd";
import DeliveryOption from "./DeliveryOption/DeliveryOption";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductCarousel from "./ProductCarousel/ProductCarousel";

const ProductDetails = () => {
  return (
    <section className="product-details">
      <div className="container">
        <Row gutter={16}>
          <Col md={8}>
            <ProductCarousel />
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