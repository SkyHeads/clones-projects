import React, { useContext } from 'react';

import { AppContext } from '../../hooks/context';
import { Types } from '../../hooks/reducers';

import { Container, ProductInfo } from './styles';

interface ProductProps {
  id?: string;
  title: string;
  image: string;
  price?: number;
  rating: number;
}

const Product: React.FC<ProductProps> = ({
  id,
  title,
  image,
  price,
  rating,
}) => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state);
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
              <p key={i}>🌟</p>
            ))}
        </div>
      </ProductInfo>

      <img src={image} alt="Product" />

      <button
        onClick={() => {
          dispatch({
            type: Types.Add,
          });
        }}
        type="submit"
      >
        Add to Basket
      </button>
      {state.shoppingCart}
    </Container>
  );
};

export default Product;
