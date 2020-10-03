import React, { useContext } from 'react';

import SubTotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

import { ProductProps } from '../Product';
import { Store } from '../../hooks/Store';

import {
  Container,
  CheckoutLeft,
  CheckoutImgAd,
  CheckoutRight,
} from './styles';

const Checkout: React.FC = () => {
  const { state, dispatch } = useContext(Store);

  return (
    <Container>
      <CheckoutLeft>
        <CheckoutImgAd src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>

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
      </CheckoutLeft>
      <CheckoutRight>
        <SubTotal />
      </CheckoutRight>
    </Container>
  );
};

export default Checkout;
