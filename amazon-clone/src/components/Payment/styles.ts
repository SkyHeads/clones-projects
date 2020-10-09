import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
`;

export const PaymentContent = styled.div`
  > h1 {
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgray;
  }
`;

export const PaymentSection = styled.section`
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgray;

  .payment__address,
  .payment__itens {
    flex: 0.8;
  }
`;

export const PaymentTitle = styled.div`
  flex: 0.2;
`;
