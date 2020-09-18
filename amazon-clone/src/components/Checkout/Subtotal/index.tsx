import React from 'react';
import { Container } from './styles';

const Subtotal: React.FC = () => {
  return (
    <Container>
      <>
        <p>
          Subtotal (0 items):
          <strong>0</strong>
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
