import React from 'react';
import SliderImage from "react-zoom-slider";

const ProductCarousel = () => {
  const data = [
    {
      image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg',
    },
    {
      image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg',
    },
    {
      image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg',
    },
  ];
  return ( 
    <div className="product-carousel">
      <SliderImage 
        data={data} 
        width="100%" 
        showDescription={false} 
        direction="right" 
      />
    </div>
   );
}
 
export default ProductCarousel;