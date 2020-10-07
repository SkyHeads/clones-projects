import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1368px;
`;

export const HomeContent = styled.div``;

export const HomeContentRow = styled.div`
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;

  @media (max-width: 484px) {
    flex: 1;
    flex-direction: column;
    align-items: center;
  }
`;

export const HomeContentImg = styled.img`
  width: 100%;
  z-index: -1;
  margin-bottom: -110px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

  margin-bottom: -340px;

  @media (max-width: 920px) {
    display: none;
  }
`;
