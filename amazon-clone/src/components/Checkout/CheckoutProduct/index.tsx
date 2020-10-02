import React from 'react';

import { ProductProps } from '../../Product';

import {
  Container,
  CheckoutProductImage,
  CheckoutProductInfo,
  CheckoutProductTitle,
  CheckoutProductPrice,
  CheckoutProductRating,
  CheckoutProductButton,
} from './styles';

const CheckoutProduct: React.FC<ProductProps> = ({
  id,
  image,
  title,
  price,
  rating,
}) => {
  return (
    <Container>
      <CheckoutProductImage src={image} />
      <CheckoutProductInfo>
        <CheckoutProductTitle>{title}</CheckoutProductTitle>
        <CheckoutProductPrice>
          <small>$</small>
          <strong>{price}</strong>
        </CheckoutProductPrice>
        <CheckoutProductRating>
          {Array(rating)
            .fill(rating, 0)
            .map((_: any, i: number) => (
              <p key={i}>🌟</p>
            ))}
        </CheckoutProductRating>
        <CheckoutProductButton type="button">
          Remove from basket
        </CheckoutProductButton>
      </CheckoutProductInfo>
    </Container>
  );
};

export default CheckoutProduct;
