import React from 'react';

import { Container, ProductInfo } from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <ProductInfo>
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
        </div>

        <img
          src="https://images-na.ssl-images-amazon.com/images/G/32/br-crosscategory/2020/HUD/Deals/GW_Dash_Deals_slim_boxes_379x304._SY304_CB406804813_.jpg"
          alt=""
        />
      </ProductInfo>
    </Container>
  );
};

export default Product;
