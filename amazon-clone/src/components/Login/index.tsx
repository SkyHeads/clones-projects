import React from 'react';

import Logo from '../../assets/img/logo-white.png';

import { Container, LogoImg } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <LogoImg src={Logo} />
    </Container>
  );
};

export default Login;
