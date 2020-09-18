import React from 'react';

import SubTotal from './Subtotal';

import {
  Container,
  CheckoutLeft,
  CheckoutImgAd,
  CheckoutRight,
} from './styles';

const Checkout: React.FC = () => {
  return (
    <Container>
      <CheckoutLeft>
        <CheckoutImgAd src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
        <div className="">
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </CheckoutLeft>
      <CheckoutRight>
        <SubTotal />
      </CheckoutRight>
    </Container>
  );
};

export default Checkout;
