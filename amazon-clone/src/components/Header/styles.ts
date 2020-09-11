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
`;

export const LogoImg = styled.img`
  height: 30px;
  width: 97px;
  margin: 0 20px;
  margin-top: 18px;
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

`;
