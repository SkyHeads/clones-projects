import React from 'react';
import { Link } from 'react-router-dom';

import BasketIcon from '@material-ui/icons/ShoppingBasket';

import Logo from '../../assets/img/logo-white.png';

import {
  Container,
  LogoImg,
  HeaderSearch,
  HeaderSearchInput,
  HeaderNav,
  HeaderSearchIcon,
  HeaderNavBasketBox,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <LogoImg src={Logo} />
      </Link>
      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIcon />
      </HeaderSearch>
      <HeaderNav>
        <div>
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div>
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div>
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </HeaderNav>
      <Link to="/checkout">
        <HeaderNavBasketBox>
          <BasketIcon />
          <span>0</span>
        </HeaderNavBasketBox>
      </Link>
    </Container>
  );
};

export default Header;
