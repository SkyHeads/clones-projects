import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1117px;
  min-width: 850px;
`;

export const HomeContent = styled.div``;

export const HomeContentRow = styled.div`
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;

  @media (max-width: 460px) {
    flex-direction: column;
    align-items: center;
  }

  &.mob-row {
    flex-direction: column;
    align-items: center;
  }

  &.mob-row {
    @media (min-width: 1100px) {
      flex-direction: row;
    }
  }
`;

export const HomeContentImg = styled.img`
  width: 100%;
  z-index: -1;
  margin-bottom: -250px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

  @media (max-width: 920px) {
    display: none;
  }
`;
