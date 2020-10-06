import React, { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';

import BasketIcon from '@material-ui/icons/ShoppingBasket';
import firebase from '../../firebase';

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
  const { state, user } = useContext(Store);

  const handleSignOut = useCallback(() => {
    if (user) {
      firebase.auth().signOut();
    }
  }, [user]);

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
          <div onClick={handleSignOut}>
            {!user ? (
              <span className="header__optionLineOne">Faça Login</span>
            ) : (
              <span className="header__optionLineOne">Olá {user?.email}</span>
            )}
            <span className="header__optionLineTwo">
              {user ? 'Sair' : 'Entrar'}
            </span>
          </div>
        </Link>

        <div>
          <span className="header__optionLineOne">Retornar</span>
          <span className="header__optionLineTwo">& Pedidos</span>
        </div>

        <div>
          <span className="header__optionLineOne">Seu</span>
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
