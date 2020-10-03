import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CheckoutProductImage = styled.img`
  max-width: 100%;
  width: 180px;
  height: 180px;
  object-fit: contain;
`;

export const CheckoutProductInfo = styled.div`
  padding-left: 20px;
`;

export const CheckoutProductTitle = styled.p`
  font-size: 17px;
  font-weight: 800;
`;

export const CheckoutProductPrice = styled.p`
  margin-top: 5px;
`;

export const CheckoutProductRating = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const CheckoutProductButton = styled.button`
  background: #f0c14b;
  border: 1px solid;
  padding: 0 5px;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
`;
