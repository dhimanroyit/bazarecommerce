import React from 'react';
import { Rate} from 'antd';
import QuantityBtn from '../QuantityBtn/QuantityBtn';
import Button from '../../Button/Button';

const ProductInfo = () => {
  return ( 
    <div className="product-info">
      <header className="product-info__header">
      <h1 className="product-info__title">Tangail Cotton Jamdani Saree RCS00354</h1>
      <p className="product-info__sku"><span>SKU: </span>RCS00354</p>
      <p className="product-info__brand">
        <span>Brand: </span>
        Rongdhonu Crafts
      </p>
      <div className="product-info__rating">
        <Rate allowHalf defaultValue={2.5} />
      </div>
      </header>
      
      <p className="product-info__price">
        <span>Price: </span> 
        <strong>Tk 500</strong>
      </p>
      <p className="product-info__stock">In Stock</p>
      <div className="product-info__quantity">
        <span>Quantity: </span>
        <QuantityBtn />
      </div>
      <div className="product-info__buy">
        <Button icon={<i class="fas fa-cart-plus"></i>} title="Add to Cart" />
        <Button icon={<i class="fas fa-play"></i>} title="Buy Now" />
      </div>
    </div>
   );
}
 
export default ProductInfo;