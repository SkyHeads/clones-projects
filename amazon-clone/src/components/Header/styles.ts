import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';

export const Container = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;

  min-width: 850px;
`;

export const LogoImg = styled.img`
  height: 30px;
  width: 97px;
  margin: 0 20px;
  margin-top: 14px;
  object-fit: contain;
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
`;

export const HeaderSearchInput = styled.input`
  height: 22px;
  padding: 10px;
  border: none;
  width: 100%;
`;

export const HeaderSearchIcon = styled(SearchIcon)`
  padding: 5px;
  height: 22px !important;
  background-color: #cd9042;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-evenly;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: white;

    .header__optionLineOne {
      font-size: 10px;
    }

    .header__optionLineTwo {
      font-size: 13px;
      font-weight: 800;
    }
  }
`;

export const HeaderNavBasketBox = styled.div`
  display: flex;
  align-items: center;
  color: white;

  span {
    font-size: 15px;
    font-weight: 800;
    padding-right: 5px;
    margin-right: 10px;
    margin-left: 5px;
  }
`;
