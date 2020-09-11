import React from 'react';

import Logo from '../../assets/img/logo-white.png';

import { Container, LogoImg, HeaderSearch, HeaderNav } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoImg src={Logo} />
      <HeaderSearch>
        <input type="text"/>
      </HeaderSearch>
      <HeaderNav>
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </HeaderNav>
    </Container>
  );
}

export default Header;