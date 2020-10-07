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
          <small>R$ </small>
          <strong>{price}</strong>
        </CheckoutProductPrice>
        <CheckoutProductRating>
          {Array(rating)
            .fill(rating, 0)
            .map((_: any, i: number) => (
              <i key={i} className="fa fa-star" />
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
