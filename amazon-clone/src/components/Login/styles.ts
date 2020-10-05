import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

export const LogoImg = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
  object-fit: contain;
`;

export const LogInContent = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;

  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  form h5 {
    margin-bottom: 5px;
  }

  form input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
  }

  p {
    margin-top: 15px;
    font-size: 12px;
  }

  .login__signInButton {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
  }

  .login__registerButton {
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: darkgray;
  }
`;