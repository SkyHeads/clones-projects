import React, { useCallback, useContext } from 'react';
import { Store } from '../../hooks/Store';
import { Container, ProductInfo } from './styles';

export interface ProductProps {
  id?: string;
  title?: string;
  image?: string;
  price?: number;
  rating?: number;
}

const Product: React.FC<ProductProps> = ({
  id,
  title,
  image,
  price,
  rating,
}) => {
  const { state, dispatch } = useContext(Store);

  const addToBasket = useCallback(() => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: { id, title, image, price, rating },
    });
  }, [dispatch, id, title, image, price, rating]);

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

      <button onClick={addToBasket} type="submit">
        Adicionar ao Carrinho
      </button>
    </Container>
  );
};

export default Product;
