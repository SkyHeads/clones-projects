import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Store, getBasketTotal } from '../../../hooks/Store';

import { Container } from './styles';

const Subtotal: React.FC = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(Store);

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

      <button onClick={e => history.push('/payment')} type="button">
        Proceed to Checkout
      </button>
    </Container>
  );
};

export default Subtotal;
