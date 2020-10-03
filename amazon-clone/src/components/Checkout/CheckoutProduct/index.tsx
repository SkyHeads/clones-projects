import React, { useCallback, useContext } from 'react';

import { Store } from '../../../hooks/Store';

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
  const { state, dispatch } = useContext(Store);

  const removeFromBasket = useCallback(() => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: { id },
    });
  }, [dispatch, id]);

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
        <CheckoutProductButton type="button" onClick={removeFromBasket}>
          Remove from basket
        </CheckoutProductButton>
      </CheckoutProductInfo>
    </Container>
  );
};

export default CheckoutProduct;
