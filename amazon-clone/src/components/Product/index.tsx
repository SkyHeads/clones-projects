import React from 'react';

import { Container, ProductInfo } from './styles';

interface ProductProps {
  title: string;
  image: string;
  price?: number;
  rating: number;
}

const Product: React.FC<ProductProps> = ({ title, image, price, rating }) => {
  return (
    <Container>
      <ProductInfo>
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill(rating, 0)
            .map((_: any, i: number) => (
              <p>🌟</p>
            ))}
        </div>
      </ProductInfo>

      <img src={image} alt="Product" />

      <button type="submit">Add to Basket</button>
    </Container>
  );
};

export default Product;
