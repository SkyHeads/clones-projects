import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../hooks/Store';
import CheckoutProduct from '../Checkout/CheckoutProduct';

import { ProductProps } from '../Product';

import {
  Container,
  PaymentContent,
  PaymentSection,
  PaymentTitle,
} from './styles';

const Payment: React.FC = () => {
  const { user, state } = useContext(Store);

  return (
    <Container>
      <PaymentContent>
        <h1>
          Checkout (<Link to="/checkout"> {state.basket?.length} itens</Link>)
        </h1>
        <PaymentSection>
          <PaymentTitle>
            <h3>Endereço de entrega</h3>
          </PaymentTitle>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Santo André, SP</p>
          </div>
        </PaymentSection>
        <PaymentSection>
          <PaymentTitle>
            <h3>Revisar itens para entrega</h3>
          </PaymentTitle>
          <div className="payment__itens">
            {state.basket.map((item: ProductProps) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </PaymentSection>
        <PaymentSection>
          <PaymentTitle>
            <h3>Método de pagamento</h3>
          </PaymentTitle>
          <div className="payment__details">{/* Detalhes */}</div>
        </PaymentSection>
      </PaymentContent>
    </Container>
  );
};

export default Payment;
