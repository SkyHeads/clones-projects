import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import BasketIcon from '@material-ui/icons/ShoppingBasket';
import { Store } from '../../hooks/Store';

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
  const { state, _ } = useContext(Store);

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
        <Link to="/login">
          <div>
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

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
          <span>{state.basket.length}</span>
        </HeaderNavBasketBox>
      </Link>
    </Container>
  );
};

export default Header;
