import React, { useContext } from 'react';
import { Store, getBasketTotal } from '../../../hooks/Store';

import { Container } from './styles';

const Subtotal: React.FC = () => {
  const { state, _ } = useContext(Store);

  return (
    <Container>
      <>
        <p>
          Subtotal ({state.basket.length} items):
          <strong>R$ {getBasketTotal(state.basket)}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" />
          This order contains a gift
        </small>
      </>

      <button type="submit">Proceed to Checkout</button>
    </Container>
  );
};

export default Subtotal;
